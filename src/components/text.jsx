import React, { Component } from 'react';
import {Icon} from 'antd';
import './text.css'
class text extends Component {
  render() {
    return (
      <div className="tou">
        <p className="dlName">广州</p>
        <p className="jiantou"></p>
        <p className="tuoSeach"><Icon type="search" /></p>
      </div>
    );
  }
}

export default text;