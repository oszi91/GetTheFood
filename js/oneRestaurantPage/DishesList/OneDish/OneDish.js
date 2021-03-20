import React, { Component } from 'react';
import OneDishOrderDetails from './OneDishOrderDetails/OneDishOrderDetails';

class OneDish extends Component {
    state = {
        orderDetails: false,
        id: undefined
    }

    handleOpenDetails = id => {
        this.setState({
            orderDetails: !this.state.orderDetails,
            id
        })
    }

    render() {
        const { menu } = this.props;
        const classAdd = id => (this.state.orderDetails && this.state.id === id) ? "oneDishViewContainer__showDetails" : "";

        return (
            <>
                {menu.map(dish => (
                    <li className="dishesList__item" key={dish.id} >
                        <div className="oneDishView" onClick={() => this.handleOpenDetails(dish.id)}>
                            <div className="oneDishView__container">
                                <p className="oneDishView__name">{dish.name}</p>
                                <p className="oneDishView__order">
                                    <i className="fas fa-plus"></i>
                                </p>
                            </div>
                            <p className="oneDishView__ingredients">{dish.ingriedents}</p>
                            <div className="oneDishView__container">
                                <p className="oneDishView__container__price">{dish.price.toFixed(2)} PLN</p>
                                <p className="oneDishView__container__additionals">Additionals <i className="fas fa-plus-circle"></i>
                                </p>
                            </div>
                        </div>
                        <OneDishOrderDetails 
                        dish={dish} 
                        handleOpenDetails={this.handleOpenDetails} 
                        classAdd={classAdd}
                        order={this.props.order}
                        handleOrder={this.props.handleOrder} 
                        price={this.props.price}
                        />
                    </li>
                ))
                }
            </>
        );
    }
}

export default OneDish;