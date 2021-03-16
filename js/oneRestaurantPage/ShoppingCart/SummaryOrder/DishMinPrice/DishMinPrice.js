import React, { Component } from 'react';

class DishMinPrice extends Component {
    state = {}
    render() {
        return (
            <div className="dishMinPrice">
                <p className="dishMinPrice__text">20 PLN left to the min. amount</p>
            </div>
        );
    }
}

export default DishMinPrice;