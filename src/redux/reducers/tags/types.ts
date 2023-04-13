export interface Tag<T = any> {
	count: number;
	name: string;
	has_synonyms: boolean;
	is_moderator_only: boolean;
	is_required: boolean;
	user_id?: number;
	collectives?: Array<T>;
}

export interface TagState {
	tags: Tag[];
	selectedTagName: string;
}

export interface TagActions extends TagState {
	type: 'FETCH_TAGS' | 'SET_TAGS' | 'SET_SELECTED_TAG_NAME';
	payload: TagState;
	keyword?: string;
}
