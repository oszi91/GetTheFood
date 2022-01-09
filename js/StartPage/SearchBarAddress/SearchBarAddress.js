import React, { Component } from 'react';

import reduceAddressesFromAllRestaurantsToSingleList from '../../utils/reduceAddressesFromAllRestaurantsToSingleList';
import userSearchByAddress from '../../utils/userSearchByAddress';

import SearchBarItem from './SearchBarItem/SearchBarItem';

class SearchBarAddress extends Component {
	state = {
		searchAddress: '',
		addressListData: [...this.props.data.restaurants],
	};

	handleInput = e => {
		this.setState({
			searchAddress: e.target.value,
		});
	};

	render() {
		const { searchAddress, addressListData } = this.state;
		const { handleAddress, handleCloseAddressBar } = this.props;

		const newList =
			reduceAddressesFromAllRestaurantsToSingleList(addressListData);
		const searchedAddresses = userSearchByAddress(newList, searchAddress);

		const showSearchBarItem = searchedAddresses.map(address => (
			<SearchBarItem
				key={address.street}
				address={address}
				handleAddress={handleAddress}
				handleCloseAddressBar={handleCloseAddressBar}
			/>
		));

		const inputIsActive = searchAddress
			? 'searchPlace__form__input--active'
			: '';

		return (
			<form className="searchPlace__form">
				<input
					autoFocus
					placeholder={'e.g. Emaliowa, 02-295 Warszawa'}
					className={`searchPlace__form__input ${inputIsActive}`}
					type="text"
					value={searchAddress}
					onChange={this.handleInput}
				/>
				<div className="searchPlace__form__icon">
					<i className="fas fa-search"></i>
				</div>
				<ul className="searchPlace__addressList">
					{searchAddress && showSearchBarItem}
				</ul>
			</form>
		);
	}
}

export default SearchBarAddress;
