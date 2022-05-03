import Person from "../../assets/icons/Person.svg";

export default function Header() {
	return (
		<div className="flex flex-col text-white">
			<div className="flex flex-row justify-between">
				<div className="flex space-x-6">
					<div>woman</div>
					<div>men</div>
					<div>all</div>
				</div>
				<div className="flex">
					<div>your</div>
					<div>sneaker</div>
				</div>
				<div className="flex">
					<div>
						<img src="../../assets/icons/Person.svg" alt="person-icon" />
					</div>
					<div></div>
					<div></div>
				</div>
			</div>
			<div className="flex justify-center"></div>
		</div>
	);
}
