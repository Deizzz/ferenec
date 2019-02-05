import React from 'react';
import { Grid, Row, Col } from "react-bootstrap";
import "./style.scss";

import Slider from "./components/Slider";

export default class index extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
		this.state = {
			items: [{
				src: "http://coolpcwallpapers.com/wp-content/uploads/2014/05/Food-Cake-Strawberries-Fruit-Dessert-Wallpaper-1920x1200.jpg",
				title: 'Тортик',
				description: 'Сказочно вкусный клубничный тортик'
			},
			{
				src: "https://s1.1zoom.ru/b5050/362/368879-sepik_2880x1800.jpg",
				title: 'Пирожко',
				description: 'Пироденки для девочки'
			},
			{
				src: "http://tipichnyjkulinar.com/files/images/groups/original/1/koritsa.jpg?v=1",
				title: 'Корица',
				description: 'Ммммм...'
			}
			]
		}
	}

	render() {
		return (
			<div className="gallery">
				<Slider items={this.state.items}/>
			</div>
		);
	}
}
