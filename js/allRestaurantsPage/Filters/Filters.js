import React, { Component } from 'react';
import FreeDelivery from './FreeDelivery/FreeDelivery';
import MinPriceDelivery from './MinPriceDelivery/MinPriceDelivery';
import OpenNow from './OpenNow/OpenNow';
import TimeDelivery from './TimeDelivery/TimeDelivery';
import RestaurantRating from './RestaurantRating/RestaurantRating';

class Filters extends Component {
    state = {}
    render() {
        return (
            <div className="allFood__filters">
                <FreeDelivery freeDeliveryHandle={this.props.freeDeliveryHandle} />
                <TimeDelivery deliveryTimeHandle={this.props.deliveryTimeHandle}/>
                <MinPriceDelivery minCostDeliveryHandle={this.props.minCostDeliveryHandle} />
                <RestaurantRating restaurantRating={this.props.restaurantRating} />
                <OpenNow openNowHandle={this.props.openNowHandle} />
            </div>
        );
    }
}

export default Filters;