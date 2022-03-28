import React from 'react';

import FormComponent from '@common-components/FormComponent';
import ManagedFormInputComponent from '@common-components/ManagedFormInputComponent';
import FormSubmitComponent from '@common-components/FormSubmitComponent';

const INCOME_INPUT = 'income';
const STOCKS_INPUT = 'stocks';
const CRYPTO_INPUT = 'crypto';
const DEBT_INPUT = 'debt';
const SPANDING_INPUT = 'spanding';
const SAVINGS_INPUT = 'savings';

const EditBudgetReferenceComponent = () => {
	// load budget

	const formSubmit = (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);
		const requestData = Object.fromEntries(formData);

		console.warn({ requestData });
	};

	return (
		<FormComponent onSubmit={formSubmit}>
			<ManagedFormInputComponent
				type="number"
				value={0}
				label="Monthly income"
				name={INCOME_INPUT} />

			<ManagedFormInputComponent
				type="number"
				value={0}
				label="Stocks"
				name={STOCKS_INPUT} />

			<ManagedFormInputComponent
				type="number"
				value={0}
				label="Crypto"
				name={CRYPTO_INPUT} />

			<ManagedFormInputComponent
				type="number"
				value={0}
				label="Debt"
				name={DEBT_INPUT} />

			<ManagedFormInputComponent
				type="number"
				value={0}
				label="Spanding"
				name={SPANDING_INPUT} />

			<ManagedFormInputComponent
				type="number"
				value={0}
				label="Savings"
				name={SAVINGS_INPUT} />

			<FormSubmitComponent>
				Save
			</FormSubmitComponent>
		</FormComponent>
	);
};

export default EditBudgetReferenceComponent;
