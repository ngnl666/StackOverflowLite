import { put } from 'redux-saga/effects';
import { setLoading } from '../reducers/loading';
import { LoadingState } from '../reducers/loading/types';

export function* handleSetLoading(action: LoadingState) {
	yield put(setLoading(action));
}
