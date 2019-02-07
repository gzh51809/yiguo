import React, { Component } from 'react';

import Abc from '../text.jsx';
import './home.css';
import Hscroll from './Hscroll.jsx';
import { Carousel } from 'antd';

class Home extends Component {
    constructor(){
        super();
        this.state ={img1:require('../../assets/img2_1.jpg'),
        img2:require('../../assets/yt.jpg'),
        CarouselData:[1,2,3,4],
        rimg,
        news:require('../../assets/news.png'),
        chun:require('../../assets/chun.png'),
        chunData:[1,2,3,4,5,6,7,8]
    };
      }
    render(){return (
        <div>
            <Abc />
            <div className="MyCarousel">
                <Carousel autoplay>
                {
                    this.state.CarouselData.map(function(item){
                        return <div key={item}><img src={rimg(item)} /></div>
                    })
                }
                    
                </Carousel>
            </div>
            <div className="img1"></div>
            <div className="homeClass">
            {
                this.state.chunData.map((idx)=>{
                    return (<div className="one" key={idx}>
                        <img src={this.state.chun} alt=""/>
                        <p>新鲜水果</p>
                    </div>)
                })
            }
                
            </div>
            <div className="yCarousel">
            <img src={this.state.news} alt="" width="68" height="13"/>
            <Carousel vertical autoplay dots="false">
                <div><p>营业资质公示，详情请点击查询</p></div>
                <div><p>工银信用卡用工行e支付限时满100减30</p></div>
                <div><p>过年不打烊 抢100元券！</p></div>
                <div><p>春节不打烊配送公告</p></div>
            </Carousel>
            </div>
            <div className="img2">小组大图</div>
            <Hscroll class="sing" img={this.state.img1} img2={this.state.img2}></Hscroll>
            <p style={{height:"100px"}}>首页</p>  
        </div>
    )};
}
export default Home;

function rimg(url){
    return require('../../assets/c'+url+'.jpg');
}