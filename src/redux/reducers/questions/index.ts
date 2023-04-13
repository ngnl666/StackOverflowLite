import { QuestionState, QuestionActions } from './types';

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const SET_QUESTIONS = 'SET_QUESTIONS';
export const CLEAR_QUESTION = 'CLEAR_QUESTION';

const initialState: QuestionState = {
	questions: [],
	has_more: true,
};

/* Actions */
export const fetchQuestions = (tagged: QuestionActions['tagged'], page: QuestionActions['page']) => ({
	type: FETCH_QUESTIONS,
	tagged,
	page,
});

export const setQuestions = (payload: QuestionState) => ({
	type: SET_QUESTIONS,
	payload,
});

export const clearQuestion = () => ({
	type: CLEAR_QUESTION,
});

/* Reducer */
export default (state: QuestionState = initialState, action: QuestionActions) => {
	switch (action.type) {
		case SET_QUESTIONS: {
			return { ...state, questions: [...state.questions, ...action.payload.questions], has_more: action.payload.has_more };
		}
		case CLEAR_QUESTION: {
			return { ...state, ...initialState };
		}
		default:
			return state;
	}
};
