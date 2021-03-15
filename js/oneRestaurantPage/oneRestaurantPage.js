import React, { Component } from 'react';

class oneRestaurantPage extends Component {
    state = {}
    render() {
        return (
            <main className="oneRestaurant__main">
                <div className="oneRestaurantPhoto">
                    <div className="oneRestaurantPhoto__textBox">
                        <h1 className="oneRestaurantPhoto__textBox__text">McDonald's</h1>
                        <p className="oneRestaurantPhoto__textBox__rating">
                            4.35/5<span className="fa fa-star"></span>
                        </p>
                    </div>
                    <img className="oneRestaurantPhoto__img" src="./../../images/food1.jpg" />
                </div>
                <div className="containerBig">
                    <div className="oneRestaurant__container">
                        <div className="oneRestaurantMenu">
                            <div className="oneRestaurantMenu__typeOfDish">
                                <ul className="typeOfDish__list">
                                    <li className="typeOfDish__list__item">American</li>
                                    <li className="typeOfDish__list__item">Japanese</li>
                                    <li className="typeOfDish__list__item">Polish</li>
                                    <li className="typeOfDish__list__item">American</li>
                                    <li className="typeOfDish__list__item">Japanese</li>
                                    <li className="typeOfDish__list__item">Polish</li>
                                    <li className="typeOfDish__list__item">American</li>
                                    <li className="typeOfDish__list__item">Japanese</li>
                                    <li className="typeOfDish__list__item">Polish</li>
                                </ul>
                            </div>
                            <div className="dishesList__container">
                            <h1 className="dishesList__container__category">PIZZA</h1>
                            <ul className="dishesList">
                                <li className="dishesList__item">
                                    <div className="oneDishView">
                                        <div className="oneDishView__container">
                                            <p className="oneDishView__name">Pizza Margherita</p>
                                            <p className="oneDishView__order"><i className="fas fa-plus"></i>
                                            </p>
                                        </div>
                                        <p className="oneDishView__ingredients">Sauce, mozzarella cheese.</p>
                                        <div className="oneDishView__container">
                                            <p className="oneDishView__container__price">22,00 PLN</p>
                                            <p className="oneDishView__container__additionals">Additionals <i className="fas fa-plus-circle"></i>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="oneRestaurantCart">
                            <h2 className="oneRestaurantCart__header">Your order</h2>
                            <div className="dishContainer">
                                <button className="dishContainer__btn"><i className="fas fa-plus-circle"></i></button>
                                <p className="dishContainer__dishName">Some Dish</p>
                                <p className="dishContainer__price">
                                    <span className="dishContainer__price__quantity">1x</span> 42,00 PLN
                                </p>
                                <button className="dishContainer__btn"><i className="fas fa-minus-circle"></i></button>
                            </div>
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
                            <div className="dishFreeDelivery">
                                <p className="dishFreeDelivery__text">Free Delivery from 100 PLN</p>
                            </div>
                            <div className="dishMinPrice">
                                <p className="dishMinPrice__text">20 PLN left to the min. amount</p>
                            </div>
                            <button className="dishOrder">Order</button>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default oneRestaurantPage;