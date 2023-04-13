import axios from '@/api/axios';
import { Tag } from '@/redux/reducers/tags/types';
import { Question, QuestionActions } from '@/redux/reducers/questions/types';

interface GetTags {
	items: Tag[];
}

interface GetQuestions {
	items: Question[];
	has_more: boolean;
}

enum Api {
	Tags = '/tags',
	Questions = '/questions',
}

const VITE_TAGS_PER_PAGE = import.meta.env.VITE_TAGS_PER_PAGE;
const VITE_QUS_PER_PAGE = import.meta.env.VITE_QUS_PER_PAGE;

export async function getTags(inname?: string) {
	const data: GetTags = await axios.get(Api.Tags, {
		params: {
			sort: 'popular',
			order: 'desc',
			site: 'stackoverflow',
			pagesize: VITE_TAGS_PER_PAGE,
			inname,
		},
	});

	const { items } = data;
	return items;
}

export async function getQuestionsByTag(params: Pick<QuestionActions, 'tagged' | 'page'>) {
	const data: GetQuestions = await axios.get(Api.Questions, {
		params: {
			sort: 'activity',
			order: 'desc',
			site: 'stackoverflow',
			pagesize: VITE_QUS_PER_PAGE,
			...params,
		},
	});

	const { items, has_more } = data;

	return { questions: items, has_more };
}
