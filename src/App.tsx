import Home from './views/Home';
import FullScreenLoading from '@/components/FullScreenLoading';
import AlertMsg from '@/components/AlertMsg';

function App() {
	return (
		<div className="w-full">
			<Home></Home>
			<FullScreenLoading />
			<AlertMsg />
		</div>
	);
}

export default App;
