import React, { useEffect, useState } from 'react';

import FormComponent from '@common-components/FormComponent';
import ManagedFormInputComponent from '@common-components/ManagedFormInputComponent';
import FormSubmitComponent from '@common-components/FormSubmitComponent';
import { getBudgetInput, updateBudgetInput } from '@services/backend/budgetInputRequests';

const INCOME_INPUT = 'income';
const STOCKS_INPUT = 'stocks';
const CRYPTO_INPUT = 'crypto';
const DEBT_INPUT = 'debt';
const SPENDING_INPUT = 'spending';
const SAVINGS_INPUT = 'savings';

const EditBudgetReferenceComponent = () => {
	const [budgetInput, setBudgetInput] = useState({});

	useEffect(() => getBudgetInput().then((data) => setBudgetInput(data)).catch((err) => console.error({ err })), []);

	const formSubmit = (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);
		const requestData = Object.fromEntries(formData);

		updateBudgetInput(requestData);
	};

	if (!budgetInput.uuid) {
		return (
			<div>
				Loading
			</div>
		);
	}

	return (
		<FormComponent onSubmit={formSubmit}>
			<ManagedFormInputComponent
				type="number"
				value={budgetInput[INCOME_INPUT]}
				label="Monthly income"
				name={INCOME_INPUT} />

			<ManagedFormInputComponent
				type="number"
				value={budgetInput[STOCKS_INPUT]}
				label="Stocks"
				name={STOCKS_INPUT} />

			<ManagedFormInputComponent
				type="number"
				value={budgetInput[CRYPTO_INPUT]}
				label="Crypto"
				name={CRYPTO_INPUT} />

			<ManagedFormInputComponent
				type="number"
				value={budgetInput[DEBT_INPUT]}
				label="Debt"
				name={DEBT_INPUT} />

			<ManagedFormInputComponent
				type="number"
				value={budgetInput[SPENDING_INPUT]}
				label="Spending"
				name={SPENDING_INPUT} />

			<ManagedFormInputComponent
				type="number"
				value={budgetInput[SAVINGS_INPUT]}
				label="Savings"
				name={SAVINGS_INPUT} />

			<FormSubmitComponent>
				Save
			</FormSubmitComponent>
		</FormComponent>
	);
};

export default EditBudgetReferenceComponent;
