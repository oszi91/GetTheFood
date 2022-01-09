const searchRestaurantFilter = searchName => {
	let searchRestaurant = res => res;

	if (searchName) {
		searchRestaurant = res =>
			res.name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1;
	} else {
		searchRestaurant = res => res;
	}

	return searchRestaurant;
};

export default searchRestaurantFilter;
