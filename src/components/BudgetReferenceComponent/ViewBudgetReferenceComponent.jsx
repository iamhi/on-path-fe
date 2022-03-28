import React from 'react';

import { registry as ComponentRegistryComponent } from '@components/ContentRegistryComponent';

const ViewBudgetReferenceComponent = () => {
	console.warn('Viewing ref');
	// fetch budget

	return (
		<div className="view-budget-reference-component">
			<ComponentRegistryComponent key="budget-test-1" type="text">
				Budget test:

				<b> 12</b>
			</ComponentRegistryComponent>

			<ComponentRegistryComponent key="budget-test-1" type="text">
				Budget test:

				<b> 35</b>
			</ComponentRegistryComponent>
			Sleepy view
		</div>
	);
};

export default ViewBudgetReferenceComponent;
