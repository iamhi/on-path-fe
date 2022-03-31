import React, { useState } from 'react';

import ButtonComponent from '@common-components/ButtonComponent';
import { setUserCode } from '@services/userCodeHandler';

import LoginPopupComponent from './LoginPopupComponent';

const LoginComponent = () => {
	const [isPopupOpen, setPopupOpen] = useState(false);

	const closePopup = () => setPopupOpen(false);
	const saveData = ({ userCode }) => setUserCode(userCode);

	return (
		<div className="login-component">
			<ButtonComponent onClick={() => setPopupOpen(true)}>Set usercode</ButtonComponent>
			{isPopupOpen && <LoginPopupComponent closePopup={closePopup} saveData={saveData} />}
		</div>
	);
};

export default LoginComponent;
