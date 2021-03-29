import React, { Component } from 'react';

class SearchRestaurant extends Component {

    state = {
        searchVal: '',
        sortVal: ''
    };

    handleInput = e => {
        let search = e.target.value;
        this.setState(
            {
                searchVal: search
            }, () => {
                this.props.filterSearchRestaurant(search)
            })
    }

    handleSelect = e => {
        let sort = e.target.value;
        this.setState(
            {
                sortVal: sort
            }, () => {
                this.props.sortRestaurants(sort)
            })
    }

    render() {
        return (
            <>
                <h2 className="allRestaurants__header">Find your favorite restaurant</h2>
                <div className="allRestaurants__search">
                    <input className="allRestaurants__search__input"
                        value={this.state.searchVal}
                        onChange={this.handleInput}
                        type="text"
                        placeholder="the name of the restaurant"
                    />
                    <div onClick={() => this.props.handleMobileFilters(true)} className="allRestaurants__search__filters">
                        <i className="fas fa-sliders-h"></i>
                    </div>
                    <div className="allRestaurants__search__sort">
                        <label className="allRestaurants__search__sort__label" htmlFor="sort">Sort:</label>
                        <select
                            className="allRestaurants__search__sort__select"
                            name="sort"
                            value={this.state.sortVal}
                            onChange={this.handleSelect}
                        >
                            <option value="alphabetically">Alphabetically</option>
                            <option value="min_order_amount">Min. order amount</option>
                            <option value="delivery_time">Delivery time</option>
                            <option value="delivery_costs">Delivery costs</option>
                            <option value="rating">Rating</option>
                        </select>
                    </div>
                </div>
            </>
        );
    }
}

export default SearchRestaurant;