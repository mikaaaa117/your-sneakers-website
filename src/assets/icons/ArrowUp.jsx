import { prevPage } from '../../store/pagesSlice';
import { useDispatch } from 'react-redux';

export default function ArrowUp({ color }) {
	const dispatch = useDispatch();
	return (
		<svg
			className="hover:scale-150 hover:cursor-pointer transition-transform"
			onClick={() => dispatch(prevPage())}
			width="106"
			height="58"
			viewBox="0 0 106 58"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4 54L53 5L102 54"
				stroke={color}
				strokeWidth="7"
				strokeLinecap="round"
			/>
		</svg>
	);
}
