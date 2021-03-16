import React, { Component } from 'react';

class TypeOfDish extends Component {
   
    render() {
        const {foodCategories} = this.props;

        return (
            <div className="allRestaurants__typeOfDish">
                <ul className="typeOfDish__list">
                    {foodCategories.map(food => (
                        <li key={food} className="typeOfDish__list__item">{food}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TypeOfDish;