import React, { Component } from 'react';

class TypeOfDish extends Component {

    state = {
        active: false,
        activeIndex: -1
    }

    chooseDish = (e,index) => {
        this.props.foodCategory(e.target.dataset.value, this.state.active)

            this.setState({
                active: !this.state.active,
                activeIndex: index
            },)
       
    }
   
    render() {
        const {foodCategories} = this.props;

        return (
            <div className="allRestaurants__typeOfDish">
                <ul className="typeOfDish__list">
                    {foodCategories.map( (food,index) => (
                        <li 
                        className={index === this.state.activeIndex ? "typeOfDish__list__item typeOf typeOfDish__list__item--active" : "typeOfDish__list__item"}
                        data-value={food}
                        key={food} 
                        onClick={(e) => this.chooseDish(e,index)}
                        >{food}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TypeOfDish;