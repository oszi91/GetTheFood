import React, { Component } from 'react';

class FreeDelivery extends Component {
    
    state = {
        isChecked: false
    }

    handleCheck = () => {

        this.setState({
            isChecked: !this.state.isChecked
        })
        this.props.freeDeliveryHandle(this.state.isChecked)
    }

    render() {
        return (
            <div className="freeDelivery">
                <p className="freeDelivery__text">Free delivery </p>
                <div className="freeDelivery__btn">
                    <label className="switch">
                        <input 
                        className="switch__input" 
                        type="checkbox"
                        value={this.state.isChecked}
                        onClick={this.handleCheck}
                        />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>
        );
    }
}

export default FreeDelivery;