import React, { Component } from 'react';
import SearchBarAddress from './../StartPage/SearchBarAddress/SearchBarAddress';
import AddressHeader from './AddressHeader/AddressHeader';
import AddressHeaderMobile from './AddressHeaderMobile/AddressHeaderMobile';
import Logo from './Logo/Logo';

class Header extends Component {

    state = {
        isOpen: false,
        headerTop: true,
        cursor: true
    }

    componentDidMount() {
        let prevPosition = window.pageYOffset;
        document.addEventListener('scroll', () => {
            let currentPosition = window.pageYOffset;
            if (prevPosition > currentPosition) {
                this.setState({
                    headerTop: true
                })
            } else {
                this.setState({
                    headerTop: false
                })
            }
            prevPosition = currentPosition;
        });
    }

    handleCursor = () => {
        const blockChangeAddress = window.location.hash === '#/' || window.location.hash === '#/restaurants';

        if (blockChangeAddress) {
            this.setState({
                cursor: true
            })
        } else {
            this.setState({
                cursor: false
            })
        }
    }

    handleOpenAddressBar = () => {
        if (this.state.cursor) {
            this.setState({
                isOpen: !this.state.isOpen
            })
        }
    }

    handleCloseAddressBar = () => {
        this.setState({
            isOpen: false
        })
    }

    render() {
        const { address, showSearchBar, data, handleAddress } = this.props;
        const { headerTop, cursor, isOpen } = this.state;

        const addressToHeader = `${address.street}, ${address.zipCode} ${address.city}`;
        const addressTxt = address ? addressToHeader : 'Enter your address';

        return (
            <>
                <header
                    className={`header ${headerTop ? '' : 'header__hide'}`}
                    onMouseEnter={this.handleCursor}
                    onTouchStartCapture={this.handleCursor}
                >
                    <div className="container">
                        <nav className="nav">
                            <Logo />
                            <AddressHeader
                                cursor={cursor}
                                handleOpenAddressBar={this.handleOpenAddressBar}
                                addressTxt={addressTxt}
                            />
                            <AddressHeaderMobile
                                address={address}
                                handleOpenAddressBar={this.handleOpenAddressBar}
                            />
                            <div className="nav__empty">
                            </div>
                        </nav>
                    </div>
                    {isOpen && <div className="searchBarAddress__container">
                        <div className="searchBarAddress">
                            <div
                                onClick={this.handleCloseAddressBar}
                                className="searchBarAddress__close">
                                <i className="fas fa-times-circle"></i>
                            </div>
                            <SearchBarAddress
                                showSearchBar={showSearchBar}
                                data={data}
                                handleAddress={handleAddress}
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