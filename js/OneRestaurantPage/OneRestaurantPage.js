import React, { Component, useRef } from 'react';
import DishesList from './DishesList/DishesList';
import FoodKind from './FoodKind/FoodKind';
import OneRestaurantHeader from './OneRestaurantHeader/OneRestaurantHeader';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import changeNameToURL from '../Functions/changeNameToURL';
import { Prompt } from 'react-router'
import Checkout from './ShoppingCart/Checkout/Checkout';
import {
    NavLink
} from 'react-router-dom';

class OneRestaurantPage extends Component {

    state = {
        order: [],
        checkoutIsOpen: false,
        isOrderOpenMobile: false
    }

    handleMobileOrder = val => {
            this.setState({
                isOrderOpenMobile: val
            })
    }

    handleOrder = (dish, val) => {

        if (val == 'addOrModify') {
            this.setState({
                order: this.state.order.filter(el => el.id !== dish.id)
            }, () => {
                this.setState({
                    order: [...this.state.order, dish]
                })
            })
        } else if (val === 'remove') {
            this.setState({
                order: this.state.order.filter(el => el.id !== dish)
            })
        }
    }

    handleCheckout = (checkoutIsOpen) => {
        this.setState({
            checkoutIsOpen
        })
    }

    componentDidUpdate = () => {
        if (this.state.order.length) {
            window.onbeforeunload = () => true
        } else {
            window.onbeforeunload = undefined
        }
    }

    clearOrder = order => {
        this.setState({
            order
        })
    }

    render() {
        const { restaurants } = this.props.data;
        const { id } = this.props.match.params;

        const oneRestaurant = restaurants.filter(restaurant => (
            changeNameToURL(restaurant.name) == id
        ));

        const orderAmount = this.state.order.reduce((a, b) => a + b.price, 0);

       

        return (
            oneRestaurant.map(restaurant => (
                <main key={restaurant.id} className="oneRestaurant__main">
                    <Prompt
                        when={this.state.order.length > 0}
                        message='If you leave the website you will lose your order. Are you sure you want to do this?'
                    />
                    <OneRestaurantHeader name={restaurant.name} rating={restaurant.rating} photo={restaurant.photo} />
                    <div className="containerBig">
                    <div className="currentPage">
                        <NavLink
                            className="currentPage__item"
                            activeClassName="currentPage__item--active"
                            exact to='/'>
                        Start Page</NavLink>
                        <i className="fas fa-chevron-right"></i>
                        <NavLink
                            className="currentPage__item"
                            activeClassName="currentPage__item--active"
                            exact to='/restaurants'>
                        Restaurants</NavLink>
                        <i className="fas fa-chevron-right"></i>
                        <NavLink
                            className="currentPage__item"
                            activeClassName="currentPage__item--active"
                            to={window.location.pathname}>
                        {restaurant.name}</NavLink>
                    </div>
                        <div className="oneRestaurant__container">
                            <>
                                {this.state.checkoutIsOpen ?
                                    <Checkout address={this.props.address} clearOrder={this.clearOrder} />
                                    :
                                    <div className="oneRestaurantMenu">
                                        {restaurant.menus.map(res => {

                                            const refs = res.menuSections.reduce((acc, value) => {
                                                acc[value.sectionName] = React.createRef();
                                                return acc;
                                            }, {});

                                            const handleClick = id =>
                                                refs[id].current.scrollIntoView({
                                                    behavior: 'smooth',
                                                    block: 'start',
                                                });

                                            return (
                                                <React.Fragment key={restaurant.id}>
                                                    <FoodKind
                                                        foodCat={res.menuSections}
                                                        handleClick={handleClick}
                                                    />
                                                    <DishesList
                                                        foodMenu={res.menuSections}
                                                        reference={refs}
                                                        order={this.state.order}
                                                        handleOrder={this.handleOrder}
                                                    />
                                                </React.Fragment>
                                            )
                                        }
                                        )}
                                    </div>
                                }
                            </>
                            <ShoppingCart
                                foodMenu={restaurant.menus}
                                orderAmount={orderAmount}
                                order={this.state.order}
                                deliveryPrice={restaurant.deliveryPrice}
                                freeDeliveryFrom={restaurant.freeDeliveryFrom}
                                minDeliveryPrice={restaurant.minDeliveryPrice}
                                handleOrder={this.handleOrder}
                                handleCheckout={this.handleCheckout}
                                checkoutIsOpen={this.state.checkoutIsOpen}
                                isOrderOpenMobile={this.state.isOrderOpenMobile}
                                handleMobileOrder={this.handleMobileOrder}
                            />
                        </div>
                        {this.state.order.length > 0 && 
                        <div onClick={() => this.handleMobileOrder(true)} className="basket__mobileBtn">Show order {orderAmount} PLN</div>
                        }
                    </div>
                </main>
            ))
        );
    }
}

export default OneRestaurantPage;