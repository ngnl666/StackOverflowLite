export interface AlertState {
	text: string;
	status: 'success' | 'error';
}

export interface AlertActions extends AlertState {
	type: 'SET_ALERT' | 'CLEAR_ALERT';
	payload: AlertState;
}
