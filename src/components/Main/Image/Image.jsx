import * as React from 'react';

export default class Image extends React.Component {
	constructor(props) {
		super(props);
		this.state = { src: null };
	}

	componentDidMount() {
		this.loadImage(this.props.name);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.name !== this.props.name) {
			this.loadImage(this.props.name);
		}
	}

	async loadImage(name) {
		const image = await import(`../../../assets/sneakers/${name}.png`);
		console.log(image);
		this.setState({ src: image.default });
	}

	render() {
		return <img src={this.state.src} width="760" alt={this.props.name} />;
	}
}
