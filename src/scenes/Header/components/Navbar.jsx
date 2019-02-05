import React from 'react';
import Logo from "./logo.png";

export default class Navbar extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
		collapse: React.PropTypes.bool,
		open: React.PropTypes.func,
		hamburger: React.PropTypes.bool
	};

	constructor(props) {
		super(props);
	}

	render() {
		const {collapse, hamburger} = this.props;
		return (
			<div className="navbar">
				{hamburger && <div className="hamburger">
					<a className={`menu-toggle ${collapse ? "" : "on"}`} onClick={()=> {
						this.props.open();
					}}>
						<span className="bar one"></span>
				        <span className="bar two"></span>
				        <span className="bar three"></span>
					</a>
				</div>}
				{!collapse && <ul>
					<li>
						<a href="">Галерея</a>
					</li>
					<li>
						<a href="">Обо мне</a>
					</li>
					<li>
						<a href="" className="logo">
							Ferenecz
						</a>
					</li>
					<li>
						<a href="">Контакты</a>
					</li>
					<li>
						<a href="#make-order">Сделать заказ</a>
					</li>
				</ul>}
			</div>
		);
	}
}
