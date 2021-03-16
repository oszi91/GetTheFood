import React, { Component } from 'react';

class FoodKind extends Component {

    render() {

        const {foodCat} = this.props;

        return (
            <div className="allRestaurants__typeOfDish">
                <ul className="typeOfDish__list">
                    {foodCat.map(cat => <li key={cat} className="typeOfDish__list__item">{cat}</li>)}
                </ul>
            </div>
        );
    }
}

export default FoodKind;