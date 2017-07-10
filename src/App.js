import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Students from './students';
import Home from './containers/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Students />
      </div>
    );
  }
}

export default App;
