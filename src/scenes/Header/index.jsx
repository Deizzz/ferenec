import React from 'react';
import Navbar from "./components/Navbar";
import {Grid, Row} from "react-bootstrap";

import "./style.scss"

const collapseWidth = 770;

export default class index extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
		this.state = {
			height: 0,
			collapse: false,
			hamburger: false
		}
	}

	componentWillMount() {
		this.setState({
			height: window.innerHeight,
			collapse: window.innerWidth < collapseWidth ? true : false,
			hamburger: window.innerWidth < collapseWidth ? true : false,
		});
		window.addEventListener('resize', ()=> {
			console.log("window.clientHeight ", window.innerHeight )
			this.setState({
				height: window.innerHeight,
				collapse: window.innerWidth < collapseWidth ? true : false,
				hamburger: window.innerWidth < collapseWidth ? true : false
			});
		})
	}

	render() {
		return (
			<div className="header-section" style={{height: `${this.state.height}px`}}>
				<Navbar 
					collapse={this.state.collapse}
					open={()=> this.setState({
						collapse: !this.state.collapse 
					})}
					hamburger={this.state.hamburger}
					/>
				<Grid>
					<Row>
						<div className="about-me">
							Я - Петр Ференец, и я делаю <span className="focus">лучшие</span> сладости в Волгограде
						</div>
					</Row>
				</Grid>
				
				<div className="bottom-border"></div>
			</div>
		);
	}
}
