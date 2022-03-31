import React, { useEffect, useState } from 'react';

import { getBudgetInput } from '@services/backend/budgetInputRequests';

import ViewBudgetReferenceItemComponent from './ViewBudgetReferenceItemComponent';

const ViewBudgetReferenceComponent = () => {
	const [dispayData, setDisplayData] = useState({});
	console.warn('Viewing ref');
	// fetch budget
	useEffect(() => getBudgetInput().then((data) => setDisplayData(data)).catch((err) => console.warn({ err })), []);

	const itemComponents = Object.entries(dispayData).map(([key, value]) => (
		<ViewBudgetReferenceItemComponent key={key} label={key} value={value} />
	));

	return (
		<div className="view-budget-reference-component">
			{itemComponents}
		</div>
	);
};

export default ViewBudgetReferenceComponent;
