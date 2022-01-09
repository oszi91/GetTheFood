import React, { Component } from 'react';

import deliveryTimeFilter from '../utils/filtersToSearch/deliveryTimeFilter';
import searchRestaurantFilter from '../utils/filtersToSearch/searchRestaurantFilter';
import sortRestaurantsFilter from '../utils/filtersToSearch/sortRestaurantsFilter';
import foodCategoryFilter from '../utils/filtersToSearch/foodCategoryFilter';
import freeDeliveryFilter from '../utils/filtersToSearch/freeDeliveryFilter';
import minCostDeliveryFilter from '../utils/filtersToSearch/minCostDeliveryFilter';
import restaurantRatingFilter from '../utils/filtersToSearch/restaurantRatingFilter';

import CurrentPageNav from '../CurrentPageNav/CurrentPageNav';
import Filters from './Filters/Filters';
import MainPhoto from './MainPhoto/MainPhoto';
import RestaurantsList from './RestaurantsList/RestaurantsList';
import SearchRestaurant from './SearchRestaurant/SearchRestaurant';
import TypeOfDish from './TypeOfDish/TypeOfDish';

class AllRestaurantsPage extends Component {
	state = {
		restaurantsList: this.props.data.restaurants,
		filtersList: {
			searchRestaurant: () => res => res,
			sortRestaurants: (a, b) => b.rating - a.rating,
			foodCategory: () => res => res,
			freeDelivery: () => res => res,
			deliveryTime: () => res => res,
			minCostDelivery: () => res => res,
			restaurantRating: () => res => res,
			openNowHandle: () => res => res,
		},
		showHideFilteres: false,
	};

	handleMobileFilters = showHideFilters => {
		this.setState({
			showHideFilters,
		});
	};

	filterSearchRestaurant = searchName => {
		const searchRestaurant = searchRestaurantFilter(searchName);
		this.setState({
			filtersList: { ...this.state.filtersList, searchRestaurant },
		});
	};

	sortRestaurants = sortVal => {
		const sortRestaurants = sortRestaurantsFilter(sortVal);
		this.setState({
			filtersList: { ...this.state.filtersList, sortRestaurants },
		});
	};

	foodCategory = category => {
		const foodCategory = foodCategoryFilter(category);
		this.setState({
			filtersList: { ...this.state.filtersList, foodCategory },
		});
	};

	freeDeliveryHandle = isFree => {
		const freeDelivery = freeDeliveryFilter(isFree);
		this.setState({
			filtersList: { ...this.state.filtersList, freeDelivery },
		});
	};

	deliveryTimeHandle = delTime => {
		const deliveryTime = deliveryTimeFilter(delTime);
		this.setState({
			filtersList: { ...this.state.filtersList, deliveryTime },
		});
	};

	minCostDeliveryHandle = minCost => {
		const minCostDelivery = minCostDeliveryFilter(minCost);

		this.setState({
			filtersList: { ...this.state.filtersList, minCostDelivery },
		});
	};

	restaurantRating = rating => {
		const restaurantRating = restaurantRatingFilter(rating);

		this.setState({
			filtersList: { ...this.state.filtersList, restaurantRating },
		});
	};

	openNowHandle = hour => {
		const getCurrHour = new Date().getHours();

		let openNowHandle = res => res;
		if (hour) {
			openNowHandle = res =>
				res.openHours.some(
					resp => resp.from < getCurrHour && resp.to > getCurrHour
				);
		} else {
			openNowHandle = res => res;
		}

		this.setState({
			filtersList: { ...this.state.filtersList, openNowHandle },
		});
	};

	render() {
		const { foodCategoriesAll, address } = this.props.data;
		const { restaurantsList, filtersList, showHideFilters } = this.state;
		const {
			freeDelivery,
			openNowHandle,
			foodCategory,
			searchRestaurant,
			sortRestaurants,
			deliveryTime,
			minCostDelivery,
			restaurantRating,
		} = filtersList;

		let restaurantsNewList = [...restaurantsList];

		const updateFilters = () => {
			restaurantsNewList = restaurantsNewList
				.filter(freeDelivery)
				.filter(openNowHandle)
				.filter(foodCategory)
				.filter(searchRestaurant)
				.filter(deliveryTime)
				.filter(minCostDelivery)
				.filter(restaurantRating)
				.sort(sortRestaurants);
		};
		updateFilters();

		return (
			<main className="allRestaurants__main">
				<MainPhoto numberOfRestaurants={restaurantsNewList.length} />
				<div className="containerBig">
					<div className="currentPage">
						<CurrentPageNav page={'/'} pageName={'Start Page'} />
						<CurrentPageNav
							page={'/restaurants'}
							pageName={'Restaurants'}
							lastItem={true}
						/>
					</div>
					<div className="allRestaurants__container">
						<div className="allRestaurants">
							<SearchRestaurant
								restaurantsList={restaurantsList}
								filterSearchRestaurant={this.filterSearchRestaurant}
								sortRestaurants={this.sortRestaurants}
								handleMobileFilters={this.handleMobileFilters}
								showHideFilters={showHideFilters}
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
