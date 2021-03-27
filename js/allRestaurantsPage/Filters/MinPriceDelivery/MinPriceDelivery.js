import React, { Component } from 'react';

class MinPriceDelivery extends Component {

    state = {
        option: 'price_show_all'
    }

    radioChange = (e) => {
        this.setState({
            option: e.target.value
        }, () => {
            this.props.minCostDeliveryHandle(this.state.option)
        })
    }

    render() {
        return (
            <div className="minPriceDelivery">
                <form className="minPriceDelivery__form">
                    <p className="minPriceDelivery__form__text">Min. cost of delivery</p>
                    <div className="minPriceDelivery__form__radio">
                        <input
                            type="radio"
                            id="price_show_all"
                            name="price"
                            value="price_show_all"
                            checked={this.state.option === "price_show_all"}
                            onChange={e => this.radioChange(e)}
                        />
                        <label className="minPriceDelivery__form__radio__label"
                            htmlFor="price_show_all"> Show all</label>
                    </div>
                    <div className="minPriceDelivery__form__radio">
                        <input
                            type="radio"
                            id="under30PLN"
                            name="price"
                            value="under30PLN"
                            checked={this.state.option === "under30PLN"}
                            onChange={e => this.radioChange(e)}
                        />
                        <label className="minPriceDelivery__form__radio__label"
                            htmlFor="under30PLN"> less than 30 PLN</label>
                    </div>
                    <div className="minPriceDelivery__form__radio">
                        <input
                            type="radio"
                            id="under60PLN"
                            name="price"
                            value="under60PLN"
                            checked={this.state.option === "under60PLN"}
                            onChange={e => this.radioChange(e)}
                        />
                        <label
                            className="minPriceDelivery__form__radio__label"
                            htmlFor="under60PLN"> less than 60 PLN</label>
                    </div>
                </form>
            </div>
        );
    }
}

export default MinPriceDelivery;