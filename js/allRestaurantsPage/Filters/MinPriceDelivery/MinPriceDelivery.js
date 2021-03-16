import React, { Component } from 'react';

class MinPriceDelivery extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="minPriceDelivery">
            <form className="minPriceDelivery__form">
                <p className="minPriceDelivery__form__text">Min. cost of delivery</p>
                <div className="minPriceDelivery__form__radio">
                    <input type="radio" id="price_show_all" name="price"
                        value="price_show_all" />
                    <label htmlFor="price_show_all"> Show all</label>
                </div>
                <div className="minPriceDelivery__form__radio">
                    <input type="radio" id="under30PLN" name="price"
                        value="under30PLN" />
                    <label htmlFor="under30PLN"> less than 30 PLN</label>
                </div>
                <div className="minPriceDelivery__form__radio">
                    <input type="radio" id="under60PLN" name="price"
                        value="under60PLN" />
                    <label htmlFor="under60PLN"> less than 60 PLN</label>
                </div>
            </form>
        </div>
         );
    }
}
 
export default MinPriceDelivery;