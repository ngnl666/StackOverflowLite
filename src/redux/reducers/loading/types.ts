export interface LoadingState {
	status: boolean;
}

export interface LoadingActions extends LoadingState {
	type: 'SET_LOADING';
	payload: LoadingState;
}
