import React, { Component } from 'react';

class OpenNow extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="openNow">
            <p className="openNow__text">Open now</p>
            <div className="openNow__btn">
                <label className="switch">
                    <input className="switch__input" type="checkbox" />
                    <span className="slider"></span>
                </label>
            </div>
        </div>
         );
    }
}
 
export default OpenNow;