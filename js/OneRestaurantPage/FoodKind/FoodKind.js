import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class FoodKind extends Component {

    render() {

        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 8,
            },
            tablet: {
                breakpoint: { max: 1024, min: 767 },
                items: 5
            },
            mobile: {
                breakpoint: { max: 767, min: 0 },
                items: 2
            }
        };

        const {foodCat, handleClick} = this.props;
       
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
                    {foodCat.map(cat => 
                    <div 
                    onClick={() => handleClick(cat.sectionName)}
                    key={cat.sectionName} 
                    className="typeOfDish__list__item">{cat.sectionName}</div>
                    )}
                </Carousel>
            </div>
        );
    }
}

export default FoodKind;