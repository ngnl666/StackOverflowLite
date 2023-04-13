import { TagState, TagActions } from './types';

export const FETCH_TAGS = 'FETCH_TAGS';
export const SET_TAGS = 'SET_TAGS';
export const SET_SELECTED_TAG_NAME = 'SET_SELECTED_TAG_NAME';

const initialState: TagState = {
	tags: [],
	selectedTagName: '',
};

/* Actions */
export const fetchTags = (keyword: string) => ({
	type: FETCH_TAGS,
	keyword,
});

export const setTags = (payload: TagState['tags']) => ({
	type: SET_TAGS,
	payload,
});

export const setSelectedTagName = (payload: TagActions['selectedTagName']) => ({
	type: SET_SELECTED_TAG_NAME,
	payload,
});

/* Reducer */
export default (state: TagState = initialState, action: TagActions) => {
	switch (action.type) {
		case SET_TAGS: {
			return { ...state, tags: action.payload };
		}
		case SET_SELECTED_TAG_NAME: {
			return { ...state, selectedTagName: action.payload };
		}
		default:
			return state;
	}
};
