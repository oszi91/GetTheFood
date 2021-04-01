import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Logo extends Component {

    render() {
        return (
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
        );
    }
}

export default Logo;