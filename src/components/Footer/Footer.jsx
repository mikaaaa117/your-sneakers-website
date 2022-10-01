import { useSelector } from 'react-redux';
import Switch from '../Switch/Switch';

export default function Footer({ price }) {
	const theme = useSelector(state => state.theme.currentTheme);
	return (
		<div className="container-custom">
			<div className="flex w-full space-y-4 flex-col items-center">
				<div className="flex justify-center">
					<div
						className={`text-3xl font-bold ${
							theme === 'dark' ? 'text-white' : 'text-brand-100'
						}`}
					>
						{price}$
					</div>
				</div>
				<div className="flex w-full items-center justify-between">
					<div className="theme-switcher">
						<Switch />
						<div
							className={`current-theme ${
								theme === 'dark' ? 'text-white' : 'text-brand-100'
							}`}
						>
							{theme}
						</div>
					</div>
					<button
						className={`px-20 py-3 font-bold uppercase rounded-2xl text-3xl ${
							theme === 'dark'
								? 'bg-white text-brand-100'
								: 'bg-brand-100 text-white'
						}`}
					>
						buy
					</button>
					<div
						className={`language-switcher flex space-x-1 w-24 justify-end ${
							theme === 'dark' ? 'text-white' : 'text-brand-100'
						}`}
					>
						<span className="item__language-switcher item-active">EN</span>
						<span className="item__language-switcher">RU</span>
					</div>
				</div>
			</div>
		</div>
	);
}
