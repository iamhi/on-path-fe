import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsAdmin } from '@redux/slices/userDataSlice';
import { BUDGET_REFERENCE_ROUTE, ZONE_ROUTE } from '@page-components/constants';
import NavigationItemComponent from './NavigationItemComponent';

const NavigationComponent = () => {
	const { pathname } = useLocation();
	const isAdmin = useSelector(selectIsAdmin);

	const adminRoutes = (
		<NavigationItemComponent linkTo={ZONE_ROUTE} selected={pathname === ZONE_ROUTE}>
			Zone
		</NavigationItemComponent>
	);

	return (
		<div className="navigation-component">
			<NavigationItemComponent linkTo={BUDGET_REFERENCE_ROUTE} selected={pathname === BUDGET_REFERENCE_ROUTE}>
				Reference
			</NavigationItemComponent>
			{isAdmin && adminRoutes}
		</div>
	);
};

export default NavigationComponent;
