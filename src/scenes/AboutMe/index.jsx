import React from 'react';
import {Grid, Row } from "react-bootstrap";
import Item from "./components/Item";

import "./style.scss";

export default class index extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
		this.state = {
			items: [{
				icon: "https://cdn.onlinewebfonts.com/svg/img_431547.png",
				title: "Только лучшие продукты",
				description:"В своих десертах я использую только самые качественные продукты"
			},{
				icon: "http://cdn.onlinewebfonts.com/svg/img_514176.png",
				title: "Индивидуальный подход",
				description:"Вкусняшка будет именно такой, какой хотите ВЫ"
			}]
		}
	}

	render() {
		const {items} = this.state;
		return (
			<div className="about-me-screen">
				<h2 className="screen-title">Что делает мои вкусняшки особенными?</h2>
				<Grid>
					<Row>
						{items.map((item, idx) =>{
							return <div className="col s6">
								<Item key={idx} item={item}/>
							</div>})}
						{/*<div className="col s3">
							{items.map((item, idx) =>{
								if (idx%2 === 0) 
									return <div className="col s3">
								<Item key={idx} item={item}/>
							</div>})}
							
						</div>
						<div className="col s3">
							
						</div>
						<div className="col s3">
							{items.map((item, idx) =>{
								if (idx%2 === 1) 
									return <div className="col s3">
								<Item key={idx} item={item}/>
							</div>})}
						</div>*/}
					</Row>
				</Grid>
			</div>
		);
	}
}
