import { combineReducers } from 'redux';
import alertReducer from './alert';
import loadingReducer from './loading';
import tagsReducer from './tags';
import questionsReducer from './questions';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
	alert: alertReducer,
	loading: loadingReducer,
	tags: tagsReducer,
	questions: questionsReducer,
});

export default rootReducer;
