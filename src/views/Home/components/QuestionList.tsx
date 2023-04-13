import Skeleton from './Skeleton';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers/rootReducer';
import { lazy, Suspense, memo, useEffect, useRef } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import useObserve from '@/hooks/useObserve';

interface Props {
	currPage: number;
	setCurrPage: (currPage: number) => void;
}

/* Lazy import */
const Question = lazy(() => import('./Question'));

function QuestionList(props: Props) {
	/* store the articles you have already viewed */
	const [viewedList, setViewedList] = useLocalStorage<number[]>('viewedList', []);
	const { questions, has_more } = useSelector((state: RootState) => state.questions);
	const bottomRef = useRef(null);
	const isPageBottom = useObserve(bottomRef, '200px');

	useEffect(() => {
		if (isPageBottom && questions.length && has_more) props.setCurrPage(props.currPage + 1);
	}, [isPageBottom]);

	useEffect(() => {
		if (questions.length) {
			questions.map((question) => {
				if (viewedList.includes(question.question_id)) question.viewed = true;
			});
		}
	}, [questions]);

	return (
		<>
			<section className="px-2">
				<Suspense fallback={<Skeleton />}>
					{questions &&
						questions.map((question) => (
							<Question question={question} viewedList={viewedList} setViewedList={setViewedList} key={+question.creation_date} />
						))}
				</Suspense>
				<div ref={bottomRef} className="h-10 w-full">
					{has_more}
				</div>
			</section>
		</>
	);
}

export default memo(QuestionList);
