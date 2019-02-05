import React from 'react';

export default class Item extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
		item: React.PropTypes.object
	};

	constructor(props) {
		super(props);
	}

	render() {
		const {item} = this.props;
		return (
			<div className="about-me-item">
				<div className="icon" style={{
					backgroundImage: `url(${item.icon})`
				}}></div>
				<div className="content">
					<div className="title">{item.title}</div>
					<div className="description">{item.description}</div>
				</div>
			</div>
		);
	}
}
