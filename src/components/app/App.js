import React, { Component } from 'react';
import './App.css';
import './ab.scss';

import Abc from '../text.jsx';

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

function Func(){
  return <h1>函数组件</h1>;
}
export default App;
