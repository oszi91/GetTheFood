const userSearchByAddress = (addresses, searchAddress) => {
	const searchValid = (r, s) => r.toLowerCase().includes(s.toLowerCase());

	const searchedAddresses = addresses.filter(
		({ street, zipCode, city }) =>
			searchValid(street, searchAddress) ||
			searchValid(zipCode, searchAddress) ||
			searchValid(city, searchAddress)
	);

	return searchedAddresses;
};

export default userSearchByAddress;
