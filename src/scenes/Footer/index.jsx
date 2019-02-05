import React from 'react';

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
			<div className="footer"></div>
		);
	}
}
