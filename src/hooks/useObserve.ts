import { useEffect, useState } from 'react';

export default function useObserve(ref: React.MutableRefObject<HTMLElement | null>, rootMargin: string = '0px') {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	useEffect(() => {
		if (ref.current == null) return;
		/* Create an observer that will set isVisible when the element is intersection with rootMargin or not */
		const observer = new IntersectionObserver(([entry]: IntersectionObserverEntry[]) => setIsVisible(entry.isIntersecting), {
			rootMargin,
		});
		observer.observe(ref.current);

		return () => {
			if (ref.current == null) return;
			observer.unobserve(ref.current);
		};
	}, [ref.current, rootMargin]);

	return isVisible;
}
