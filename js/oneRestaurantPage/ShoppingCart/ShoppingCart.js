import React, { Component } from 'react';
import OneDishShoppingCart from './OneDishShoppingCart/OneDishShoppingCart';
import DishMinPrice from './DishMinPrice/DishMinPrice';
import FreeDelivery from './FreeDelivery/FreeDelivery';
import SummaryOrder from './SummaryOrder/SummaryOrder';

class ShoppingCart extends Component {

    state = {
        checkout: this.props.checkoutIsOpen
    }

    handleCheckoutOpen = () => {
        this.setState({
            checkout: !this.state.checkout
        }, () => {
            this.props.handleCheckout(this.state.checkout)
        })
    }

    render() {
        const { minDeliveryPrice, orderAmount, handleCheckout } = this.props;
        const {checkout} = this.state;
        const priceLeft = minDeliveryPrice - orderAmount;

        const blockedBtn = !(orderAmount>=minDeliveryPrice);
        const btnText = checkout ? 'Go back to menu' : `Order (${orderAmount.toFixed(2)} PLN)`;

        const isCartOpen = this.props.isOrderOpenMobile ? "oneRestaurantCart oneRestaurantCart--isHide" : "oneRestaurantCart"

        return (
            <>
                <div className={isCartOpen}>
                    <h2 className="oneRestaurantCart__header">Your order</h2>
                    {orderAmount ?
                        <>
                            <OneDishShoppingCart
                                order={this.props.order}
                                foodMenu={this.props.foodMenu}
                                handleOrder={this.props.handleOrder}
                                checkout={this.state.checkout}
                            />
                            <SummaryOrder
                                orderAmount={this.props.orderAmount}
                                deliveryPrice={this.props.deliveryPrice}
                                freeDeliveryFrom={this.props.freeDeliveryFrom}
                            />
                        </>
                        :
                        <div className="emptyBasket">
                            <h1 className="emptyBasket__text">Your basket is empty!</h1>
                            <i className="fas fa-shopping-bag"></i>
                        </div>
                    }
                    <FreeDelivery
                        orderAmount={this.props.orderAmount}
                        freeDeliveryFrom={this.props.freeDeliveryFrom}
                    />
                    {priceLeft > 0 && <DishMinPrice
                        orderAmount={this.props.orderAmount}
                        minDeliveryPrice={this.props.minDeliveryPrice}
                    />}
                    <button
                        disabled={blockedBtn}
                        onClick={this.handleCheckoutOpen}
                        className="dishOrder"
                    >{btnText}</button>
                    <div onClick={() => this.props.handleMobileOrder(false)} className="oneRestaurantCart__close"><i className="fas fa-times-circle"></i></div>
                </div>
            </>
        );
    }
}

export default ShoppingCart;