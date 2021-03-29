import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class ConfirmOrder extends Component {

    state = {
        orderProgress: 0
    }

    componentDidMount() {
        this.timeoutConfirm = setTimeout(() => {
            this.setState({
                orderProgress: this.state.orderProgress + 1
            }, () => {
                this.props.handleOrderProgress(this.state.orderProgress)
            })
        }, 2000)

        this.timeoutOnTheWay = setTimeout(() => {
            this.setState({
                orderProgress: this.state.orderProgress + 1
            }, () => {
                this.props.handleOrderProgress(this.state.orderProgress)
            })
        }, 4000)

        this.timeoutDelivered = setTimeout(() => {
            this.setState({
                orderProgress: this.state.orderProgress + 1
            }, () => {
                this.props.handleOrderProgress(this.state.orderProgress)
            })
        }, 6000)
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutConfirm)
        clearTimeout(this.timeoutOnTheWay)
        clearTimeout(this.timeoutDelivered)
    }

    scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    render() {
        const { orderProgress } = this.props;

        const orderProgressTxt = ['Wait for restaurant confirmation',
            'Your order will be delivered at 12', 'Your order is on its way', 'Your order has been delivered'];

        return (
            <div className="checkoutConfirm__container">
                <div className="checkoutConfirm">
                    <h1 className="checkoutConfirm__main">Thank you for order!</h1>
                    <h2 className="checkoutConfirm__text">{orderProgressTxt[orderProgress]}</h2>
                    <div className="checkoutConfirm__status">
                        <div className={`checkoutConfirm__status__item ${orderProgress === 0 ? 'active' : ''}`}>Order</div>
                        <div className={`checkoutConfirm__status__item ${orderProgress === 1 ? 'active' : ''}`}>Confirmed</div>
                        <div className={`checkoutConfirm__status__item ${orderProgress === 2 ? 'active' : ''}`}>On the way</div>
                        <div className={`checkoutConfirm__status__item ${orderProgress === 3 ? 'active' : ''}`}>Delivered</div>
                    </div>
                    <Link onClick={this.scrollToTop} className="checkoutConfirm__back" to='/restaurants'>Go back to restaurant list</Link>
                </div>
            </div>
            );
    }
}

export default ConfirmOrder;