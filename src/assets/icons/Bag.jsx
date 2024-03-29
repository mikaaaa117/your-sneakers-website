export default function Bag({ color }) {
	return (
		<svg
			width="23"
			height="23"
			viewBox="0 0 23 23"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4.90338 1.5L1.56677 5.5V19.5C1.56677 20.0304 1.80113 20.5391 2.21828 20.9142C2.63544 21.2893 3.20123 21.5 3.79117 21.5H19.362C19.9519 21.5 20.5177 21.2893 20.9349 20.9142C21.352 20.5391 21.5864 20.0304 21.5864 19.5V5.5L18.2498 1.5H4.90338Z"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M1.56677 5.60257H21.5864"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M16.081 9.70514C16.081 10.7932 15.6065 11.8367 14.7617 12.6061C13.917 13.3755 12.7713 13.8077 11.5766 13.8077C10.382 13.8077 9.23626 13.3755 8.39152 12.6061C7.54678 11.8367 7.0722 10.7932 7.0722 9.70514"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
