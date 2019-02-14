import React, { Component } from 'react';

import './App.scss';

import Navbar from './Navbar.jsx';
import {SaSwitch} from './router.js';
import {withRouter} from 'react-router-dom';

import store from '../strore';
console.log(store);

class App extends Component {
  constructor(){
    super();
    this.state ={data:'main'};
  }
  handleClick(porps0,porps1,porps2) {
    //传入时第一个参数指向 this,第二个参数开始才是
    //接收时相反
    //console.log(this.props);
  }
  render() {
    return (
      <div className="App" onClick={this.handleClick.bind(this,1,2)}>
        <div className={this.state.data}>
          <SaSwitch></SaSwitch>
        </div>
        <Navbar xian={this.props}></Navbar>
      </div>
    );
  }
}
App= withRouter(App);
export default App;
