import * as React from 'react';

const GenderBar = ({ theme }) => {
	return (
		<div className="flex w-96 space-x-brand text-lg">
			<div
				className={`section__item ${
					theme === 'dark'
						? 'border-white text-white'
						: 'border-brand-100 text-brand-100'
				}`}
			>
				woman
			</div>
			<div
				className={`section__item ${
					theme === 'dark'
						? 'border-white text-white'
						: 'border-brand-100 text-brand-100'
				}`}
			>
				men
			</div>
			<div
				className={`section__item activity ${
					theme === 'dark'
						? 'border-white text-white'
						: 'border-brand-100 text-brand-100'
				}`}
			>
				all
			</div>
		</div>
	);
};

export default GenderBar;
