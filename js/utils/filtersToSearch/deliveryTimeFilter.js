const deliveryTimeFilter = delTime => {
	let deliveryTime = res => res;

	switch (delTime) {
		case 'time_show_all':
			deliveryTime = res => res;
			break;
		case 'under30min':
			deliveryTime = res => res.averageDeliveryTime < 30;
			break;
		case 'under1h':
			deliveryTime = res => res.averageDeliveryTime < 60;
			break;
	}

	return deliveryTime;
};

export default deliveryTimeFilter;