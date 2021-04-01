import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class TypeOfDish extends Component {

    state = {
        active: false,
        activeIndex: 0
    }

    chooseDish = (e, index) => {
        this.props.foodCategory(e.target.dataset.value, this.state.active)

        this.setState({
            active: !this.state.active,
            activeIndex: index
        })

    }

    render() {
        const { foodCategories } = this.props;
        const {activeIndex} = this.state;

        const isActive = i => i === activeIndex ? 
        "typeOfDish__list__item typeOf typeOfDish__list__item--active" : 
        "typeOfDish__list__item";

        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 7,

            },
            tablet: {
                breakpoint: { max: 1024, min: 767 },
                items: 4
            },
            mobile: {
                breakpoint: { max: 767, min: 0 },
                items: 2
            }
        };

        return (
            <div className="allRestaurants__typeOfDish">
                <Carousel className="typeOfDish__list"
                    centerMode={true}
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}
                    ssr={true}
                    keyBoardControl={true}
                    removeArrowOnDeviceType={["mobile"]}
                    deviceType={this.props.deviceType}
                    itemClass="typeOfDish__list__item"
                    responsive={responsive}
                >
                    {foodCategories.map((food, index) => (
                        <div
                            className={isActive(index)}
                            data-value={food}
                            key={food}
                            onClick={(e) => this.chooseDish(e, index)}
                        >{food}</div>
                    ))}
                </Carousel>
            </div>
        );
    }
}

export default TypeOfDish;