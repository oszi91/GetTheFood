import React, { Component } from 'react';

class AddressHeader extends Component {

    render() {
        const {cursor, handleOpenAddressBar, addressTxt} = this.props;

        const cursorNotAllowed = cursor ? '' : 'nav__address__notAllowed';

        return (
            <div className="nav__address">
                <p
                    onClick={handleOpenAddressBar}
                    className={`nav__address__text ${cursorNotAllowed}`}
                >
                    {addressTxt}
                </p>
            </div>
        );
    }
}

export default AddressHeader;