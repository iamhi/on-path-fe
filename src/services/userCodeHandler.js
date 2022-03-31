const userCodeItemName = 'on-path-user-code';

export const setUserCode = (userCode) => localStorage.setItem(userCodeItemName, userCode);

export const getUserCode = () => localStorage.getItem(userCodeItemName);

export const deleteUserCode = () => localStorage.removeItem(userCodeItemName);
