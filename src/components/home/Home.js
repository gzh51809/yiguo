import React, { Component } from 'react';

import Abc from '../text.jsx';
import './home.css';
import Hscroll from './Hscroll.jsx';
import ItemList from './ItemList.js';
import { Carousel,Spin  } from 'antd';
import axios from 'axios';

import {connect} from 'react-redux'

import listdata from './listData1.json';


//let items3=listdata.CommodityList.concat();



class Home extends Component {
    constructor(){
        super();
        this.state ={img1:require('../../assets/img2_1.jpg'),
        img2:require('../../assets/yt.jpg'),
        CarouselData:[1,2,3,4],
        rimg,
        news:require('../../assets/news.png'),
        chun:require('../../assets/chun.png'),
        chunData:[1,2,3,4,5,6,7,8],
        items2:listdata.CommodityList,
    };
      }
    handleScroll(event){
        //滚动事件
        //console.log('123',event.target);
    }
    componentDidMount(){
        // console.log(this.refs)
        
        
        
        axios.get('http://127.0.0.1:3001/789')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        window.addEventListener('scroll',()=>{
            //console.log(this.refs.bot.offsetTop);
            let sc=window.scrollY;
            let wh=window.innerHeight
            let mok = this.refs.mok.offsetHeight;
            if((sc+wh)>mok){
                console.log('到底了');
                // this.setState({ 
                //     items3:this.state.items2
                // });
                //this.state.chunData
            }
            //console.log(,window.innerHeight,this.refs.mok.offsetHeight);
        });
    }
    render(){return (
        <div ref="mok" className="mok" onScroll={this.handleScroll.bind(this)}>
            <Abc />
            <div className="MyCarousel">
                <Carousel autoplay>
                {
                    this.state.CarouselData.map(function(item){
                        return <div key={item}><img src={rimg(item)} alt=""/></div>
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
            
            <Hscroll class="sing" img={this.state.img1} img2={this.state.img2}></Hscroll>
            <div className="rq"></div>
            <ItemList sum={this.state.items2}/>
            <div className="bot" ref="bot" style={{height:"100px"}}><Spin /></div>  
        </div>
    )};
}

export default Home;


function rimg(url){
    return require('../../assets/c'+url+'.jpg');
}