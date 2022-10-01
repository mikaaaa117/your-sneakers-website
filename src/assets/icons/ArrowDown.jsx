import { nextPage } from '../../store/pagesSlice';
import { useDispatch } from 'react-redux';

export default function ArrowDown({ color }) {
	const dispatch = useDispatch();
	return (
		<svg
			className="hover:scale-150 hover:cursor-pointer transition-transform"
			onClick={() => dispatch(nextPage())}
			width="106"
			height="58"
			viewBox="0 0 106 58"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M102 4L53 53L4.00001 3.99999"
				stroke={color}
				strokeWidth="7"
				strokeLinecap="round"
			/>
		</svg>
	);
}
