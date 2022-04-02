import { getUserCode } from '@services/userCodeHandler';

import ViewContentUrls from './viewContentUrls';

const USER_CODE_HEADER = 'usercode';

export const getViewContentRequest = (viewName) => fetch(`${ViewContentUrls.viewContentUrl}?viewName=${viewName}`, {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json;charset=UTF-8',
		[USER_CODE_HEADER]: getUserCode(),
	},
}).then((response) => response.json());
