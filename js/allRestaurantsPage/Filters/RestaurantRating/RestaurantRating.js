import React, { Component } from 'react';

class RestaurantRating extends Component {
    state = {
        stars: ''
    }

    ratingHandle = (e) => {
        console.log(e.target.dataset.id)
        this.setState({
            stars: e.target.dataset.id
        }, () => {
            this.props.restaurantRating(this.state.stars)
        })
    }

    render() {
        return (
            <div className="deliveryRating">
                <p className="deliveryRating__text">Restaurant ratings</p>
                <div className="stars" onClick={e => this.ratingHandle(e)}>
                <span className="fa fa-star" data-id="1"></span>
                <span className="fa fa-star" data-id="2"></span>
                <span className="fa fa-star" data-id="3"></span>
                <span className="fa fa-star" data-id="4"></span>
                <span className="fa fa-star" data-id="5"></span>
                </div>
            </div>
        );
    }
}

export default RestaurantRating;