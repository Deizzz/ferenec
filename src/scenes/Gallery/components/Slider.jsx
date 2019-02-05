import React from 'react';
import cx from "classnames";

let timer;

export default class Slider extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
		items: React.PropTypes.array
	};

	constructor(props) {
		super(props);
		this.state = {
			position: 0,
			nextAnimationDirection: 'left',
			interval: 5000
		}
	}

	componentDidMount() {
		timer = window.setInterval(()=> {
			this.next();
		}, this.state.interval)
	}

	componentWillUnmount() {
		window.clearInterval(timer);
	}

	next(){
		let nextPosition = this.state.position + 1
		this.setState({
			position: nextPosition > this.props.items.length - 1 ? 0 : nextPosition,
			nextAnimationDirection: 'left'
		});
	}

	prev(){
		let nextPosition = this.state.position - 1
		this.setState({
			position: nextPosition < 0 ? this.props.items.length - 1 : nextPosition,
			nextAnimationDirection: 'right'
		});
	}

	render() {
		const {position, nextAnimationDirection} = this.state;
		const { items } = this.props;
		return (
			<div className="slider-wrapper">
				<div className="slider-controlls left" onClick={this.prev.bind(this)}></div>
				<div className={`slider-items ${nextAnimationDirection}`}>
					{items.map((item, idx) => <div key={idx} className={cx(`slider-item`, {
						active: position === idx,
					})} style={{backgroundImage: `url(${this.props.items[idx].src})`}}>
						<div className={`oprion-block ${idx === position ? "active" : ""}`}>
							<div className="title">{this.props.items[idx].title}</div>
							<div className="description">{this.props.items[idx].description}</div>
						</div>
					</div>)}
				</div>
				<div className="slider-controlls right" onClick={this.next.bind(this)}></div>
				<div className="position-view">
					{items.map((item, idx) => <span key={idx} className={`position ${idx === position ? "active" : ""}`} onClick={()=> this.setState({
						position: idx 
					})}></span>)}
				</div>
			</div>
		);
	}
}
