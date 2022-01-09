import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import changeNameToURL from '../../../utils/general/changeNameToURL';
import scrollToTop from '../../../utils/general/scrollToTop';

class RestaurantItem extends Component {
	render() {
		const {
			name,
			photo,
			rating,
			deliveryPrice,
			averageDeliveryTime,
			minDeliveryPrice,
		} = this.props.restaurant;

		const restaurantURL = changeNameToURL(name);

		return (
			<li className="allRestaurants__list__item">
				<Link to={`restaurants/${restaurantURL}`} onClick={scrollToTop}>
					<div className="restaurantOnListView">
						<div className="restaurantOnListView__main">
							<p className="restaurantOnListView__main__name">{name}</p>
							<p className="restaurantOnListView__main__rating">
								{rating}/5 <span className="fa fa-star"></span>
							</p>
						</div>
						<div className="restaurantOnListView__more">
							<p className="restaurantOnListView__more__minCost">
								<i className="fas fa-money-bill-wave"></i> min.{' '}
								{minDeliveryPrice} PLN
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
				</Link>
			</li>
		);
	}
}

export default RestaurantItem;
