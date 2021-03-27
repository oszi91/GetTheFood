import React, { Component } from 'react';

class RestaurantRating extends Component {
    state = {
        stars: '',
        select: 0
    }

    ratingHandle = (e) => {
        const stars = e.target.dataset.id
        this.setState({
            stars
        }, () => {
            this.props.restaurantRating(this.state.stars)
        })
    }

    render() {

        const isActive = ''

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