import { LoadingState, LoadingActions } from './types';

export const SET_LOADING = 'SET_LOADING';

const initialState: LoadingState = {
	status: false,
};

/* Actions */
export const setLoading = (payload: LoadingState) => ({
	type: SET_LOADING,
	payload,
});

/* Reducer */
export default (state: LoadingState = initialState, action: LoadingActions) => {
	switch (action.type) {
		case SET_LOADING: {
			return { ...state, status: action.payload.status };
		}
		default:
			return state;
	}
};
