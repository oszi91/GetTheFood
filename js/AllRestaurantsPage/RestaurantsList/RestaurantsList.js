import React, { Component } from 'react';
import RestaurantItem from './RestaurantItem/RestaurantItem';

class RestaurantsList extends Component {
	render() {
		const { restaurantsList, address } = this.props;

		return (
			<div className="allRestaurants__list__container">
				<ul className="allRestaurants__list">
					{restaurantsList.map(restaurant => (
						<RestaurantItem
							restaurant={restaurant}
							key={restaurant.id}
							address={address}
						/>
					))}
				</ul>
			</div>
		);
	}
}

export default RestaurantsList;
