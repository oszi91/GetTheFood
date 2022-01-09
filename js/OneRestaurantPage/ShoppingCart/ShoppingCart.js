import React, { Component } from 'react';

import scrollToTop from '../../utils/general/scrollToTop';

import DishMinPrice from './DishMinPrice/DishMinPrice';
import FreeDelivery from './FreeDelivery/FreeDelivery';
import OneDishShoppingCart from './OneDishShoppingCart/OneDishShoppingCart';
import SummaryOrder from './SummaryOrder/SummaryOrder';

class ShoppingCart extends Component {
	state = {
		checkout: this.props.checkoutIsOpen,
	};

	handleCheckoutOpen = () => {
		this.setState(
			{
				checkout: !this.state.checkout,
			},
			() => {
				this.props.handleCheckout(this.state.checkout);
			}
		);
	};

	render() {
		const {
			minDeliveryPrice,
			orderAmount,
			order,
			foodMenu,
			handleOrder,
			deliveryPrice,
			freeDeliveryFrom,
			handleMobileOrder,
			isOrderOpenMobile,
		} = this.props;
		const { checkout } = this.state;

		const priceLeft = minDeliveryPrice - orderAmount;
		const blockedBtn = !(orderAmount >= minDeliveryPrice);
		const btnText = checkout
			? 'Go back to menu'
			: `Order (${orderAmount.toFixed(2)} PLN)`;
		const isCartOpen = isOrderOpenMobile
			? 'oneRestaurantCart oneRestaurantCart--isHide'
			: 'oneRestaurantCart';

		return (
			<>
				<div className={isCartOpen}>
					<h2 className="oneRestaurantCart__header">Your order</h2>
					{orderAmount ? (
						<>
							<OneDishShoppingCart
								order={order}
								foodMenu={foodMenu}
								handleOrder={handleOrder}
								checkout={checkout}
							/>
							<SummaryOrder
								orderAmount={orderAmount}
								deliveryPrice={deliveryPrice}
								freeDeliveryFrom={freeDeliveryFrom}
							/>
						</>
					) : (
						<div className="emptyBasket">
							<h1 className="emptyBasket__text">Your basket is empty!</h1>
							<i className="fas fa-shopping-bag"></i>
						</div>
					)}
					<FreeDelivery
						orderAmount={orderAmount}
						freeDeliveryFrom={freeDeliveryFrom}
					/>
					{priceLeft > 0 && (
						<DishMinPrice
							orderAmount={orderAmount}
							minDeliveryPrice={minDeliveryPrice}
						/>
					)}
					<button
						disabled={blockedBtn}
						onClick={() => {
							this.handleCheckoutOpen();
							scrollToTop();
						}}
						className="dishOrder"
					>
						{btnText}
					</button>
					<div
						onClick={() => handleMobileOrder(false)}
						className="oneRestaurantCart__close"
					>
						<i className="fas fa-times-circle"></i>
					</div>
				</div>
			</>
		);
	}
}

export default ShoppingCart;
