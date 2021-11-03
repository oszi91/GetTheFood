import React, { Component } from 'react';

class AddressHeaderMobile extends Component {
	render() {
		const { address, handleOpenAddressBar } = this.props;

		const isAddressEmpty = address ? (
			'St. ' + address.street + ' ...'
		) : (
			<i className="fas fa-search-location"></i>
		);

		return (
			<div className="nav__address__mobile">
				<p
					className={address ? 'nav__address__mobile__text' : ''}
					onClick={handleOpenAddressBar}
				>
					{isAddressEmpty}
				</p>
			</div>
		);
	}
}

export default AddressHeaderMobile;
