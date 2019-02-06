import React from 'react';
import {Row, Col} from "react-bootstrap";

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
				<Row>
					<Col xs={2}>
						<div className="icon" style={{
							backgroundImage: `url(${item.icon})`
						}}></div>
					</Col>
					<Col xs={10}>
						<div className="content">
							<div className="title">{item.title}</div>
							<div className="description">{item.description}</div>
						</div>
					</Col>
				</Row>
				
			</div>
		);
	}
}
