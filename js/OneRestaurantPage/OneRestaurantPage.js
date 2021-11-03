import React, { Component, useRef } from 'react';
import DishesList from './DishesList/DishesList';
import FoodKind from './FoodKind/FoodKind';
import OneRestaurantHeader from './OneRestaurantHeader/OneRestaurantHeader';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import changeNameToURL from '../Functions/changeNameToURL';
import { Prompt } from 'react-router';
import Checkout from './ShoppingCart/Checkout/Checkout';
import CurrentPageNav from '../CurrentPageNav/CurrentPageNav';

class OneRestaurantPage extends Component {
	state = {
		order: [],
		checkoutIsOpen: false,
		isOrderOpenMobile: false,
	};

	componentDidUpdate = () => {
		if (this.state.order.length) {
			window.onbeforeunload = () => true;
		} else {
			window.onbeforeunload = undefined;
		}
	};

	handleMobileOrder = val => {
		this.setState({
			isOrderOpenMobile: val,
		});
	};

	handleOrder = (dish, val) => {
		if (val == 'addOrModify') {
			this.setState(
				{
					order: this.state.order.filter(el => el.id !== dish.id),
				},
				() => {
					this.setState({
						order: [...this.state.order, dish],
					});
				}
			);
		} else if (val === 'remove') {
			this.setState({
				order: this.state.order.filter(el => el.id !== dish),
			});
		}
	};

	handleCheckout = checkoutIsOpen => {
		this.setState({
			checkoutIsOpen,
		});
	};

	clearOrder = order => {
		this.setState({
			order,
		});
	};

	render() {
		const { address } = this.props;
		const { restaurants } = this.props.data;
		const { order, checkoutIsOpen, isOrderOpenMobile } = this.state;
		const { id } = this.props.match.params;

		const oneRestaurant = restaurants.filter(
			restaurant => changeNameToURL(restaurant.name) == id
		);

		const orderAmount = order.reduce((a, b) => a + b.price, 0);

		return oneRestaurant.map(restaurant => (
			<main key={restaurant.id} className="oneRestaurant__main">
				<Prompt
					when={order.length > 0}
					message="If you leave the website you will lose your order. Are you sure you want to do this?"
				/>
				<OneRestaurantHeader
					name={restaurant.name}
					rating={restaurant.rating}
					photo={restaurant.photo}
				/>
				<div className="containerBig">
					<div className="currentPage">
						<CurrentPageNav page={'/'} pageName={'Start Page'} />
						<i className="fas fa-chevron-right"></i>
						<CurrentPageNav page={'/restaurants'} pageName={'Restaurants'} />
						<i className="fas fa-chevron-right"></i>
						<CurrentPageNav
							page={`/restaurants/${changeNameToURL(restaurant.name)}`}
							pageName={restaurant.name}
						/>
					</div>
					<div className="oneRestaurant__container">
						<>
							{this.state.checkoutIsOpen ? (
								<Checkout
									address={address}
									clearOrder={this.clearOrder}
									averageDeliveryTime={restaurant.averageDeliveryTime}
								/>
							) : (
								<div className="oneRestaurantMenu">
									{restaurant.menus.map(res => {
										const refs = res.menuSections.reduce((acc, value) => {
											acc[value.sectionName] = React.createRef();
											return acc;
										}, {});

										const handleClick = id =>
											refs[id].current.scrollIntoView({
												behavior: 'smooth',
												block: 'start',
											});

										return (
											<React.Fragment key={restaurant.id}>
												<FoodKind
													foodCat={res.menuSections}
													handleClick={handleClick}
												/>
												<DishesList
													foodMenu={res.menuSections}
													reference={refs}
													order={order}
													handleOrder={this.handleOrder}
												/>
											</React.Fragment>
										);
									})}
								</div>
							)}
						</>
						<ShoppingCart
							foodMenu={restaurant.menus}
							orderAmount={orderAmount}
							order={order}
							deliveryPrice={restaurant.deliveryPrice}
							freeDeliveryFrom={restaurant.freeDeliveryFrom}
							minDeliveryPrice={restaurant.minDeliveryPrice}
							handleOrder={this.handleOrder}
							handleCheckout={this.handleCheckout}
							checkoutIsOpen={checkoutIsOpen}
							isOrderOpenMobile={isOrderOpenMobile}
							handleMobileOrder={this.handleMobileOrder}
						/>
					</div>
					{order.length > 0 && (
						<div
							onClick={() => this.handleMobileOrder(true)}
							className="basket__mobileBtn"
						>
							Show order {orderAmount} PLN
						</div>
					)}
				</div>
			</main>
		));
	}
}

export default OneRestaurantPage;
