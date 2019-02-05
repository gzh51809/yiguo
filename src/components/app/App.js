import React, { Component } from 'react';
import './App.css';

import Abc from '../text.jsx';
import Func from './func.jsx';
class App extends Component {
  render() {
    return (
      <div className="App">
      <div>
        <Abc />
        <Func />
      </div>
        
      </div>
    );
  }
}
export default App;
