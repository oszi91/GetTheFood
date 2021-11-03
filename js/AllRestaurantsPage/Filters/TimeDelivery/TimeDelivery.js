import React, { Component } from 'react';

class TimeDelivery extends Component {
	state = {
		option: 'time_show_all',
	};

	radioChange = e => {
		this.setState(
			{
				option: e.target.value,
			},
			() => {
				this.props.deliveryTimeHandle(this.state.option);
			}
		);
	};

	render() {
		const { option } = this.state;

		return (
			<div className="timeDelivery">
				<form className="timeDelivery__form">
					<p className="timeDelivery__form__text">Delivery time</p>
					<div className="timeDelivery__form__radio">
						<input
							type="radio"
							id="time_show_all"
							name="time"
							value="time_show_all"
							checked={option === 'time_show_all'}
							onChange={e => this.radioChange(e)}
						/>
						<label
							className="timeDelivery__form__radio__label"
							htmlFor="time_show_all"
						>
							{' '}
							Show all
						</label>
					</div>
					<div className="timeDelivery__form__radio">
						<input
							type="radio"
							id="under30min"
							name="time"
							value="under30min"
							checked={option === 'under30min'}
							onChange={e => this.radioChange(e)}
						/>
						<label
							className="timeDelivery__form__radio__label"
							htmlFor="under30min"
						>
							{' '}
							Up to 30 min
						</label>
					</div>
					<div className="timeDelivery__form__radio">
						<input
							type="radio"
							id="under1h"
							name="time"
							value="under1h"
							checked={option === 'under1h'}
							onChange={e => this.radioChange(e)}
						/>
						<label
							className="timeDelivery__form__radio__label"
							htmlFor="under1h"
						>
							{' '}
							Up to 1 hour
						</label>
					</div>
				</form>
			</div>
		);
	}
}

export default TimeDelivery;
