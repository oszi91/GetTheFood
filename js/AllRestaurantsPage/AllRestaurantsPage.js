import React, { Component } from 'react';
import Filters from './Filters/Filters';
import MainPhoto from './MainPhoto/MainPhoto';
import RestaurantsList from './RestaurantsList/RestaurantsList';
import SearchRestaurant from './SearchRestaurant/SearchRestaurant';
import TypeOfDish from './TypeOfDish/TypeOfDish';
import CurrentPageNav from '../CurrentPageNav/CurrentPageNav';

class AllRestaurantsPage extends Component {

    state = {
        restaurantsList: this.props.data.restaurants,
        filtersList: {
            searchRestaurant: () => res => res,
            sortRestaurants: (a, b) => b.rating - a.rating,
            foodCategory: () => res => res,
            freeDelivery: () => res => res,
            deliveryTime: () => res => res,
            minCostDeliveryHandle: () => res => res,
            restaurantRating: () => res => res,
            openNowHandle: () => res => res,
        },
        showHideFilters: false
    }

    handleMobileFilters = showHideFilters => {
        this.setState({
            showHideFilters
        })
    }

    filterSearchRestaurant = searchName => {

        let searchRestaurant = res => res;
        if (searchName) {
            searchRestaurant = res => res.name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1
        } else {
            searchRestaurant = res => res
        }

        this.setState({
            filtersList: { ...this.state.filtersList, searchRestaurant }
        })
    }

    sortRestaurants = sortVal => {
        let sortRestaurants = res => res;

        switch (sortVal) {
            case 'alphabetically':
                sortRestaurants = (a, b) => a.name.localeCompare(b.name)
                break;
            case 'min_order_amount':
                sortRestaurants = (a, b) => a.minDeliveryPrice - b.minDeliveryPrice
                break;
            case 'delivery_time':
                sortRestaurants = (a, b) => a.averageDeliveryTime - b.averageDeliveryTime
                break;
            case 'delivery_costs':
                sortRestaurants = (a, b) => a.deliveryPrice - b.deliveryPrice
                break;
            case 'rating':
                sortRestaurants = (a, b) => b.rating - a.rating
                break;
        }

        this.setState({
            filtersList: { ...this.state.filtersList, sortRestaurants }
        })
    }

    foodCategory = category => {
        let foodCategory = res => res;

        if (category === 'all') {
            foodCategory = res => res;
        } else if (category) {
            foodCategory = res => res.foodCategories.some(r => r === category)
        }

        this.setState({
            filtersList: { ...this.state.filtersList, foodCategory }
        })
    }

    freeDeliveryHandle = isFree => {
        let freeDelivery = res => res;

        if (isFree) {
            freeDelivery = res => res;
        } else {
            freeDelivery = res => res.deliveryPrice === 0;
        }

        this.setState({
            filtersList: { ...this.state.filtersList, freeDelivery }
        })
    }

    deliveryTimeHandle = delTime => {
        let deliveryTime = res => res;

        switch (delTime) {
            case 'time_show_all':
                deliveryTime = res => res
                break;
            case 'under30min':
                deliveryTime = res => res.averageDeliveryTime < 30;
                break;
            case 'under1h':
                deliveryTime = res => res.averageDeliveryTime < 60;
                break;
        }

        this.setState({
            filtersList: { ...this.state.filtersList, deliveryTime }
        })
    }

    minCostDeliveryHandle = minCost => {
        let minCostDeliveryHandle = () => res => res;

        switch (minCost) {
            case 'price_show_all':
                minCostDeliveryHandle = () => res => res;
                break;
            case 'under30PLN':
                minCostDeliveryHandle = res => res.minDeliveryPrice < 30;
                break;
            case 'under60PLN':
                minCostDeliveryHandle = res => res.minDeliveryPrice < 60;
                break;
        }

        this.setState({
            filtersList: { ...this.state.filtersList, minCostDeliveryHandle }
        })
    }

    restaurantRating = rating => {
        let restaurantRating = () => res => res;

        switch (rating) {
            case '1':
                restaurantRating = () => res => res;
                break;
            case '2':
                restaurantRating = res => res.rating >= 2;
                break;
            case '3':
                restaurantRating = res => res.rating >= 3;
                break;
            case '4':
                restaurantRating = res => res.rating >= 4;
                break;
            case '5':
                restaurantRating = res => res.rating >= 4.50;
                break;
        }

        this.setState({
            filtersList: { ...this.state.filtersList, restaurantRating }
        })
    }

    openNowHandle = hour => {
        const getCurrHour = new Date().getHours();

        let openNowHandle = res => res;
        if (hour) {
            openNowHandle = res => res.openHours.some(resp => resp.from < getCurrHour && resp.to > getCurrHour)
        } else {
            openNowHandle = res => res;
        }

        this.setState({
            filtersList: { ...this.state.filtersList, openNowHandle }
        })
    }

    render() {
        const { foodCategoriesAll, address } = this.props.data;
        const { restaurantsList, filtersList, showHideFilters } = this.state;
        const { freeDelivery, openNowHandle, foodCategory,
            searchRestaurant, sortRestaurants, deliveryTime,
            minCostDeliveryHandle, restaurantRating } = filtersList;

        let restaurantsNewList = [...restaurantsList];

        const updateFilters = () => {
            restaurantsNewList = restaurantsNewList
                .filter(freeDelivery)
                .filter(openNowHandle)
                .filter(foodCategory)
                .filter(searchRestaurant)
                .filter(deliveryTime)
                .filter(minCostDeliveryHandle)
                .filter(restaurantRating)
                .sort(sortRestaurants)
        }
        updateFilters();

        return (
            <main className="allRestaurants__main">
                <MainPhoto numberOfRestaurants={restaurantsNewList.length} />
                <div className="containerBig">
                    <div className="currentPage">
                        <CurrentPageNav page={'/'} pageName={'Start Page'}/>
                        <i className="fas fa-chevron-right"></i>
                        <CurrentPageNav page={'/restaurants'} pageName={'Restaurants'}/>
                    </div>
                    <div className="allRestaurants__container">
                        <div className="allRestaurants">
                            <SearchRestaurant
                                restaurantsList={restaurantsList}
                                filterSearchRestaurant={this.filterSearchRestaurant}
                                sortRestaurants={this.sortRestaurants}
                                handleMobileFilters={this.handleMobileFilters}
                                showHideFilters={this.state.showHideFilters}
                            />
                            <TypeOfDish
                                foodCategories={foodCategoriesAll}
                                foodCategory={this.foodCategory}
                            />
                            <RestaurantsList
                                restaurantsList={restaurantsNewList}
                                address={address}
                            />
                        </div>
                        <Filters
                            freeDeliveryHandle={this.freeDeliveryHandle}
                            deliveryTimeHandle={this.deliveryTimeHandle}
                            minCostDeliveryHandle={this.minCostDeliveryHandle}
                            restaurantRating={this.restaurantRating}
                            openNowHandle={this.openNowHandle}
                            numberOfRestaurants={restaurantsNewList.length}
                            restaurantsList={restaurantsList}
                            filterSearchRestaurant={this.filterSearchRestaurant}
                            sortRestaurants={this.sortRestaurants}
                            handleMobileFilters={this.handleMobileFilters}
                            showHideFilters={showHideFilters}
                        />
                    </div>
                </div>
            </main>
        );
    }
}

export default AllRestaurantsPage;