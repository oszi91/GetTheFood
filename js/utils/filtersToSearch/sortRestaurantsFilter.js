const sortRestaurantsFilter = sortVal => {
	let sortRestaurants = res => res;

	switch (sortVal) {
		case 'alphabetically':
			sortRestaurants = (a, b) => a.name.localeCompare(b.name);
			break;
		case 'min_order_amount':
			sortRestaurants = (a, b) => a.minDeliveryPrice - b.minDeliveryPrice;
			break;
		case 'delivery_time':
			sortRestaurants = (a, b) => a.averageDeliveryTime - b.averageDeliveryTime;
			break;
		case 'delivery_costs':
			sortRestaurants = (a, b) => a.deliveryPrice - b.deliveryPrice;
			break;
		case 'rating':
			sortRestaurants = (a, b) => b.rating - a.rating;
			break;
	}

	return sortRestaurants;
};

export default sortRestaurantsFilter;
