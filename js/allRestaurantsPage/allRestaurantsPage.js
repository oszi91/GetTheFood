import React, { Component } from 'react';
import Filters from './Filters/Filters';
import MainPhoto from './MainPhoto/MainPhoto';
import RestaurantsList from './RestaurantsList/RestaurantsList';
import SearchRestaurant from './SearchRestaurant/SearchRestaurant';
import TypeOfDish from './TypeOfDish/TypeOfDish';

class AllRestaurantsPage extends Component {
    state = {}
    render() {

        const { foodCategoriesAll, restaurants } = this.props.data;

        return (
            <main className="allRestaurants__main">
                <MainPhoto numberOfRestaurants={restaurants.length} />
                <div className="containerBig">
                    <div className="allRestaurants__container">
                        <div className="allRestaurants">
                            <SearchRestaurant />
                            <TypeOfDish foodCategories={foodCategoriesAll} />
                            <RestaurantsList restaurantsList={restaurants} />
                        </div>
                        <Filters />
                    </div>
                </div>
            </main>
        );
    }
}

export default AllRestaurantsPage;