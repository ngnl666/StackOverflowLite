import { useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers/rootReducer';

export default function FullScreenLoading() {
	const loading = useSelector((state: RootState) => state.loading);

	return (
		<>
			{loading.status && (
				<div className="fixed inset-0 z-10 bg-black/50">
					<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
						<svg className="h-12 w-12 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
							<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
							<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
						</svg>
					</div>
				</div>
			)}
		</>
	);
}
