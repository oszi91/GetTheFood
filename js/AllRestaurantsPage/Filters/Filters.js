import React, { Component } from 'react';
import FreeDelivery from './FreeDelivery/FreeDelivery';
import MinPriceDelivery from './MinPriceDelivery/MinPriceDelivery';
import OpenNow from './OpenNow/OpenNow';
import TimeDelivery from './TimeDelivery/TimeDelivery';
import RestaurantRating from './RestaurantRating/RestaurantRating';
import SearchRestaurant from '../SearchRestaurant/SearchRestaurant'
import { scrollToTop } from '../../Functions/scrollToTop';

class Filters extends Component {

    render() {
        const isFiltersOpen = this.props.showHideFilters ? "allFood__filters allFood__filters--isHide" : "allFood__filters";

        return (
            <div className={isFiltersOpen}>
                <SearchRestaurant
                    restaurantsList={this.props.restaurantsList}
                    filterSearchRestaurant={this.props.filterSearchRestaurant}
                    sortRestaurants={this.props.sortRestaurants}
                />
                <FreeDelivery freeDeliveryHandle={this.props.freeDeliveryHandle} />
                <TimeDelivery deliveryTimeHandle={this.props.deliveryTimeHandle} />
                <MinPriceDelivery minCostDeliveryHandle={this.props.minCostDeliveryHandle} />
                <RestaurantRating restaurantRating={this.props.restaurantRating} />
                <OpenNow openNowHandle={this.props.openNowHandle}/>
                <div onClick={() => {this.props.handleMobileFilters(false); scrollToTop()}} className="allFood__filters__results">Show Results
                (<span className="allFood__filters__results--bold">{this.props.numberOfRestaurants}</span>)
                </div>
                <div onClick={() => this.props.handleMobileFilters(false)} className="allFood__filters__close"><i className="fas fa-times-circle"></i></div>
            </div>
        );
    }
}

export default Filters;