import React, { Component } from 'react';

class OneDishShoppingCart extends Component {

    render() {
        const { order, handleOrder } = this.props;

        return (
            order.map(dish => (
                <div key={dish.name} className="dishContainer">
                    <div className="dishContainer__dishName__container">
                        <p className="dishContainer__dishName">{dish.name}</p>
                        {dish.additionals && <span className="dishContainer__dishName--adds">+ extras</span>}
                    </div>
                    <p className="dishContainer__price">
                        <span className="dishContainer__price__quantity">{dish.quantity}x</span> {dish.price.toFixed(2)} PLN
                    </p>
                    <button
                        className="dishContainer__btn"
                        disabled={this.props.checkout}
                        onClick={() => handleOrder(dish.id, 'remove')}
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            ))
        );
    }
}

export default OneDishShoppingCart;