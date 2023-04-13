import { put, call } from 'redux-saga/effects';
import { setAlert } from '../reducers/alert';
import { setLoading } from '../reducers/loading';
import { setQuestions, clearQuestion } from '../reducers/questions';
import { QuestionState, QuestionActions } from '../reducers/questions/types';
import { getQuestionsByTag } from '@/api';

export function* handleFetchQuestions(action: QuestionActions) {
	try {
		yield put(setLoading({ status: true }));
		const data: QuestionState = yield call(getQuestionsByTag, { tagged: action.tagged, page: action.page });
		yield put(setQuestions(data));
	} catch (error: any) {
		yield put(setAlert({ text: `${error.response?.status}-${error.message}`, status: 'error' }));
	} finally {
		yield put(setLoading({ status: false }));
	}
}

export function* handleClearQuestions() {
	yield put(clearQuestion());
}
