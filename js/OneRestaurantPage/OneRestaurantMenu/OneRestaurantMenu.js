import React, { Component } from 'react';

import DishesList from '../DishesList/DishesList';
import FoodKind from '../FoodKind/FoodKind';

class OneRestaurantMenu extends Component {
	render() {
		const { restaurant, order, handleOrder } = this.props;

		return (
			<div className="oneRestaurantMenu">
				{restaurant.menus.map(res => {
					const refs = res.menuSections.reduce((acc, value) => {
						acc[value.sectionName] = React.createRef();
						return acc;
					}, {});

					const handleClick = id =>
						refs[id].current.scrollIntoView({
							behavior: 'smooth',
							block: 'start',
						});

					return (
						<React.Fragment key={restaurant.id}>
							<FoodKind foodCat={res.menuSections} handleClick={handleClick} />
							<DishesList
								foodMenu={res.menuSections}
								reference={refs}
								order={order}
								handleOrder={handleOrder}
							/>
						</React.Fragment>
					);
				})}
			</div>
		);
	}
}

export default OneRestaurantMenu;
