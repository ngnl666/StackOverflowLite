import { memo } from 'react';

interface Props {
	keyword: string;
	handleKeywordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ keyword, handleKeywordChange }: Props) {
	return (
		<>
			<div className="flex flex-row duration-100 focus-within:-translate-x-1 focus-within:shadow-main">
				<input
					type="text"
					value={keyword}
					onChange={handleKeywordChange}
					placeholder="Tag"
					className="w-full rounded-l-[8px] border-2 border-primary p-2 focus:outline-none"
				></input>
				<button className="cursor-default rounded-r-[8px] bg-primary px-4">Search</button>
			</div>
		</>
	);
}

export default memo(SearchBar);
