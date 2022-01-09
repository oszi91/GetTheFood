import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBarItem extends Component {
	saveAddress = address => {
		this.props.handleAddress(address);
	};

	render() {
		const { address, handleCloseAddressBar } = this.props;

		return (
			<Link to="/restaurants" key={address.street}>
				<li
					onClick={() => {
						this.saveAddress(address);
						handleCloseAddressBar ? handleCloseAddressBar() : null;
					}}
					className="searchPlace__addressList__item"
				>
					{address.street}, {address.zipCode} {address.city}
				</li>
			</Link>
		);
	}
}

export default SearchBarItem;
