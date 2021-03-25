import React, { Component } from 'react';

class Checkout extends Component {
    state = {
        buildingNumber: '',
        apartmentNumber: '',
        floor: '',
        gateCode: '',
        addNote: '',
        name: '',
        surname: '',
        email: '',
        phone: '',
        errorsList: [],
        confirmText: ''
    }

    handleInput = e => {
        const value = e.target.value;
        const name = e.target.name;


        this.setState({
            [name]: value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        let errorsList = {};

        const { buildingNumber, apartmentNumber,
            name, surname, email, phone } = this.state;


        if (buildingNumber.length <= 0) {
            errorsList = { ...errorsList, buildingNumber: `Field can't be empty` }
        }

        if (apartmentNumber.length <= 0) {
            errorsList = { ...errorsList, apartmentNumber: `Field can't be empty` }
        }

        if (name.length < 2) {
            errorsList = { ...errorsList, name: `Field must contain min. 2 characters` }
        }

        if (surname.length < 2) {
            errorsList = { ...errorsList, surname: `Field must contain min. 2 characters` }
        }

        if (email.length < 3 && email.indexOf("@") < 0) {
            errorsList = { ...errorsList, email: `Field must contain '@' and min. 3 characters` }
        }

        if (phone.length < 8 && isNaN(phone)) {
            errorsList = { ...errorsList, email: `Field must contain min. 8 characters (numbers)` }
        }

        this.setState({
            errorsList
        })

        if(!errorsList){
            this.setState({
                confirmText: 'Ok'
            })
        }
    }

    render() {

        const { errorsList } = this.state;
        const { address } = this.props;

        return (
            <div className="checkoutContainer">
                <div className="checkout">
                    <h1 className="checkout__header">CHECKOUT</h1>
                    <form className="checkout__form" onSubmit={this.handleSubmit}>
                        <div className="checkout__form__header">
                            <h3 className="checkout__form__header">Address info</h3>
                        </div>
                        <div className="checkout__form__inputsContainer">
                            <div className="checkout__form__inputsContainer__item">
                                <label className="checkout__form__inputsContainer__item__label" htmlFor="street">Street:</label>
                                <input
                                    className="checkout__form__inputsContainer__item__input"
                                    type="text"
                                    id="street"
                                    name="street"
                                    value={address.street}
                                    disabled
                                />
                                <p className="checkout__form__inputsContainer__item__error">{errorsList.street}</p>
                            </div>
                            <div className="checkout__form__inputsContainer__item">
                                <label className="checkout__form__inputsContainer__item__label" htmlFor="buildingNumber">Building number:</label>
                                <input
                                    className="checkout__form__inputsContainer__item__input"
                                    type="text"
                                    id="buildingNumber"
                                    name="buildingNumber"
                                    value={this.state.buildingNumber}
                                    onChange={this.handleInput}
                                />
                                <p className="checkout__form__inputsContainer__item__error">{errorsList.buildingNumber}</p>
                            </div>
                            <div className="checkout__form__inputsContainer__item">
                                <label className="checkout__form__inputsContainer__item__label" htmlFor="apartmentNumber">Apartment number:</label>
                                <input
                                    className="checkout__form__inputsContainer__item__input"
                                    type="text"
                                    id="apartmentNumber"
                                    name="apartmentNumber"
                                    value={this.state.apartmentNumber}
                                    onChange={this.handleInput}
                                />
                                <p className="checkout__form__inputsContainer__item__error">{errorsList.buildingNumber}</p>
                            </div>
                            <div className="checkout__form__inputsContainer__item">
                                <label className="checkout__form__inputsContainer__item__label" htmlFor="zipCode">Zip code:</label>
                                <input
                                    className="checkout__form__inputsContainer__item__input"
                                    type="text"
                                    id="zipCode"
                                    name="zipCode"
                                    value={address.zipCode}
                                    disabled
                                />
                                <p className="checkout__form__inputsContainer__item__error">{errorsList.zipCode}</p>
                            </div>
                            <div className="checkout__form__inputsContainer__item">
                                <label className="checkout__form__inputsContainer__item__label" htmlFor="city">City:</label>
                                <input
                                    className="checkout__form__inputsContainer__item__input"
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={address.city}
                                    disabled
                                />
                                <p className="checkout__form__inputsContainer__item__error">{errorsList.emptyField}</p>
                            </div>
                            <div className="checkout__form__inputsContainer__item">
                                <label className="checkout__form__inputsContainer__item__label" htmlFor="floor">Floor (optional):</label>
                                <input
                                    className="checkout__form__inputsContainer__item__input"
                                    type="text"
                                    id="floor"
                                    name="floor"
                                    value={this.state.floor}
                                    onChange={this.handleInput}
                                />
                                <p className="checkout__form__inputsContainer__item__error">{errorsList.street}</p>
                            </div>
                            <div className="checkout__form__inputsContainer__item">
                                <label className="checkout__form__inputsContainer__item__label" htmlFor="gateCode">Gate code (optional):</label>
                                <input
                                    className="checkout__form__inputsContainer__item__input"
                                    type="text"
                                    id="gateCode"
                                    name="gateCode"
                                    value={this.state.gateCode}
                                    onChange={this.handleInput}
                                />
                                <p className="checkout__form__inputsContainer__item__error">{errorsList.street}</p>
                            </div>
                            <div className="checkout__form__inputsContainer__item">
                                <label className="checkout__form__inputsContainer__item__label" htmlFor="addNote">Add note (optional):</label>
                                <input
                                    className="checkout__form__inputsContainer__item__input"
                                    type="text"
                                    id="addNote"
                                    name="addNote"
                                    value={this.state.addNote}
                                    onChange={this.handleInput}
                                />
                                <p className="checkout__form__inputsContainer__item__error">{errorsList.street}</p>
                            </div>
                        </div>
                        <div className="checkout__form__header">
                            <h3 className="checkout__form__header">Personal info</h3>
                        </div>
                        <div className="checkout__form__inputsContainer">
                            <div className="checkout__form__inputsContainer__item">
                                <label className="checkout__form__inputsContainer__item__label" htmlFor="name">Name:</label>
                                <input
                                    className="checkout__form__inputsContainer__item__input"
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleInput}
                                />
                                <p className="checkout__form__inputsContainer__item__error">{errorsList.street}</p>
                            </div>
                            <div className="checkout__form__inputsContainer__item">
                                <label className="checkout__form__inputsContainer__item__label" htmlFor="surname">Surname:</label>
                                <input
                                    className="checkout__form__inputsContainer__item__input"
                                    type="text"
                                    id="surname"
                                    name="surname"
                                    value={this.state.surname}
                                    onChange={this.handleInput}
                                />
                                <p className="checkout__form__inputsContainer__item__error">{errorsList.street}</p>
                            </div>
                            <div className="checkout__form__inputsContainer__item">
                                <label className="checkout__form__inputsContainer__item__label" htmlFor="email">Email address:</label>
                                <input
                                    className="checkout__form__inputsContainer__item__input"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleInput}
                                />
                                <p className="checkout__form__inputsContainer__item__error">{errorsList.street}</p>
                            </div>
                            <div className="checkout__form__inputsContainer__item">
                                <label className="checkout__form__inputsContainer__item__label" htmlFor="phone">Phone number:</label>
                                <input
                                    className="checkout__form__inputsContainer__item__input"
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={this.state.phone}
                                    onChange={this.handleInput}
                                />
                                <p className="checkout__form__inputsContainer__item__error">{errorsList.street}</p>
                            </div>
                        </div>
                        <button className="dishOrder">Confirm and Order</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Checkout;