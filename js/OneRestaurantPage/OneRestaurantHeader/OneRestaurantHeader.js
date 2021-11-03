import React, { Component } from 'react';

class OneRestaurantHeader extends Component {
	render() {
		const { name, rating, photo } = this.props;

		return (
			<div className="oneRestaurantPhoto">
				<div className="oneRestaurantPhoto__textBox">
					<h1 className="oneRestaurantPhoto__textBox__text">{name}</h1>
					<p className="oneRestaurantPhoto__textBox__rating">
						{rating}/5<span className="fa fa-star"></span>
					</p>
				</div>
				<img className="oneRestaurantPhoto__img" src={photo} />
			</div>
		);
	}
}

export default OneRestaurantHeader;
