import React, { Component } from 'react';

class DeliveryRating extends Component {
    state = {}
    render() {
        return (
            <div className="deliveryRating">
                <p className="deliveryRating__text">Restaurant ratings</p>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
            </div>
        );
    }
}

export default DeliveryRating;