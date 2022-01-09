const filteredRestaurantsBasedOnAddress = (restaurantList, address) => {
	let restaurantIndexesToDelete = [];

	const findIndexToDelete = restaurantList.forEach((r, i) => {
		if (address) {
			const compare = r.deliveryAddress.filter(a1 =>
				[address].some(a2 => a1.street === a2.street)
			);
			if (!compare.length) {
				restaurantIndexesToDelete.push(i);
			}
		}
	});

	const filteredList = restaurantList.filter(
		(r, i) => restaurantIndexesToDelete.indexOf(i) === -1
	);

	return filteredList;
};

export default filteredRestaurantsBasedOnAddress;
