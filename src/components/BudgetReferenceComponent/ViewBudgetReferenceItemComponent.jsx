import React from 'react';
import PropTypes from 'prop-types';

import { registry as ComponentRegistryComponent } from '@components/ContentRegistryComponent';

const ViewBudgetReferenceItemComponent = ({
	label,
	value,
}) => (
	<ComponentRegistryComponent key={label} type="text">
		<div className="view-budget-reference-item-component">
			<div className="view-budget-reference-item-component__label">
				{label}
			</div>
			<div className="view-budget-reference-item-component__value">
				{value}
			</div>
		</div>
	</ComponentRegistryComponent>
);

ViewBudgetReferenceItemComponent.propTypes = {
	label: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ViewBudgetReferenceItemComponent;
