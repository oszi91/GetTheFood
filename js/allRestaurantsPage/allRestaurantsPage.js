import React, { Component } from 'react';

class allRestaurantsPage extends Component {
    state = {}
    render() {
        return (
            <main className="allRestaurants__main">
                <div className="allRestaurantsPhoto">
                    <h1 className="allRestaurantsPhoto__text">Choice your restaurant</h1>
                    <img className="allRestaurantsPhoto__img" src="./../../images/food1.jpg" />
                </div>
                <div className="container">
                    <div className="allRestaurants__container">
                        <div className="allRestaurants__list">
                            <div className="allRestaurants__list__search">
                                <input type="text" />
                                <label htmlFor="sort">Sort by:</label>
                                <select name="sort">
                                    <option value="popular">Popular</option>
                                    <option value="min_order_amount">Min. order amount</option>
                                    <option value="from_lower_price">From lower price</option>
                                    <option value="from_higher_price">From higher price</option>
                                    <option value="rating">Rating</option>
                                </select>
                            </div>
                            <div className="allRestaurants__list__restaurants">
                            </div>
                        </div>

                        <div className="allFood__filters">
                            <div className="freeDelivery">
                                <p className="freeDelivery__text">Free delivery </p>
                                <div className="freeDelivery__btn">
                                    <label className="switch">
                                        <input className="switch__input" type="checkbox" />
                                        <span className="slider"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="timeDelivery">
                                <form className="timeDelivery__form">
                                    <p className="timeDelivery__form__text">Delivery time</p>
                                    <div className="timeDelivery__form__radio">
                                        <input type="radio" id="time_show_all" name="time"
                                            value="time_show_all" />
                                        <label htmlFor="time_show_all"> Show All</label>
                                    </div>
                                    <div className="timeDelivery__form__radio">
                                        <input type="radio" id="under30min" name="time"
                                            value="under30min" />
                                        <label htmlFor="under30min"> less than 30 min</label>
                                    </div>
                                    <div className="timeDelivery__form__radio">
                                        <input type="radio" id="under1h" name="time"
                                            value="under1h" />
                                        <label htmlFor="under1h"> Under 1 hour</label>
                                    </div>
                                </form>
                            </div>
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
                            <div className="deliveryRating">
                                <p className="deliveryRating__text">Restaurant rating</p>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default allRestaurantsPage;