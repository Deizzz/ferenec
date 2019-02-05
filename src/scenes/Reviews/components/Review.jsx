import React from 'react';

export default class Review extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
		review: React.PropTypes.object,
		className: React.PropTypes.string
	};

	static defaultProps = {
		className: ""
	}

	constructor(props) {
		super(props);
	}

	render() {
		const { review, className } = this.props;
		return (
			<div className={`review-item ${className}`}>
				<div className="review-icon" style={{
					backgroundImage: `url(${review.icon})`
				}}></div>
				<div className="review-name">{review.name}</div>
				<div className="review-message">{`"${review.message}"`}</div>
			</div>
		);
	}
}
