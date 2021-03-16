import React, { Component } from 'react';
import DeliveryRating from './DeliveryRating/DeliveryRating';
import FreeDelivery from './FreeDelivery/FreeDelivery';
import MinPriceDelivery from './MinPriceDelivery/MinPriceDelivery';
import OpenNow from './OpenNow/OpenNow';
import TimeDelivery from './TimeDelivery/TimeDelivery';

class Filters extends Component {
    state = {}
    render() {
        return (
            <div className="allFood__filters">
                <FreeDelivery />
                <TimeDelivery />
                <MinPriceDelivery />
                <DeliveryRating />
                <OpenNow />
            </div>
        );
    }
}

export default Filters;