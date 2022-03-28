import React, { useState } from 'react';

import ButtonComponent from '@common-components/ButtonComponent';

import LoginPopupComponent from './LoginPopupComponent';

const LoginComponent = () => {
	const [isPopupOpen, setPopupOpen] = useState(false);

	const closePopup = () => setPopupOpen(false);
	const saveData = (data) => console.warn({ data });

	return (
		<div className="login-component">
			<ButtonComponent onClick={() => setPopupOpen(true)}>Set usercode</ButtonComponent>
			{isPopupOpen && <LoginPopupComponent closePopup={closePopup} saveData={saveData} />}
		</div>
	);
};

export default LoginComponent;
