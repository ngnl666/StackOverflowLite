import { AlertState, AlertActions } from './types';

export const SET_ALERT = 'SET_ALERT';
export const CLEAR_ALERT = 'CLEAR_ALERT';

const initialState: AlertState = {
	text: '',
	status: 'error',
};

/* Actions */
export const setAlert = (payload: AlertState) => ({
	type: SET_ALERT,
	payload,
});

export const clearAlert = () => ({
	type: SET_ALERT,
	...initialState,
});

/* Reducer */
export default (state: AlertState = initialState, action: AlertActions) => {
	switch (action.type) {
		case SET_ALERT: {
			return { ...state, ...action.payload };
		}
		case CLEAR_ALERT: {
			return { ...state, ...initialState };
		}
		default:
			return state;
	}
};
