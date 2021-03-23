import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class SearchBarAddress extends Component {
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
        const { handleCloseAddressBar } = this.props;

        const addressList =
            addressListData.restaurants
                .map(res => res.deliveryAddress
                    .map(res => res))
                .filter((res, i, addressList) => addressList.findIndex(
                    r => (r.street === res.street)) === i)
                .map(res => res
                    .filter(res => res.street.toLowerCase().includes(this.state.searchAddress.toLowerCase()) ||
                        res.zipCode.toLowerCase().includes(this.state.searchAddress.toLowerCase()) ||
                        res.city.toLowerCase().includes(this.state.searchAddress.toLowerCase())
                    )
                    .map(res =>
                    (<Link to="/restaurants">
                        <li onClick={() => { this.saveAddress(res); handleCloseAddressBar ? handleCloseAddressBar() : null }} key={res.street} className="searchPlace__addressList__item">{res.street}, {res.zipCode} {res.city}</li>
                    </Link>
                    )
                    ))

        const inputIsActive = searchAddress ? 'searchPlace__form__input--active' : '';

        return (
            <form className="searchPlace__form">
                <input
                    autoFocus
                    placeholder={'e.g. Emaliowa, 02-295 Warszawa'}
                    className={`searchPlace__form__input ${inputIsActive}`}
                    type="text"
                    value={this.state.searchAddress}
                    onChange={this.handleInput}
                />
                <div className="searchPlace__form__icon"><i className="fas fa-search"></i></div>
                <ul className="searchPlace__addressList" ref={list => this.list = list}>
                    {searchAddress && addressList}
                </ul>
            </form>
        );
    }
}

export default SearchBarAddress;