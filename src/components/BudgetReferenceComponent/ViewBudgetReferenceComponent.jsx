import React, { useEffect, useState } from 'react';

import { getViewContentRequest } from '@services/backend/viewContentRequests';
import { registry as ComponentRegistryComponent } from '@components/ContentRegistryComponent';

// import ViewBudgetReferenceItemComponent from './ViewBudgetReferenceItemComponent';

const ViewBudgetReferenceComponent = () => {
	const [contentData, setContentData] = useState({ items: [] });

	useEffect(() => getViewContentRequest('ReferenceView')
		.then((data) => setContentData(data)).catch((err) => console.warn({ err })), []);

	return (
		<div className="view-budget-reference-component">
			{contentData.items.map(({ key, content, type }) =>
				<ComponentRegistryComponent key={key} type={type}>{content}</ComponentRegistryComponent>)}
		</div>
	);
};

export default ViewBudgetReferenceComponent;
