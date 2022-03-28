import React, { useState } from 'react';

import { registry as ComponentRegistryComponent } from '@components/ContentRegistryComponent';
import ButtonComponent from '@common-components/ButtonComponent';

import EditBudgetReferenceComponent from './EditBudgetReferenceComponent';
import ViewBudgetReferenceComponent from './ViewBudgetReferenceComponent';

const BudgetReferenceComponent = () => {
	const [editting, setEditting] = useState(false);

	return (
		<div className="budget-reference-component">
			<ComponentRegistryComponent type="title" key="budget-reference-title" content="Budget reference" />

			<div className="budget-reference-component--control-buttons">
				<ButtonComponent onClick={() => setEditting(!editting)}>
					Edit
				</ButtonComponent>
			</div>

			<div className="budget-reference-component__content">
				{editting ? <EditBudgetReferenceComponent /> : <ViewBudgetReferenceComponent />}
			</div>
		</div>
	);
};

export default BudgetReferenceComponent;
