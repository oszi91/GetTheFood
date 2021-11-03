import React, { Component } from 'react';

class MainPhoto extends Component {
	render() {
		const { numberOfRestaurants } = this.props;

		return (
			<div className="allRestaurantsPhoto">
				<h1 className="allRestaurantsPhoto__text">
					Choose from {numberOfRestaurants} restaurants
				</h1>
				<img className="allRestaurantsPhoto__img" src="images/foodRes.jpg" />
			</div>
		);
	}
}

export default MainPhoto;
