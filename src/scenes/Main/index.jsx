import React from 'react';
import {Grid, Col, Row} from "react-bootstrap";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//Style
import "./animation.scss";
import "./style.scss";

//Components
import Header from "../Header";
import MakeOrder from "../MakeOrder";
import Footer from "../Footer";
import Gallery from "../Gallery";
import AboutMe from "../AboutMe";
import Reviews from "../Reviews";

//Components
import Card from "../../components/Card";

export default class Main extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
				<AboutMe />
				<Gallery />
				<Reviews />
				<MakeOrder />
				<Footer />
			</div>
		);
	}
}
