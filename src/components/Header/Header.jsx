import Person from '../../assets/icons/Person.jsx';
import Search from '../../assets/icons/Search.jsx';
import Bag from '../../assets/icons/Bag.jsx';
import Logo from '../../assets/icons/Logo.jsx';
import { useSelector } from 'react-redux';
import GenderBar from './GenderBar/GenderBar.jsx';

export default function Header() {
	const theme = useSelector(state => state.theme.currentTheme);
	return (
		<div className="container-custom">
			<div className="flex space-y-5 flex-col text-white items-center">
				<div className="flex flex-row w-full justify-between">
					<GenderBar theme={theme} />
					<div className="flex">
						<div className="text-brand-50 text-3xl font-normal uppercase">
							your
						</div>
						<div
							className={`uppercase text-3xl font-bold ${
								theme === 'dark' ? 'text-white' : 'text-brand-100'
							}`}
						>
							sneaker
						</div>
					</div>
					<div className="flex justify-end w-96 space-x-brand">
						<div className="section__item">
							<Person color={theme === 'dark' ? 'white' : 'black'} />
						</div>
						<div className="section__item">
							<Search color={theme === 'dark' ? 'white' : 'black'} />
						</div>
						<div className="section__item">
							<Bag color={theme === 'dark' ? 'white' : 'black'} />
						</div>
					</div>
				</div>
				<div className="flex justify-center">
					<Logo color={theme === 'dark' ? 'white' : 'black'} />
				</div>
			</div>
		</div>
	);
}
