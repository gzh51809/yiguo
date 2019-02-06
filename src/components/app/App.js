import React, { Component } from 'react';
import "antd/dist/antd.css";
import './App.css';

import Navbar from './Navbar.jsx';
import {SaSwitch} from './router.js';
class App extends Component {
  constructor(){
    super();
    this.state ={data:'main'};
  }
  handleClick(porps0,porps1,porps2) {
    //传入时第一个参数指向 this,第二个参数开始才是
    //接收时相反
    console.log(porps0,porps1,porps2);
  }
  render() {
    return (
      <div className="App" onClick={this.handleClick.bind(this,1,2)}>
        <div className={this.state.data}>
          <SaSwitch></SaSwitch>
        </div>
        <Navbar></Navbar>
      </div>
    );
  }
}
export default App;
