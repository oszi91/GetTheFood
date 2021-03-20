import React, { Component, useRef } from 'react';
import DishesList from './DishesList/DishesList';
import FoodKind from './FoodKind/FoodKind';
import OneRestaurantHeader from './OneRestaurantHeader/OneRestaurantHeader';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import changeNameToURL from '../Functions/changeNameToURL';

class OneRestaurantPage extends Component {

    state = {
        order: [],
        price: ''
    }

    handleOrder = dish => {
        this.setState({
            order: this.state.order.filter(el => el.name !== dish.name)
        }, () => {
            this.setState({
                order: [...this.state.order, dish]
            })
        })
    }

    render() {
        const { restaurants } = this.props.data;
        const { id } = this.props.match.params;

        const oneRestaurant = restaurants.filter(restaurant => (
            changeNameToURL(restaurant.name) == id
        ));

        const orderAmount = this.state.order.reduce((a, b) => a + b.price, 0);
        console.log(orderAmount)

        return (
            oneRestaurant.map(restaurant => (
                <main key={restaurant.id} className="oneRestaurant__main">
                    <OneRestaurantHeader name={restaurant.name} rating={restaurant.rating} photo={restaurant.photo} />
                    <div className="containerBig">
                        <div className="oneRestaurant__container">
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
                                                price={this.state.price}
                                            />
                                        </React.Fragment>
                                    )
                                }
                                )}
                            </div>
                            <ShoppingCart
                             orderAmount={orderAmount}
                             order={this.state.order}
                             deliveryPrice={restaurant.deliveryPrice}
                             freeDeliveryFrom={restaurant.freeDeliveryFrom}
                             minDeliveryPrice={restaurant.minDeliveryPrice}
                             />
                        </div>
                    </div>
                </main>
            ))
        );
    }
}

export default OneRestaurantPage;