import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class StartPage extends Component {

    state = {
        searchAddress: '',
        addressListData: { ...this.props.data },
        searchScore: 0
    }

    handleInput = e => {
        this.setState({
            searchAddress: e.target.value
        })
    }

    saveAddress = (address) => {
        this.props.handleAddress(address);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchScore !== this.state.searchScore) {
            this.setState({
                searchScore: this.list.children.length
            })
        }
    }

    render() {

        const { searchAddress, addressListData, searchScore } = this.state;

        const addressList =
            addressListData.restaurants
                .map(res => res.deliveryAddress
                    .map(res => res))
                .filter((res, i, addressList) => addressList.findIndex(
                    r => (r.street === res.street)) === i)
                .map(res => res
                    .filter(res => res.street.toLowerCase().includes(this.state.searchAddress.toLowerCase()))
                    .map(res =>
                    (
                        <li onClick={() => this.saveAddress(res)} key={res.street} className="searchPlace__addressList__item"><Link to="/restaurants">{res.street}, {res.zipCode} {res.city}</Link></li>
                    )
                    ))

        const inputIsActive = searchAddress ? 'searchPlace__form__input--active' : '';

        return (
            <div className="startPage">
                <div className="searchPlace">
                    <h1 className="searchPlace__text">Order your favourite food!</h1>
                    <h2 className="searchPlace__text searchPlace__text--smaller">Enter the address and start</h2>
                    <form className="searchPlace__form">
                        <input
                            className={`searchPlace__form__input ${inputIsActive}`}
                            type="text"
                            value={this.state.searchAddress}
                            onChange={this.handleInput}
                        />
                        <div className="searchPlace__form__icon"><i className="fas fa-search"></i></div>
                        <ul className="searchPlace__addressList" ref={list => this.list = list}>
                            {this.state.searchAddress && addressList}
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}

export default StartPage;