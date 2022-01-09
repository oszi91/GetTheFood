const reduceAddressesFromAllRestaurantsToSingleList = restaurants => {
    const newList = restaurants
        .map(r => r.deliveryAddress)
        .flat()
        .filter(
            (r1, i, addressList) =>
                addressList.findIndex(r2 => r2.street === r1.street) === i
        );

    return newList;
};

export default reduceAddressesFromAllRestaurantsToSingleList;