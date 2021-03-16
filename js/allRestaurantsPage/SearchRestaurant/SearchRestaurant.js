import React, { Component } from 'react';

class SearchRestaurant extends Component {
    state = {  }
    render() { 
        return ( 
            <>
               <h2 className="allRestaurants__header">Find your favorite restaurant</h2>
            <div className="allRestaurants__search">
            <input className="allRestaurants__search__input" type="text" placeholder="the name of the restaurant" />
            <div className="allRestaurants__search__sort">
                <label className="allRestaurants__search__sort__label" htmlFor="sort">Sort by:</label>
                <select className="allRestaurants__search__sort__select" name="sort">
                    <option value="popular">Popular</option>
                    <option value="min_order_amount">Min. order amount</option>
                    <option value="from_lower_price">From lower price</option>
                    <option value="from_higher_price">From higher price</option>
                    <option value="rating">Rating</option>
                </select>
            </div>
        </div>
        </>
         );
    }
}
 
export default SearchRestaurant;