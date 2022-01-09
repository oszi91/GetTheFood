import React, { Component } from 'react';

class FreeDelivery extends Component {
	render() {
		const { orderAmount, freeDeliveryFrom } = this.props;

		const isFree = orderAmount >= freeDeliveryFrom;

		const deliveryText = isFree
			? 'Free Delivery'
			: `Free Delivery from ${freeDeliveryFrom} PLN`;

		const deliveryStyle = {
			backgroundColor: isFree ? '#8bb88b' : '#fafa1f',
			color: isFree ? 'white' : 'black',
		};

		return (
			<div className="dishFreeDelivery" style={deliveryStyle}>
				<p className="dishFreeDelivery__text">{deliveryText}</p>
			</div>
		);
	}
}

export default FreeDelivery;
