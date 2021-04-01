import React, { Component } from 'react';

class OpenNow extends Component {

    state = {
        isChecked: false
    }

    handleCheck = () => {
       
        this.setState({
            isChecked: !this.state.isChecked
        }, () =>  this.props.openNowHandle(this.state.isChecked))
       
    }

    render() { 
        const {isChecked} = this.state;

        return ( 
            <div className="openNow">
            <p className="openNow__text">Open now</p>
            <div className="openNow__btn">
                <label className="switch">
                    <input 
                    className="switch__input" 
                    type="checkbox" 
                    value={isChecked}
                     onClick={this.handleCheck}
                    />
                    <span className="slider"></span>
                </label>
            </div>
        </div>
         );
    }
}
 
export default OpenNow;