import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import SearchBarAddress from './SearchBarAddress/SearchBarAddress';

class StartPage extends Component {

   
    render() {
        return (
            <div className="startPage">
                <div className="searchPlace">
                    <h1 className="searchPlace__text">Order your favourite food!</h1>
                    <h2 className="searchPlace__text searchPlace__text--smaller">Enter the address and start</h2>
                    <SearchBarAddress
                    data={this.props.data}
                    handleAddress={this.props.handleAddress}
                    />
                </div>
            </div>
        );
    }
}

export default StartPage;