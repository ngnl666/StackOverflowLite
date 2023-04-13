import SearchBar from './components/SearchBar';
import Tags from './components/Tags';
import QuestionList from './components/QuestionList';
import tw from 'tailwind-styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers/rootReducer';
import { TagState } from '@/redux/reducers/tags/types';
import { fetchTags, setSelectedTagName } from '@/redux/reducers/tags';
import { fetchQuestions, clearQuestion } from '@/redux/reducers/questions';
import { useEffect, useState, useCallback } from 'react';
import useDebounce from '@/hooks/useDebounce';

const StickyContainer = tw.div`
	sticky top-0 mb-4 space-y-4 bg-white/95 px-4 pb-4 pt-8
`;

export default function Home() {
	const [keyword, setKeyword] = useState<string>('');
	const [currPage, setCurrPage] = useState<number>(1);
	const { tags, selectedTagName } = useSelector((state: RootState) => state.tags as TagState);
	const dispatch = useDispatch();

	const handleKeywordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setKeyword(e.target.value);
	}, []);

	const handleTagClick = useCallback((name: string) => {
		dispatch(setSelectedTagName(name));
	}, []);

	const memoizedSetCurrPage = useCallback((currPage: number) => {
		setCurrPage(currPage);
	}, []);

	/* custom hook to debounce the fetchTags action (Performence optimization!!!) */
	useDebounce(() => dispatch(fetchTags(keyword)), 1000, [keyword]);

	useEffect(() => {
		if (selectedTagName) dispatch(fetchQuestions(selectedTagName, currPage));
	}, [currPage, selectedTagName]);

	useEffect(() => {
		/* if selectedTagName changed goto the top of page and clear the question list */
		if (tags.length) {
			window.scrollTo(0, 0);
			dispatch(clearQuestion());
		}
	}, [selectedTagName]);

	return (
		<>
			<main className="mx-auto w-full md:w-[60%]">
				<StickyContainer>
					<SearchBar keyword={keyword} handleKeywordChange={handleKeywordChange} />
					<Tags tags={tags} selectedTagName={selectedTagName} handleTagClick={handleTagClick} />
				</StickyContainer>
				<QuestionList currPage={currPage} setCurrPage={memoizedSetCurrPage} />
			</main>
		</>
	);
}
