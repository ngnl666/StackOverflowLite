export interface Question {
	tags: string[];
	owner: {
		account_id: number;
		reputation: number;
		user_id: number;
		user_type: 'registered';
		accept_rate: number;
		profile_image: string;
		display_name: string;
		link: string;
	};
	viewed?: boolean;
	collectives: Array<Question>;
	bounty_amount?: number;
	bounty_closes_datedate?: Date;
	closed_datedate?: Date;
	closed_reason?: string;
	community_owned_datedate?: Date;
	protected_datedate?: Date;
	is_answered: boolean;
	view_count: number;
	accepted_answer_id?: number;
	answer_count: number;
	score: number;
	last_activity_date: Date;
	locked_date?: Date;
	migrated_from?: any;
	migrated_to?: any;
	creation_date: Date;
	last_edit_date: Date;
	question_id: number;
	content_license: string;
	link: string;
	title: string;
}

export interface QuestionState {
	questions: Question[];
	has_more: boolean;
}

export interface QuestionActions extends QuestionState {
	type: 'FETCH_QUESTIONS' | 'SET_QUESTIONS' | 'CLEAR_QUESTION';
	payload: QuestionState;
	tagged?: string;
	page: number;
}
