import React, { Component } from 'react';

import './App.scss';

import Navbar from './Navbar.jsx';
import {SaSwitch} from './router.js';
import {withRouter} from 'react-router-dom';

import {connect,ReactReduxContext} from 'react-redux'
// import store from '../strore';
// console.log(store);
// console.log(store.getState());

class App extends Component {
  constructor(){
    super();
    this.state ={data:'main'};
  }
  static contextType= ReactReduxContext;//通过静态属性获得
  handleClick(porps0,porps1,porps2) {
    //传入时第一个参数指向 this,第二个参数开始才是
    //接收时相反
    //console.log(this.props);
    this.props.dispatch({
      type:'QQ',
      payload:{fid :'99',name:'zhangsan'}
    });
  }
  componentDidMount(){
    //console.log(this.refs)
    console.log('app-this',this);
    this.context.store.subscribe(()=>{
      console.log('监听开启');
    });
  }
  render() {
    return (
      <div className="App" onClick={this.handleClick.bind(this,1,2)}>
        <ReactReduxContext.Consumer>
          {
            context=>{
              //通过组件获得
              console.log('context:',context);
            }
          }
        </ReactReduxContext.Consumer>
        <div className={this.state.data}>
          <SaSwitch></SaSwitch>
        </div>
        <Navbar xian={this.props}></Navbar>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log('connect:',state);
  return {...state}
}
//给默认方法dispatch重定义
function mapdispatchToProps(dispatch) {
  return {dispatch}
}
App = connect(mapStateToProps,mapdispatchToProps)(App);
App = withRouter(App);

export default App;
