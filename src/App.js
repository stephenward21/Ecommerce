import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './containers/Home';
import Register from './containers/Register';

class App extends Component {
  render() {
    return (
    	<Router>
    		<div className="App">
    			<NavBar />
    			<div className="container main">
    				<Route exact path="/" component={Home} />
    				<Route exact path="/register" component={Register} />
    			</div>
    		</div>
    	</Router>
    );
  }
}

export default App;
