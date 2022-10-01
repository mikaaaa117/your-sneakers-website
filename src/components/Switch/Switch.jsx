import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchTheme } from '../../store/themeSlice';

const Switch = () => {
	const theme = useSelector(state => state.theme.currentTheme);
	const dispatch = useDispatch();
	return (
		<div
			onClick={() => dispatch(switchTheme())}
			className={`transition-all hover:cursor-pointer rounded-3xl w-20 h-10 relative ${
				theme === 'dark' ? 'bg-white' : 'bg-brand-100'
			}`}
		>
			<div
				className={`transition-all rounded-3xl w-8 h-8 top-1/2 -translate-y-1/2 absolute ${
					theme === 'dark' ? 'bg-brand-100 left-1' : 'bg-white right-1'
				}`}
			></div>
		</div>
	);
};

export default Switch;
