import { takeLatest, takeEvery } from 'redux-saga/effects';
import { handleSetAlert, handleClearAlert } from './alert';
import { handleSetLoading } from './loading';
import { handleFetchTags, handleSetSelectedTagName } from './tags';
import { handleFetchQuestions, handleClearQuestions } from './questions';
import { SET_ALERT, CLEAR_ALERT } from '../reducers/alert';
import { SET_LOADING } from '../reducers/loading';
import { FETCH_TAGS, SET_SELECTED_TAG_NAME } from '../reducers/tags';
import { FETCH_QUESTIONS, CLEAR_QUESTION } from '../reducers/questions';

/* watch all sagas */
export function* rootSaga() {
	/* Alert */
	yield takeLatest(SET_ALERT, () => handleSetAlert);
	yield takeLatest(CLEAR_ALERT, () => handleClearAlert);
	/* Loading */
	yield takeLatest(SET_LOADING, () => handleSetLoading);
	/* Tags */
	yield takeLatest(FETCH_TAGS, handleFetchTags);
	yield takeLatest(SET_SELECTED_TAG_NAME, () => handleSetSelectedTagName);
	/* Questions */
	yield takeLatest(FETCH_QUESTIONS, handleFetchQuestions);
	yield takeEvery(CLEAR_QUESTION, () => handleClearQuestions);
}
