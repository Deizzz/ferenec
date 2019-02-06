import React from 'react';
import { Grid, Row, Col } from "react-bootstrap";

import "./style.scss";

export default class index extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="footer">
				<Grid>
					<Row>
						<Col xs={6} md={6}>
							<div className="footer-title">Контакты</div>
							<div className="footer-item">+79023924456</div>
							
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}
