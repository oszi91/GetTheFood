import React, { Component } from 'react';
import DishesList from './DishesList/DishesList';
import FoodKind from './FoodKind/FoodKind';
import OneRestaurantHeader from './OneRestaurantHeader/OneRestaurantHeader';
import ShoppingCart from './ShoppingCart/ShoppingCart';

class OneRestaurantPage extends Component {
   
    render() {
        const {restaurants} = this.props.data;
        const {id} = this.props.match.params;

        const changeNameToURL = str => str.replace(/\s/g, '-').replace(/[&\s/\\#,+()$~%.'":*?<>{}]/g, '').toLowerCase();
        const oneRestaurant = restaurants.filter(restaurant => (
            changeNameToURL(restaurant.name) == id
        ));

        return (
            oneRestaurant.map(restaurant => (
                <main key={restaurant.id} className="oneRestaurant__main">
                <OneRestaurantHeader name={restaurant.name} rating={restaurant.rating} photo={restaurant.photo} />
                <div className="containerBig">
                    <div className="oneRestaurant__container">
                        <div className="oneRestaurantMenu">
                            <FoodKind foodCat={restaurant.foodCategories} />
                            {restaurant.menus.map(res => <DishesList key={res.menuSections} foodMenu={res.menuSections} />)}
                        </div>
                        <ShoppingCart />
                    </div>
                </div>
            </main>
            ))
        );
    }
}

export default OneRestaurantPage;