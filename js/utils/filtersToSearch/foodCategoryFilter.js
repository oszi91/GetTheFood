const foodCategoryFilter = category => {
	let foodCategory = res => res;

	if (category === 'all') {
		foodCategory = res => res;
	} else if (category) {
		foodCategory = res => res.foodCategories.some(r => r === category);
	}

	return foodCategory;
};

export default foodCategoryFilter;
