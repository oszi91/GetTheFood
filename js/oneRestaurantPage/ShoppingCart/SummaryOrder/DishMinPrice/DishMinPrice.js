import React, { Component } from 'react';

class DishMinPrice extends Component {
    state = {}
    render() {
        const {minDeliveryPrice, orderAmount} = this.props;
        const priceLeft = minDeliveryPrice - orderAmount;
        
        return (
            <div className="dishMinPrice">
                <p className="dishMinPrice__text">{priceLeft} PLN left to the min. amount</p>
            </div>
        );      
        
       
    }
}

export default DishMinPrice;