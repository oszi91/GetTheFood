import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import SearchBarAddress from './../StartPage/SearchBarAddress/SearchBarAddress';

class Header extends Component {

    state = {
        isOpen: false
    }

    handleOpenAddressBar = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handleCloseAddressBar = () => {
        this.setState({
            isOpen: false
        })
    }

    render() {
        const { address, showSearchBar } = this.props;

        const addressToHeader = `${address.street}, ${address.zipCode} ${address.city}`;
        const addressTxt =  address ?  addressToHeader : 'Enter your address';

        return (
            <>
                <div className="header-background"></div>
                <header className="header">
                    <div className="container">
                        <nav className="nav">
                            <div className="nav__logo">
                                <Link to="/">
                                    <p className="nav__logo__text">
                                        Get
                                <span className="nav__logo__text--color-one">The</span>
                                        <span className="nav__logo__text--color-two">Food!</span>
                                        <i className="fas fa-hamburger"></i>
                                    </p>
                                </Link>
                            </div>
                            <div className="nav__address">
                                <p
                                    onClick={this.handleOpenAddressBar}
                                    className="nav__address__text">
                                    {addressTxt}
                                </p>
                            </div>
                            <div className="nav__basket">
                                <Link to="./">
                                    <i className="fas fa-shopping-cart"></i>
                                </Link>
                            </div>
                        </nav>
                    </div>
                    {this.state.isOpen && <div className="searchBarAddress__container">
                        <div className="searchBarAddress">
                            <div onClick={this.handleCloseAddressBar} className="searchBarAddress__close"><i className="fas fa-times-circle"></i></div>
                            <SearchBarAddress
                                showSearchBar={showSearchBar}
                                data={this.props.data}
                                handleAddress={this.props.handleAddress}
                                handleCloseAddressBar={this.handleCloseAddressBar}
                            />
                        </div>
                    </div>}
                </header>
            </>
        );
    }
}

export default Header;