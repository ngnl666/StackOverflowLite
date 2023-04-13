import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { RootState } from '@/redux/reducers/rootReducer';
import { clearAlert } from '@/redux/reducers/alert';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, useRef } from 'react';

const SlideIn = styled.div`
	&.slideIn-enter,
	.slideIn-appear {
		transform: translateX(100%);
	}
	&.slideIn-enter-active,
	.slideIn-appear-active {
		transform: translateX(0);
		transition: all 0.4s ease-out;
	}
	&.slideIn-exit {
		transform: translateX(0);
	}
`;

export default function AlertMsg() {
	const [showAnimation, setShowAnimation] = useState<boolean>(false);
	const [alertStyle, setAlertStyle] = useState<string>('');
	const { text, status } = useSelector((state: RootState) => state.alert);
	const dispatch = useDispatch();
	const isMountedRef = useRef<boolean>(false);
	const nodeRef = useRef(null);

	useEffect(() => {
		let timer: NodeJS.Timeout;

		if (isMountedRef.current) {
			setAlertStyle(
				status === 'error' ? 'bg-red-100 border-red-400 text-red-700' : 'bg-green-100 border-green-400 text-green-700',
			);
			setShowAnimation(true);

			timer = setTimeout(() => {
				setShowAnimation(false);
				dispatch(clearAlert());
			}, 2000);
		} else {
			isMountedRef.current = true;
		}

		return () => clearTimeout(timer);
	}, [text, status]);

	return (
		<>
			<CSSTransition nodeRef={nodeRef} timeout={1000} in={showAnimation} appear unmountOnExit classNames="slideIn">
				<SlideIn ref={nodeRef} className="fixed bottom-8 right-4 flex">
					<div className="bottom-8 right-4 flex">
						<div className={`relative rounded border px-4 py-3 ${alertStyle}`} role="alert">
							<strong className="font-bold">{status ? 'Error: ' : 'Success: '}</strong>
							<span className="inline">{text}</span>
						</div>
					</div>
				</SlideIn>
			</CSSTransition>
		</>
	);
}
