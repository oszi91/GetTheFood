import React, { Component } from 'react';

class InputCheckout extends Component {

    static defaultProps = {
        type: 'text'
    }

    render() {
        const { label, htmlTxt, value, isDisabled, 
            handleFunction, type, err } = this.props;

        return (
            <div className="checkout__form__inputsContainer__item">
                <label className="checkout__form__inputsContainer__item__label" htmlFor={label}>{htmlTxt}:</label>
                <input
                    className="checkout__form__inputsContainer__item__input"
                    type={type}
                    id={label}
                    name={label}
                    value={value}
                    disabled={isDisabled}
                    onChange={handleFunction}
                />
                {err && <p className="checkout__form__inputsContainer__item__error">{err}</p>}
            </div>
        );
    }
}

export default InputCheckout;