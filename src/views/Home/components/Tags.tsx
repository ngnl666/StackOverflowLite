import { TagState } from '@/redux/reducers/tags/types';
import { useEffect, memo } from 'react';

interface Props {
	tags: TagState['tags'];
	selectedTagName: TagState['selectedTagName'];
	handleTagClick: (tag: string) => void;
}

function Tags({ tags, handleTagClick, selectedTagName }: Props) {
	useEffect(() => {
		if (tags.length) handleTagClick(tags[0].name);
	}, [tags]);

	return (
		<>
			<h2 className="text-3xl">Trending</h2>
			<header className="mt-2 flex flex-wrap justify-center gap-3 md:justify-start">
				{tags.length ? (
					tags.map((tag) => (
						<button
							key={tag.name}
							onClick={() => handleTagClick(tag.name)}
							className={`rounded-[7px] border-2 border-primary px-2 py-3 duration-150 hover:bg-primary ${
								selectedTagName === tag.name ? 'bg-primary' : 'bg-white'
							}`}
						>
							{tag.name}
						</button>
					))
				) : (
					<p>No related tag found, please try another keyword.</p>
				)}
			</header>
		</>
	);
}

export default memo(Tags);
