import React, { Component } from 'react';

import scrollToTop from '../../../utils/general/scrollToTop';

import ConfirmOrder from './ConfimOrder/ConfirmOrder';
import InputCheckout from './InputCheckout/InputCheckout';
import { Validation } from './Validation/Validation';

class Checkout extends Component {
	state = {
		buildingNumber: '',
		apartmentNumber: '',
		floor: '',
		gateCode: '',
		addNote: '',
		name: '',
		surname: '',
		email: '',
		phone: '',
		errorsList: {},
		confirmOrder: false,
	};

	handleInput = e => {
		const value = e.target.value;
		const name = e.target.name;

		this.setState({
			[name]: value,
		});
	};

	handleSubmit = e => {
		e.preventDefault();

		const { buildingNumber, apartmentNumber, name, surname, email, phone } =
			this.state;

		const dataToValid = {
			buildingNumber,
			apartmentNumber,
			name,
			surname,
			email,
			phone,
		};

		if (!Object.keys(Validation(dataToValid)).length) {
			this.setState({
				confirmOrder: true,
			});
			this.props.clearOrder();
		} else {
			this.setState({
				errorsList: Validation(dataToValid),
			});
		}
	};

	render() {
		const {
			errorsList,
			buildingNumber,
			apartmentNumber,
			floor,
			gateCode,
			addNote,
			name,
			surname,
			email,
			phone,
			confirmOrder,
		} = this.state;
		const { address, averageDeliveryTime } = this.props;
		return (
			<div className="checkoutContainer">
				{confirmOrder && (
					<ConfirmOrder
						handleOrderProgress={this.handleOrderProgress}
						averageDeliveryTime={averageDeliveryTime}
					/>
				)}
				<div className="checkout">
					<h1 className="checkout__header">CHECKOUT</h1>
					<form className="checkout__form" onSubmit={this.handleSubmit}>
						<div className="checkout__form__header">
							<h3 className="checkout__form__header">Address info</h3>
						</div>
						<div className="checkout__form__inputsContainer">
							<InputCheckout
								label={'street'}
								htmlTxt={'Street'}
								value={address.street}
								isDisabled={true}
							/>
							<InputCheckout
								label={'buildingNumber'}
								htmlTxt={'Building number'}
								value={buildingNumber}
								handleFunction={this.handleInput}
								err={errorsList.buildingNumber}
							/>
							<InputCheckout
								label={'apartmentNumber'}
								htmlTxt={'Apartment number'}
								value={apartmentNumber}
								handleFunction={this.handleInput}
								err={errorsList.apartmentNumber}
							/>
							<InputCheckout
								label={'zipCode'}
								htmlTxt={'Zip code'}
								value={address.zipCode}
								isDisabled={true}
							/>
							<InputCheckout
								label={'city'}
								htmlTxt={'City'}
								value={address.city}
								isDisabled={true}
							/>
							<InputCheckout
								label={'floor'}
								htmlTxt={'Floor (optional)'}
								value={floor}
								handleFunction={this.handleInput}
							/>
							<InputCheckout
								label={'gateCode'}
								htmlTxt={'Gate code (optional)'}
								value={gateCode}
								handleFunction={this.handleInput}
							/>
							<InputCheckout
								label={'addNote'}
								htmlTxt={'Add note (optional)'}
								value={addNote}
								handleFunction={this.handleInput}
							/>
						</div>
						<div className="checkout__form__header">
							<h3 className="checkout__form__header">Personal info</h3>
						</div>
						<div className="checkout__form__inputsContainer">
							<InputCheckout
								label={'name'}
								htmlTxt={'Name'}
								value={name}
								handleFunction={this.handleInput}
								err={errorsList.name}
							/>
							<InputCheckout
								label={'surname'}
								htmlTxt={'Surname'}
								value={surname}
								handleFunction={this.handleInput}
								err={errorsList.surname}
							/>
							<InputCheckout
								label={'email'}
								htmlTxt={'Email address'}
								value={email}
								handleFunction={this.handleInput}
								type={'email'}
								err={errorsList.email}
							/>
							<InputCheckout
								label={'phone'}
								htmlTxt={'Phone number'}
								value={phone}
								handleFunction={this.handleInput}
								type={'tel'}
								err={errorsList.phone}
							/>
						</div>
						<button
							onClick={() => {
								scrollToTop();
							}}
							className="dishOrder"
						>
							Confirm and Order
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Checkout;
