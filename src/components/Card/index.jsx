import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from "react-bootstrap";
import "./style.scss";
import cx from "classnames";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Card extends React.Component {
	static propTypes = {
		title: PropTypes.string,
		description: PropTypes.string,
		className: PropTypes.string,
		icon: PropTypes.string
	};

	constructor(props) {
		super(props);
	}

	render() {

		const { title, description, className, icon } = this.props;

		return (
			<Col className={cx("card", `${className}`)}>
				<div className="title">{title}</div>
				<div className="description">{description}</div>
				<div className="card-footer">
				</div>
			</Col>
		);
	}
}
