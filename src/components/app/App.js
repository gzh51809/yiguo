import React, { Component } from 'react';
import './App.css';


import Abc from '../text.jsx';
import Navbar from './Navbar.jsx';
import {SaSwitch} from './router.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Abc />
        <div className="main">
          <SaSwitch></SaSwitch>
        </div>
        <Navbar></Navbar>
      </div>
    );
  }
}
export default App;
