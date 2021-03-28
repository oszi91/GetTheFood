import React, { Component } from 'react';

class RestaurantRating extends Component {
    state = {
        stars: ''
    }

    ratingHandle = (e) => {
        const allStars = e.target.parentNode.children;
        const activeStars = document.querySelectorAll('.stars__item__active');
        const stars = e.target.dataset.id;

        this.setState({
            stars
        }, () => {
            this.props.restaurantRating(this.state.stars)
        })

        activeStars.forEach(s => s.classList.remove('stars__item__active'))

        for(let i = 0; i<=stars-1; i++){
            allStars[allStars.length-1 - i].className = 'stars__item stars__item__active'
        }
    }

    render() {
        return (
            <div className="deliveryRating">
                <p className="deliveryRating__text">Restaurant ratings</p>
                <ul className="list-inline stars" onClick={e => this.ratingHandle(e)}>
                    <li className="stars__item" data-id="5"><span className="fa fa-star"></span></li>
                    <li className="stars__item" data-id="4"><span className="fa fa-star"></span></li>
                    <li className="stars__item" data-id="3"><span className="fa fa-star"></span></li>
                    <li className="stars__item" data-id="2"><span className="fa fa-star"></span></li>
                    <li className="stars__item" data-id="1"><span className="fa fa-star"></span></li>
                </ul>
            </div>
        );
    }
}

export default RestaurantRating;