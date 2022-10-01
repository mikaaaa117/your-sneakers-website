import * as React from 'react';
import Image from './Image/Image';
import './Main.css';
import ArrowUp from '../../assets/icons/ArrowUp';
import ArrowDown from '../../assets/icons/ArrowDown';
import { useSelector } from 'react-redux';

const Main = ({
	subtitle,
	description,
	skuFirst,
	skuSecond,
	releaseDate,
	colorway,
	image,
	count
}) => {
	const theme = useSelector(state => state.theme.currentTheme);
	return (
		<div className="main">
			<div className="content__main">
				<div className="title__content">
					<span className="2xl:text-3xl xl:text-xl text-brand-50 uppercase">
						sneaker
					</span>
					<span
						className={`2xl:text-6xl xl:text-4xl uppercase font-bold ${
							theme === 'dark' ? 'text-white' : 'text-brand-100'
						}`}
					>
						Air Jordan
					</span>
				</div>
				<div
					className={`subtitle__content ${
						theme === 'dark' ? 'text-white' : 'text-brand-100'
					}`}
				>
					{subtitle}
				</div>
				<div
					className={`description__content ${
						theme === 'dark' ? 'text-white' : 'text-brand-100'
					}`}
				>
					{description}
				</div>
				<div
					className={`options__content ${
						theme === 'dark' ? 'text-white' : 'text-brand-100'
					}`}
				>
					<div className="sku-first__options">SKU: {skuFirst}</div>
					{skuSecond && skuSecond !== '' && (
						<div className="sku-second__options">SKU: {skuSecond}</div>
					)}
					<div className="release-date__options">
						Release date: {releaseDate}
					</div>
					{colorway && colorway !== '' && (
						<div className="colorway__options">Colorway: {colorway}</div>
					)}
				</div>
			</div>
			<div className="image__main">
				<Image name={image} />
			</div>
			<div className="absolute-element__main">
				{count > 1 ? (
					<ArrowUp color={theme === 'dark' ? 'white' : '#121212'} />
				) : (
					<div className="h-14" />
				)}
				<div className="count__absolute-element">0{count}</div>
				{count < 6 ? (
					<ArrowDown color={theme === 'dark' ? 'white' : '#121212'} />
				) : (
					<div className="h-14" />
				)}
			</div>
		</div>
	);
};

export default Main;
