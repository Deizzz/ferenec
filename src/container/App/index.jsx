import React, { Component } from 'react';
import Axios from 'axios';
import Galactica from "../../resources/milky_way.png";
//Font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel, idCard } from '@fortawesome/free-solid-svg-icons'
// library.add(idCard)
//Styles
import './App.css';
import './animation.scss';
//Grid
import { Grid, Row, Col } from "react-bootstrap"; 
import Animation from 'react-addons-css-transition-group';
import Header from "./components/Header";
//Components

class App extends Component {

  static childContextTypes = {
      router : React.PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  getChildContext() {
    return {
        router:this.props.router
    };
  }

  componentDidMount() {
  }

  render() {
    return (
		  <div>
        <div className="main">
          {this.props.children}
        </div>
		  </div>
    );
  }
}

export default App;
