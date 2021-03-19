import React, { Component } from 'react';
import OneDishShoppingCart from './OneDishShoppingCart/OneDishShoppingCart';
import DishMinPrice from './SummaryOrder/DishMinPrice/DishMinPrice';
import FreeDelivery from './SummaryOrder/FreeDelivery/FreeDelivery';
import SummaryOrder from './SummaryOrder/SummaryOrder';

class ShoppingCart extends Component {
    state = {}
    render() {

        

        return (
            <div className="oneRestaurantCart">
                <h2 className="oneRestaurantCart__header">Your order</h2>
                <OneDishShoppingCart />
                <SummaryOrder />
                <FreeDelivery />
                <DishMinPrice />
                <button className="dishOrder">Order</button>
            </div>
        );
    }
}

export default ShoppingCart;