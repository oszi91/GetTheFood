const restaurantRatingFilter = rating => {
	let restaurantRating = () => res => res;

	switch (rating) {
		case '1':
			restaurantRating = () => res => res;
			break;
		case '2':
			restaurantRating = res => res.rating >= 2;
			break;
		case '3':
			restaurantRating = res => res.rating >= 3;
			break;
		case '4':
			restaurantRating = res => res.rating >= 4;
			break;
		case '5':
			restaurantRating = res => res.rating >= 4.5;
			break;
	}

	return restaurantRating;
};

export default restaurantRatingFilter;
