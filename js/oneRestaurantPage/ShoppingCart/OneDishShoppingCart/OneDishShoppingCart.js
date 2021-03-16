import React, { Component } from 'react';

class OneDishShoppingCart extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="dishContainer">
            <button className="dishContainer__btn"><i className="fas fa-plus-circle"></i></button>
            <p className="dishContainer__dishName">Some Dish</p>
            <p className="dishContainer__price">
                <span className="dishContainer__price__quantity">1x</span> 42,00 PLN
            </p>
            <button className="dishContainer__btn"><i className="fas fa-minus-circle"></i></button>
        </div>
         );
    }
}
 
export default OneDishShoppingCart;