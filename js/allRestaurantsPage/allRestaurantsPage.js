import React, { Component } from 'react';
import Filters from './Filters/Filters';
import MainPhoto from './MainPhoto/MainPhoto';
import RestaurantsList from './RestaurantsList/RestaurantsList';
import SearchRestaurant from './SearchRestaurant/SearchRestaurant';
import TypeOfDish from './TypeOfDish/TypeOfDish';


class AllRestaurantsPage extends Component {

    state = {
        restaurantsList: [...this.props.data.restaurants],
    }

    filterSearchRestaurant = (searchName) => {
        const { restaurants } = this.props.data;

        let searchRes;
        if (searchName) {
            searchRes = restaurants.filter(res => res.name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1)
        } else {
            searchRes = restaurants;
        }

        this.setState({
            restaurantsList: searchRes
        })
    }

    sortRestaurants = (sortVal) => {
        const { restaurantsList } = this.state;
        let restaurantsOrder;
        switch (sortVal) {
            case 'alphabetically':
                restaurantsOrder = restaurantsList.sort((a, b) => a.name.localeCompare(b.name))
                break;
            case 'min_order_amount':
                restaurantsOrder = restaurantsList.sort((a, b) => a.minDeliveryPrice - b.minDeliveryPrice)
                break;
            case 'delivery_time':
                restaurantsOrder = restaurantsList.sort((a, b) => a.averageDeliveryTime - b.averageDeliveryTime)
                break;
            case 'delivery_costs':
                restaurantsOrder = restaurantsList.sort((a, b) => a.deliveryPrice - b.deliveryPrice)
                break;
            case 'rating':
                restaurantsOrder = restaurantsList.sort((a, b) => a.rating - b.rating);
                break;
        }

        this.setState({
            restaurantsList: restaurantsOrder
        })
    }

    foodCategory = (category) => {
        const { restaurantsList } = this.state;

        let foodCat = restaurantsList.filter(restaurant => restaurant.foodCategories.some(res => res === category))

        this.setState({
            restaurantsList: foodCat
        })
    }

    freeDeliveryHandle = isFree => {
        const { restaurantsList } = this.state;
        let isDeliveryFree;

        if (isFree) {
            isDeliveryFree = this.props.data.restaurants;
        } else {
            isDeliveryFree = restaurantsList.filter(res => res.deliveryPrice === 0)
        }

        this.setState({
            restaurantsList: isDeliveryFree
        })
    }

    deliveryTimeHandle = delTime => {
        const { restaurantsList } = this.state;
        console.log(delTime)
        let time;
        switch (delTime) {
            case 'time_show_all':
                time = restaurantsList
                break;
            case 'under30min':
                time = restaurantsList.filter(res => res.averageDeliveryTime < 30);
                break;
            case 'under1h':
                time = restaurantsList.filter(res => res.averageDeliveryTime < 60);
                break;
        }

        this.setState({
            restaurantsList: time
        })
    }

    minCostDeliveryHandle = minCost => {
        const { restaurantsList } = this.state;

        let cost;
        switch (minCost) {
            case 'price_show_all':
                cost = restaurantsList
                break;
            case 'under30PLN':
                cost = restaurantsList.filter(res => res.minDeliveryPrice < 30);
                break;
            case 'under60PLN':
                cost = restaurantsList.filter(res => res.minDeliveryPrice < 60);
                break;
        }

        this.setState({
            restaurantsList: cost
        })
    }

    restaurantRating = rating => {
        const { restaurantsList } = this.state;

        let stars;
        switch (rating) {
            case '1':
                stars = restaurantsList
                break;
            case '2':
                stars = restaurantsList.filter(res => res.rating >= 2);
                break;
            case '3':
                stars = restaurantsList.filter(res => res.rating >= 3);
                break;
            case '4':
                stars = restaurantsList.filter(res => res.rating >= 4);
                break;
            case '5':
                stars = restaurantsList.filter(res => res.rating >= 4.50);
                break;
        }

        this.setState({
            restaurantsList: stars
        })
    }

    openNowHandle = hour => {
        const { restaurantsList } = this.state;

        const getCurrHour = new Date().getHours();
        let openRes;

        if (hour) {
            openRes = restaurantsList.filter(res => res.openHours.some(resp => resp.from < getCurrHour && resp.to > getCurrHour))
        } else {
            openRes = this.props.data.restaurants;
        }

        this.setState({
            restaurantsList: openRes
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.restaurantsList !== this.state.restaurantsList) {
            console.log(this.state.restaurantsList)
            this.setState({
                restaurantsList: this.state.restaurantsList
            })
        }
    }

    render() {
        const { foodCategoriesAll } = this.props.data;
        const { restaurantsList } = this.state;

        return (
            <main className="allRestaurants__main">
                <MainPhoto numberOfRestaurants={restaurantsList.length} />
                <div className="containerBig">
                    <div className="allRestaurants__container">
                        <div className="allRestaurants">
                            <SearchRestaurant
                                restaurantsList={restaurantsList}
                                filterSearchRestaurant={this.filterSearchRestaurant}
                                sortRestaurants={this.sortRestaurants}
                            />
                            <TypeOfDish
                                foodCategories={foodCategoriesAll}
                                foodCategory={this.foodCategory}
                            />
                            <RestaurantsList restaurantsList={restaurantsList} />
                        </div>
                        <Filters
                            freeDeliveryHandle={this.freeDeliveryHandle}
                            deliveryTimeHandle={this.deliveryTimeHandle}
                            minCostDeliveryHandle={this.minCostDeliveryHandle}
                            restaurantRating={this.restaurantRating}
                            openNowHandle={this.openNowHandle}
                        />
                    </div>
                </div>
            </main>
        );
    }
}

export default AllRestaurantsPage;