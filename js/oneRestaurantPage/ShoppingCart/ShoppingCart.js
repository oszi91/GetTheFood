import React, { Component } from 'react';
import OneDishShoppingCart from './OneDishShoppingCart/OneDishShoppingCart';
import DishMinPrice from './SummaryOrder/DishMinPrice/DishMinPrice';
import FreeDelivery from './SummaryOrder/FreeDelivery/FreeDelivery';
import SummaryOrder from './SummaryOrder/SummaryOrder';

class ShoppingCart extends Component {
  
    render() {
        const {minDeliveryPrice, orderAmount} = this.props;
        const priceLeft = minDeliveryPrice - orderAmount;

        return (
            <div className="oneRestaurantCart">
                <h2 className="oneRestaurantCart__header">Your order</h2>
                <OneDishShoppingCart order={this.props.order} />
                <SummaryOrder
                 orderAmount={this.props.orderAmount}
                 deliveryPrice={this.props.deliveryPrice}
                 freeDeliveryFrom={this.props.freeDeliveryFrom}
                 />
                <FreeDelivery
                orderAmount={this.props.orderAmount}
                freeDeliveryFrom={this.props.freeDeliveryFrom}
                />
                {priceLeft > 0 && <DishMinPrice 
                orderAmount={this.props.orderAmount}
                minDeliveryPrice={this.props.minDeliveryPrice}
                />}
                <button className="dishOrder">Order</button>
            </div>
        );
    }
}

export default ShoppingCart;