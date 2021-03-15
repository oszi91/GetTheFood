import React, { Component } from 'react';

class allRestaurantsPage extends Component {
    state = {}
    render() {
        return (
            <main className="allRestaurants__main">
                <div className="allRestaurantsPhoto">
                    <h1 className="allRestaurantsPhoto__text">Choose from 10 restaurants</h1>
                    <img className="allRestaurantsPhoto__img" src="./../../images/food1.jpg" />
                </div>
                <div className="containerBig">      
                    <div className="allRestaurants__container">
                        <div className="allRestaurants">
                        <h2 className="allRestaurants__header">Find your favorite restaurant</h2>
                            <div className="allRestaurants__search">
                                <input className="allRestaurants__search__input" type="text" placeholder="the name of the restaurant" />
                                <div className="allRestaurants__search__sort">
                                    <label className="allRestaurants__search__sort__label" htmlFor="sort">Sort by:</label>
                                    <select className="allRestaurants__search__sort__select" name="sort">
                                        <option value="popular">Popular</option>
                                        <option value="min_order_amount">Min. order amount</option>
                                        <option value="from_lower_price">From lower price</option>
                                        <option value="from_higher_price">From higher price</option>
                                        <option value="rating">Rating</option>
                                    </select>
                                </div>
                            </div>
                            <div className="allRestaurants__typeOfDish">
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
                            <div className="allRestaurants__list__container">
                                <ul className="allRestaurants__list">
                                    <li className="allRestaurants__list__item">
                                        <div className="restaurantOnListView">
                                            <div className="restaurantOnListView__main">
                                                <p className="restaurantOnListView__main__name">McDonald's</p>
                                                <p className="restaurantOnListView__main__rating">
                                                    4.35/5 <span className="fa fa-star"></span>
                                                </p>
                                            </div>
                                            <div className="restaurantOnListView__more">
                                                <p className="restaurantOnListView__more__minCost">
                                                    <i className="fas fa-money-bill-wave"></i> min. 20 PLN
                                            </p>
                                                <p className="restaurantOnListView__more__deliveryCost">
                                                    <i className="fas fa-truck"></i> 5 PLN
                                            </p>
                                                <p className="restaurantOnListView__more__deliveryTime">
                                                    <i className="fas fa-clock"></i> 60 min
                                            </p>
                                            </div>
                                            <div className="restaurantOnListView__photo">
                                                <img className="restaurantOnListView__photo__img" src="./../../images/restaurantphoto1.jpg" />
                                            </div>
                                        </div>
                                    </li>      <li className="allRestaurants__list__item">
                                        <div className="restaurantOnListView">
                                            <div className="restaurantOnListView__main">
                                                <p className="restaurantOnListView__main__name">McDonald's</p>
                                                <p className="restaurantOnListView__main__rating">
                                                    4.35/5<span className="fa fa-star"></span>
                                                </p>
                                            </div>
                                            <div className="restaurantOnListView__more">
                                                <p className="restaurantOnListView__more__minCost">
                                                    <i className="fas fa-money-bill-wave"></i> min. 20 PLN
                                            </p>
                                                <p className="restaurantOnListView__more__deliveryCost">
                                                    <i className="fas fa-truck"></i> 5 PLN
                                            </p>
                                                <p className="restaurantOnListView__more__deliveryTime">
                                                    <i className="fas fa-clock"></i> 60 min
                                            </p>
                                            </div>
                                            <div className="restaurantOnListView__photo">
                                                <img className="restaurantOnListView__photo__img" src="./../../images/restaurantphoto1.jpg" />
                                            </div>
                                        </div>
                                    </li>      <li className="allRestaurants__list__item">
                                        <div className="restaurantOnListView">
                                            <div className="restaurantOnListView__main">
                                                <p className="restaurantOnListView__main__name">McDonald's</p>
                                                <p className="restaurantOnListView__main__rating">
                                                    4.35/5<span className="fa fa-star"></span>
                                                </p>
                                            </div>
                                            <div className="restaurantOnListView__more">
                                                <p className="restaurantOnListView__more__minCost">
                                                    <i className="fas fa-money-bill-wave"></i> min. 20 PLN
                                            </p>
                                                <p className="restaurantOnListView__more__deliveryCost">
                                                    <i className="fas fa-truck"></i> 5 PLN
                                            </p>
                                                <p className="restaurantOnListView__more__deliveryTime">
                                                    <i className="fas fa-clock"></i> 60 min
                                            </p>
                                            </div>
                                            <div className="restaurantOnListView__photo">
                                                <img className="restaurantOnListView__photo__img" src="./../../images/restaurantphoto1.jpg" />
                                            </div>
                                        </div>
                                    </li>      <li className="allRestaurants__list__item">
                                        <div className="restaurantOnListView">
                                            <div className="restaurantOnListView__main">
                                                <p className="restaurantOnListView__main__name">McDonald's</p>
                                                <p className="restaurantOnListView__main__rating">
                                                    4.35/5<span className="fa fa-star"></span>
                                                </p>
                                            </div>
                                            <div className="restaurantOnListView__more">
                                                <p className="restaurantOnListView__more__minCost">
                                                    <i className="fas fa-money-bill-wave"></i> min. 20 PLN
                                            </p>
                                                <p className="restaurantOnListView__more__deliveryCost">
                                                    <i className="fas fa-truck"></i> 5 PLN
                                            </p>
                                                <p className="restaurantOnListView__more__deliveryTime">
                                                    <i className="fas fa-clock"></i> 60 min
                                            </p>
                                            </div>
                                            <div className="restaurantOnListView__photo">
                                                <img className="restaurantOnListView__photo__img" src="./../../images/restaurantphoto1.jpg" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="allFood__filters">
                            <div className="freeDelivery">
                                <p className="freeDelivery__text">Free delivery </p>
                                <div className="freeDelivery__btn">
                                    <label className="switch">
                                        <input className="switch__input" type="checkbox" />
                                        <span className="slider"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="timeDelivery">
                                <form className="timeDelivery__form">
                                    <p className="timeDelivery__form__text">Delivery time</p>
                                    <div className="timeDelivery__form__radio">
                                        <input type="radio" id="time_show_all" name="time"
                                            value="time_show_all" />
                                        <label htmlFor="time_show_all"> Show all</label>
                                    </div>
                                    <div className="timeDelivery__form__radio">
                                        <input type="radio" id="under30min" name="time"
                                            value="under30min" />
                                        <label htmlFor="under30min"> Up to 30 min</label>
                                    </div>
                                    <div className="timeDelivery__form__radio">
                                        <input type="radio" id="under1h" name="time"
                                            value="under1h" />
                                        <label htmlFor="under1h"> Up to 1 hour</label>
                                    </div>
                                </form>
                            </div>
                            <div className="minPriceDelivery">
                                <form className="minPriceDelivery__form">
                                    <p className="minPriceDelivery__form__text">Min. cost of delivery</p>
                                    <div className="minPriceDelivery__form__radio">
                                        <input type="radio" id="price_show_all" name="price"
                                            value="price_show_all" />
                                        <label htmlFor="price_show_all"> Show all</label>
                                    </div>
                                    <div className="minPriceDelivery__form__radio">
                                        <input type="radio" id="under30PLN" name="price"
                                            value="under30PLN" />
                                        <label htmlFor="under30PLN"> less than 30 PLN</label>
                                    </div>
                                    <div className="minPriceDelivery__form__radio">
                                        <input type="radio" id="under60PLN" name="price"
                                            value="under60PLN" />
                                        <label htmlFor="under60PLN"> less than 60 PLN</label>
                                    </div>
                                </form>
                            </div>
                            <div className="deliveryRating">
                                <p className="deliveryRating__text">Restaurant ratings</p>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <div className="openNow">
                                <p className="openNow__text">Open now</p>
                                <div className="openNow__btn">
                                    <label className="switch">
                                        <input className="switch__input" type="checkbox" />
                                        <span className="slider"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default allRestaurantsPage;