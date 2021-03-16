import React, { Component } from 'react';

class FreeDelivery extends Component {
    state = {}
    render() {
        return (
            <div className="freeDelivery">
                <p className="freeDelivery__text">Free delivery </p>
                <div className="freeDelivery__btn">
                    <label className="switch">
                        <input className="switch__input" type="checkbox" />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>
        );
    }
}

export default FreeDelivery;