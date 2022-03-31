import { getUserCode } from '@services/userCodeHandler';

import BudgetInputUrls from './budgetInputUrls';

const USER_CODE_HEADER = 'usercode';

export const getBudgetInput = () => fetch(BudgetInputUrls.budgetInputUrl, {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json;charset=UTF-8',
		[USER_CODE_HEADER]: getUserCode(),
	},
}).then((response) => response.json());

export const updateBudgetInput = (data) => fetch(BudgetInputUrls.budgetInputUrl, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json;charset=UTF-8',
		[USER_CODE_HEADER]: getUserCode(),
	},
	body: JSON.stringify(data),
}).then((response) => response.json());
