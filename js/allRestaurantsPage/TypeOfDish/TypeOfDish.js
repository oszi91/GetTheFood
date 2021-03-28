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
        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 5
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 8,

            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 5
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1
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
                    customTransition="all .5"
                    deviceType={this.props.deviceType}
                    itemClass="typeOfDish__list__item"
                    responsive={responsive}
                >
                    {foodCategories.map((food, index) => (
                        <div
                            className={index === this.state.activeIndex ? "typeOfDish__list__item typeOf typeOfDish__list__item--active" : "typeOfDish__list__item"}
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