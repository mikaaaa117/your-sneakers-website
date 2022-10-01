import { useSelector } from 'react-redux';
import './App.css';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main';
import sneakers from './consts';

function App() {
	const theme = useSelector(state => state.theme.currentTheme);
	const currentPage = useSelector(state => state.pages.currentPage);
	const sneaker = sneakers[currentPage - 1];
	return (
		<div className={`app ${theme === 'dark' ? 'bg-brand-100' : 'bg-white'}`}>
			<Header />
			<Main
				subtitle={sneaker.title}
				description={sneaker.description}
				image={sneaker.image}
				skuFirst={sneaker.skuFirst}
				skuSecond={sneaker.skuSecond}
				colorway={sneaker.colorway}
				releaseDate={sneaker.releaseDate}
				count={currentPage}
			/>
			<Footer price={sneaker.price} />
		</div>
	);
}

export default App;
