import React, { Component } from 'react';

class OneDish extends Component {
    state = {}
    render() {

        const {menuItems} = this.props;

        return (
            <>
                {menuItems.map(dish => (
                    <li key={dish.id} className="dishesList__item">
                        <div className="oneDishView">
                            <div className="oneDishView__container">
                                <p className="oneDishView__name">{dish.name}</p>
                                <p className="oneDishView__order"><i className="fas fa-plus"></i>
                                </p>
                            </div>
                            <p className="oneDishView__ingredients">{dish.ingriedents}</p>
                            <div className="oneDishView__container">
                                <p className="oneDishView__container__price">{dish.price},00 PLN</p>
                                <p className="oneDishView__container__additionals">Additionals <i className="fas fa-plus-circle"></i>
                                </p>
                            </div>
                        </div>
                    </li>
                ))
                }
            </>
        );
    }
}

export default OneDish;