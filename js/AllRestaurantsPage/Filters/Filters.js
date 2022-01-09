import React, { Component } from 'react';

import scrollToTop from '../../utils/general/scrollToTop';

import FreeDelivery from './FreeDelivery/FreeDelivery';
import MinPriceDelivery from './MinPriceDelivery/MinPriceDelivery';
import OpenNow from './OpenNow/OpenNow';
import RestaurantRating from './RestaurantRating/RestaurantRating';
import SearchRestaurant from '../SearchRestaurant/SearchRestaurant';
import TimeDelivery from './TimeDelivery/TimeDelivery';

class Filters extends Component {
	render() {
		const {
			showHideFilters,
			restaurantsList,
			filterSearchRestaurant,
			sortRestaurants,
			freeDeliveryHandle,
			deliveryTimeHandle,
			minCostDeliveryHandle,
			restaurantRating,
			openNowHandle,
			numberOfRestaurants,
			handleMobileFilters,
		} = this.props;

		const isFiltersOpen = showHideFilters
			? 'allFood__filters allFood__filters--isHide'
			: 'allFood__filters';

		return (
			<div className={isFiltersOpen}>
				<SearchRestaurant
					restaurantsList={restaurantsList}
					filterSearchRestaurant={filterSearchRestaurant}
					sortRestaurants={sortRestaurants}
				/>
				<FreeDelivery freeDeliveryHandle={freeDeliveryHandle} />
				<TimeDelivery deliveryTimeHandle={deliveryTimeHandle} />
				<MinPriceDelivery minCostDeliveryHandle={minCostDeliveryHandle} />
				<RestaurantRating restaurantRating={restaurantRating} />
				<OpenNow openNowHandle={openNowHandle} />
				<div
					onClick={() => {
						handleMobileFilters(false);
						scrollToTop();
					}}
					className="allFood__filters__results"
				>
					Show Results (
					<span className="allFood__filters__results--bold">
						{numberOfRestaurants}
					</span>
					)
				</div>
				<div
					onClick={() => handleMobileFilters(false)}
					className="allFood__filters__close"
				>
					<i className="fas fa-times-circle"></i>
				</div>
			</div>
		);
	}
}

export default Filters;
