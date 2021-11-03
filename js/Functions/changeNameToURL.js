const changeNameToURL = str =>
	str
		.replace(/\s/g, '-')
		.replace(/[&\s/\\#,+()$~%.'":*?<>{}]/g, '')
		.toLowerCase();

export default changeNameToURL;
