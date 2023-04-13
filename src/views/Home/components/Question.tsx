import styled from 'styled-components';
import type { Question } from '@/redux/reducers/questions/types';
import { CSSTransition } from 'react-transition-group';
import { useEffect, useState, useRef } from 'react';

interface Props {
	question: Question;
	viewedList: number[];
	setViewedList: (viewedList: number[]) => void;
}

const Article = styled.article`
	transform-origin: top;
	&.largen-enter,
	.largen-appear {
		transform: scale(0.5);
		opacity: 0;
	}
	&.largen-enter-active,
	.largen-appear-active {
		transform: scale(1);
		opacity: 1;
		transition: all 0.4s ease-out;
	}
	&.largen-exit {
		transform: translateX(-100%);
	}
	&.largen-exit-active {
		opacity: 0;
		transition: all 0.4s ease-out;
	}
`;

export default function Question(props: Props) {
	const [showAnimation, setShowAnimation] = useState(false);
	const nodeRef = useRef(null);

	const articleAnswerStyle = () => {
		if (props.question.is_answered) return 'bg-green-600 text-white';
		if (props.question.answer_count > 0) return 'border border-green-600 text-green-600';
		return '';
	};

	const openNewTabWithUrl = (url: string, articleId: number) => {
		handleViewed(articleId);
		window.open(url, '_blank');
	};

	const handleViewed = (articleId: number) => {
		props.setViewedList([...props.viewedList, articleId]);
	};

	useEffect(() => {
		if (props.question) setShowAnimation(true);
	}, [props.question]);

	return (
		<>
			<CSSTransition nodeRef={nodeRef} timeout={1000} in={showAnimation} appear unmountOnExit classNames="largen">
				<Article
					ref={nodeRef}
					className="flex cursor-pointer justify-between border-b-2 p-2 pb-6 pr-4"
					onClick={() => openNewTabWithUrl(props.question.link, props.question.question_id)}
				>
					{/* Content */}
					<div className="flex-1">
						<p className="text-xl">{props.question.title}</p>
						<div className="flexCenter mt-2">
							<ul className="flex w-full flex-row justify-around">
								<li>
									<p className="text-sm text-red-700 md:text-base">Scores</p>
									<p className={`text-center ${props.question.score < 0 && 'text-red-500'}`}>{props.question.score}</p>
								</li>
								<li>
									<p className="text-sm text-red-700 md:text-base">Answers</p>
									<p className={`text-center ${articleAnswerStyle()}`}>{props.question.answer_count}</p>
								</li>
								<li>
									<p className="text-sm text-red-700 md:text-base">Viewed</p>
									<p className="text-center">{props.question.view_count}</p>
								</li>
							</ul>
						</div>
						{props.question.viewed && (
							<div className="mt-2 flex items-center text-green-600">
								read<p className="ml-2 h-2 w-2 rounded-full bg-green-600"></p>
							</div>
						)}
					</div>
					{/* Avatar */}
					<div className="h-12 w-12 self-center md:mb-4 md:h-20 md:w-20">
						<img
							src={props.question.owner.profile_image}
							alt="Avatar"
							className="mb-2 rounded-full"
							onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
								/* fallback image */
								e.currentTarget.onerror = null;
								e.currentTarget.src = 'https://www.gravatar.com/avatar/00000000000000000000000000000?d=mp&f=y';
							}}
						/>
						<p className="text-center text-sm md:text-base">{props.question.owner.user_id}</p>
					</div>
				</Article>
			</CSSTransition>
		</>
	);
}
