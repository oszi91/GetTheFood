const hasNumber = txt => /\d/.test(txt);

export const Validation = data => {
	let errorsList={}

	if (data.buildingNumber.length <= 0) {
		errorsList = { ...errorsList, buildingNumber: `Field can't be empty` };
	}

	if (data.apartmentNumber.length <= 0) {
		errorsList = { ...errorsList, apartmentNumber: `Field can't be empty` };
	}

	if (data.name.length < 2 || hasNumber(data.name)) {
		errorsList = {
			...errorsList,
			name: `Field must contain min. 2 characters (cannot be numbers)`,
		};
	}

	if (data.surname.length < 2 || hasNumber(data.surname)) {
		errorsList = {
			...errorsList,
			surname: `Field must contain min. 2 characters (cannot be numbers)`,
		};
	}

	if (data.email.length < 5 && data.email.indexOf('@') < 0) {
		errorsList = {
			...errorsList,
			email: `Field must contain '@' and min. 5 characters`,
		};
	}

	if (data.phone.toString().length < 8 || isNaN(data.phone)) {
		errorsList = {
			...errorsList,
			phone: `Field must contain min. 8 characters (numbers)`,
		};
	}

	return errorsList;
};
