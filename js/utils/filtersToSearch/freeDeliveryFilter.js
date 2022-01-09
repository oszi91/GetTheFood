const freeDeliveryFilter = (isFree) => {
    let freeDelivery = res => res;

    if (isFree) {
        freeDelivery = res => res;
    } else {
        freeDelivery = res => res.deliveryPrice === 0;
    }

	return freeDelivery;
};

export default freeDeliveryFilter;