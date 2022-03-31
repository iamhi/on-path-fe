import React from 'react';
import PropTypes from 'prop-types';

import FormComponent from '@common-components/FormComponent';
import ManagedFormInputComponent from '@common-components/ManagedFormInputComponent';
import FormSubmitComponent from '@common-components/FormSubmitComponent';
import PopupDisplayComponent from '@common-components/PopupDisplayComponent';

const USERCODE_INPUT = 'userCode';

const LoginPopupComponent = ({ closePopup, saveData }) => {
	const formSubmit = (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);
		const requestData = Object.fromEntries(formData);

		saveData(requestData);
		closePopup();
	};

	return (
		<PopupDisplayComponent backgroundClick={closePopup}>
			<FormComponent onSubmit={formSubmit}>
				<ManagedFormInputComponent
					placeholder="Usercode"
					label="Usercode"
					name={USERCODE_INPUT} />

				<FormSubmitComponent>
					Save
				</FormSubmitComponent>
			</FormComponent>
		</PopupDisplayComponent>
	);
};

LoginPopupComponent.propTypes = {
	closePopup: PropTypes.func,
	saveData: PropTypes.func,
};

export default LoginPopupComponent;
