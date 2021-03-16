import React, { Component } from 'react';

class SummaryOrder extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="dishDeliverySummary">
                    <p className="dishDeliverySummary__text">Amount</p>
                    <p className="dishDeliverySummary__price">42,00 PLN</p>
                </div>
                <div className="dishDeliverySummary">
                    <p className="dishDeliverySummary__text">Delivery</p>
                    <p className="dishDeliverySummary__price">6,00 PLN</p>
                </div>
                <div className="dishDeliverySummary dishDeliverySummary--bold">
                    <p className="dishDeliverySummary__text">Total amount</p>
                    <p className="dishDeliverySummary__price">48,00 PLN</p>
                </div>
            </>
        );
    }
}

export default SummaryOrder;