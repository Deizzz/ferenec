import React from 'react';
import PropTypes from 'prop-types';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import "./style.scss";

export default class Header extends React.Component {
	static propTypes = {
		name: PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Navbar>
			  <Navbar.Header>
			    <Navbar.Brand>
			      <a href="#/cabinet">Личный кабинет</a>
			    </Navbar.Brand>
			  </Navbar.Header>
			  <Navbar.Collapse>
			    <Nav pullRight>
     			 <NavDropdown eventKey={2} title="Владимир" id="basic-nav-dropdown">
			        <MenuItem eventKey={2.1}>Профиль</MenuItem>
			        <MenuItem divider />
			        <MenuItem eventKey={2.2}>Выйти</MenuItem>
			      </NavDropdown>
    			</Nav>
			   </Navbar.Collapse>
			</Navbar>
		);
	}
}

