import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
	const [page, setPage] = useState(1);
	return (
		<div className="app">
			<Header />

			<Footer />
		</div>
	);
}

export default App;
