import { put } from 'redux-saga/effects';
import { setAlert, clearAlert } from '../reducers/alert';
import { AlertState } from '../reducers/alert/types';

export function* handleSetAlert(action: AlertState) {
	yield put(setAlert(action));
}

export function* handleClearAlert() {
	yield put(clearAlert());
}
