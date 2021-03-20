import React, { Component } from 'react';

class SummaryOrder extends Component {
    render() {
        const {orderAmount, deliveryPrice, freeDeliveryFrom} = this.props;

        const isFree = orderAmount >= freeDeliveryFrom;
        const totalAmount = isFree ? orderAmount : orderAmount + deliveryPrice;

        return (
            <>
                <div className="dishDeliverySummary">
                    <p className="dishDeliverySummary__text">Amount</p>
                    <p className="dishDeliverySummary__price">{orderAmount.toFixed(2)} PLN</p>
                </div>
                <div className="dishDeliverySummary" style={{textDecorationLine: isFree ? 'line-through' : 'none'}}>
                    <p className="dishDeliverySummary__text" >Delivery</p>
                    <p className="dishDeliverySummary__price">{deliveryPrice.toFixed(2)} PLN</p>
                </div>
                <div className="dishDeliverySummary dishDeliverySummary--bold">
                    <p className="dishDeliverySummary__text">Total amount</p>
                    <p className="dishDeliverySummary__price">{totalAmount.toFixed(2)} PLN</p>
                </div>
            </>
        );
    }
}

export default SummaryOrder;