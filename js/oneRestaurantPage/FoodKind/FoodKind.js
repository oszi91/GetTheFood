import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class FoodKind extends Component {

    render() {
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

        const {foodCat} = this.props;
       
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
                    transitionDuration={500}
                    deviceType={this.props.deviceType}
                    itemClass="typeOfDish__list__item"
                    responsive={responsive}
                >
                    {foodCat.map(cat => 
                    <div 
                    onClick={() => this.props.handleClick(cat.sectionName)}
                    key={cat.sectionName} 
                    className="typeOfDish__list__item">{cat.sectionName}</div>
                    )}
                </Carousel>
            </div>
        );
    }
}

export default FoodKind;