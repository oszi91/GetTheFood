import React, { Component } from 'react';
import OneDishOrderDetails from './OneDishOrderDetails/OneDishOrderDetails';

class OneDish extends Component {
    state = {
        orderDetails: false
    }

    handleOpenDetails = item => {
        this.setState({
            orderDetails: !this.state.orderDetails
        })
    }

    render() {

        const { menu } = this.props;

        const classAdd = this.state.orderDetails ? "oneDishViewContainer__showDetails" : "";

        return (
            <>
                {menu.map( dish => (
                    <li  className="dishesList__item" >
                        <div className="oneDishView" key={dish.id} onClick={() => this.handleOpenDetails(dish.id)}>
                            <div className="oneDishView__container">
                                <p className="oneDishView__name">{dish.name}</p>
                                <p className="oneDishView__order">
                                    <i className="fas fa-plus"></i>
                                </p>
                            </div>
                            <p className="oneDishView__ingredients">{dish.ingriedents}</p>
                            <div className="oneDishView__container">
                                <p className="oneDishView__container__price">{dish.price},00 PLN</p>
                                <p className="oneDishView__container__additionals">Additionals <i className="fas fa-plus-circle"></i>
                                </p>
                            </div>
                        </div>
                        <OneDishOrderDetails dish={dish} handleOpenDetails={this.handleOpenDetails} classAdd={classAdd} />
                    </li>
                ))
                }
            </>
        );
    }
}

export default OneDish;