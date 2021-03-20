import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Header extends Component {
    
    render() {
        return (
            <>
            <div className="header-background"></div>
            <header className="header">
                <div className="container">
                    <nav className="nav">
                        <div className="nav__logo">
                            <a href="/">
                                <p className="nav__logo__text">
                                    Get
                                <span className="nav__logo__text--color-one">The</span>
                                    <span className="nav__logo__text--color-two">Food!</span>
                                    <i className="fas fa-hamburger"></i>
                                </p>
                            </a>
                        </div>
                        <div className="nav__address">
                            <p className="nav__address__text">
                                <Link to="./">Krakowska 5/30, Warsaw</Link>
                            </p>
                        </div>
                        <div className="nav__basket">
                            <Link to="./">
                                <i className="fas fa-shopping-cart"></i>
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>
            </>
        );
    }
}

export default Header;