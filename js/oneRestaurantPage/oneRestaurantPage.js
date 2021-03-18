import React, { Component } from 'react';
import DishesList from './DishesList/DishesList';
import FoodKind from './FoodKind/FoodKind';
import OneRestaurantHeader from './OneRestaurantHeader/OneRestaurantHeader';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import changeNameToURL from '../Functions/changeNameToURL';

class OneRestaurantPage extends Component {
   
    render() {
        const {restaurants} = this.props.data;
        const {id} = this.props.match.params;

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
                            {restaurant.menus.map(res => 
                            (
                                <React.Fragment key={restaurant.id}>
                                <FoodKind  foodCat={res.menuSections} />
                                <DishesList foodMenu={res.menuSections} />
                                </React.Fragment>
                            )
                            )}
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