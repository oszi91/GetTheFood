import React, { Component } from 'react';

class RestaurantItem extends Component {
    state = {}
    render() {

        const { id, name, photo, rating, deliveryPrice, averageDeliveryTime, minDeliveryPrice } = this.props.restaurant;

        return (
                <li className="allRestaurants__list__item">
                <div className="restaurantOnListView">
                    <div className="restaurantOnListView__main">
                        <p className="restaurantOnListView__main__name">{name}</p>
                        <p className="restaurantOnListView__main__rating">
                            {rating}/5 <span className="fa fa-star"></span>
                        </p>
                    </div>
                    <div className="restaurantOnListView__more">
                        <p className="restaurantOnListView__more__minCost">
                            <i className="fas fa-money-bill-wave"></i> min. {minDeliveryPrice} PLN
                        </p>
                        <p className="restaurantOnListView__more__deliveryCost">
                            <i className="fas fa-truck"></i> {deliveryPrice} PLN
                        </p>
                        <p className="restaurantOnListView__more__deliveryTime">
                            <i className="fas fa-clock"></i> {averageDeliveryTime} min
                        </p>
                    </div>
                    <div className="restaurantOnListView__photo">
                        <img className="restaurantOnListView__photo__img" src={photo} />
                    </div>
                </div>
            </li>
        );
    }
}

export default RestaurantItem;