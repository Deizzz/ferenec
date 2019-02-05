import React from 'react';
import {Grid, Col, Row} from "react-bootstrap";

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
			<div id="make-order" className="make-order">
				<Grid>
					<Row>
						<div className="col s6">
							<input type="text" placeholder="Имя"/>
						</div>
						<div className="col s6">
							<input type="phone" placeholder="Телефон"/>
						</div>
					</Row>
				</Grid>
			</div>
		);
	}
}
