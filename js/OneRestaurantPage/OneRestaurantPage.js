import React, { Component } from 'react';
import { Prompt } from 'react-router';

import changeNameToURL from '../utils/general/changeNameToURL';

import Checkout from './ShoppingCart/Checkout/Checkout';
import CurrentPageNav from '../CurrentPageNav/CurrentPageNav';
import OneRestaurantHeader from './OneRestaurantHeader/OneRestaurantHeader';
import OneRestaurantMenu from './OneRestaurantMenu/OneRestaurantMenu';
import ShoppingCart from './ShoppingCart/ShoppingCart';

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

	clearOrder = () => {
		this.setState({
			order: [],
		});
	};

	render() {
		const { id } = this.props.match.params;
		const {
			address,
			data: { restaurants },
		} = this.props;
		const { order, checkoutIsOpen, isOrderOpenMobile } = this.state;

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
				<OneRestaurantHeader {...restaurant} />
				<div className="containerBig">
					<div className="currentPage">
						<CurrentPageNav page={'/'} pageName={'Start Page'} />
						<CurrentPageNav page={'/restaurants'} pageName={'Restaurants'} />
						<CurrentPageNav
							page={`/restaurants/${changeNameToURL(restaurant.name)}`}
							pageName={restaurant.name}
							lastItem={true}
						/>
					</div>
					<div className="oneRestaurant__container">
						<>
							{checkoutIsOpen ? (
								<Checkout
									address={address}
									clearOrder={this.clearOrder}
									averageDeliveryTime={restaurant.averageDeliveryTime}
								/>
							) : (
								<OneRestaurantMenu
									restaurant={restaurant}
									order={order}
									handleOrder={this.handleOrder}
								/>
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
