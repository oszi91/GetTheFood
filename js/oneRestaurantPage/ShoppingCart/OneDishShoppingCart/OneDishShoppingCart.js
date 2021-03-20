import React, { Component } from 'react';

class OneDishShoppingCart extends Component {

    render() {
     
        return (
            this.props.order.map(dish => (
                <div key={dish.name} className="dishContainer">
                    <button className="dishContainer__btn"><i className="fas fa-plus-circle"></i></button>
                    <p className="dishContainer__dishName">{dish.name}</p>
                    <p className="dishContainer__price">
                        <span className="dishContainer__price__quantity">{dish.quantity}x</span> {dish.price},00 PLN
                    </p>
                    <button className="dishContainer__btn"><i className="fas fa-minus-circle"></i></button>
                </div>
            ))
        );
    }
}

export default OneDishShoppingCart;