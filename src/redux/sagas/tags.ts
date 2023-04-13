import { put, call } from 'redux-saga/effects';
import { setAlert } from '../reducers/alert';
import { setLoading } from '../reducers/loading';
import { setTags, setSelectedTagName } from '../reducers/tags';
import { Tag, TagActions } from '../reducers/tags/types';
import { getTags } from '@/api';

export function* handleFetchTags(action: TagActions) {
	try {
		yield put(setLoading({ status: true }));
		const tags: Tag[] = yield call(getTags, action.keyword);
		yield put(setTags(tags));
	} catch (error: any) {
		yield put(setAlert({ text: `${error.response?.status}-${error.message}`, status: 'error' }));
	} finally {
		yield put(setLoading({ status: false }));
	}
}

export function* handleSetSelectedTagName(action: Tag['name']) {
	yield put(setSelectedTagName(action));
}
