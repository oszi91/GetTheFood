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
                                <label htmlFor="sort">Choose a car:</label>
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

                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default allRestaurantsPage;