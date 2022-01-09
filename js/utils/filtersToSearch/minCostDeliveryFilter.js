const minCostDeliveryFilter = minCost => {
	let minCostDeliveryHandle = () => res => res;

	switch (minCost) {
		case 'price_show_all':
			minCostDeliveryHandle = () => res => res;
			break;
		case 'under30PLN':
			minCostDeliveryHandle = res => res.minDeliveryPrice < 30;
			break;
		case 'under60PLN':
			minCostDeliveryHandle = res => res.minDeliveryPrice < 60;
			break;
	}

	return minCostDeliveryHandle;
};

export default minCostDeliveryFilter;
