import React, { Component } from 'react';

import Abc from '../text.jsx';
import './home.css';
class Home extends Component {
    render(){return (
        <div>
            <Abc />
            <div className="MyCarousel">轮播图</div>
            <div className="img1">广告图1</div>
            <div className="homeClass">首页分类</div>
            <div className="yCarousel">垂直轮播图</div>
            <div className="img2">小组大图</div>
            <div className="sing">横向滚动</div>
            首页    
        </div>
    )};
}
export default Home;