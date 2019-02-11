import React, { Component } from 'react';
import './me.scss';
import me from './isMe.json'
class IsMe extends Component {
    constructor(){
        super();
        this.state={data:'个人页',tou:require('../../assets/squirrel.jpg'),me_link:me.Data.UserInfo.OrderIcons,me_link2:me.Data.UserInfo.IconList}
    }
    componentDidMount(){
        //console.log(me.Data.UserInfo.OrderIcons);
        //console.log(me.Data.UserInfo.IconList);
    }
    render(){return (
        <div className="me_main">
            <div className="me_head">
                <p><img src={this.state.tou} alt=""/></p>
                <span>注册/登录</span>
                <i></i>
                <div className="yue">
                    <div className="yue_class">
                        <p>
                            <span>-</span>
                            <span>卡包余额</span>
                        </p>
                        <p>
                            <span>-</span>
                            <span>悠币</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="me_link">
            {
                this.state.me_link.map((item,idx) => {
                    return<div key={idx}>
                        <img src={item.IconUrl} alt=""/>
                        <span>{item.IconText}</span>
                    </div>
                })
            } 
            </div>
            <div className="me_link2">
            {
                this.state.me_link2.map((item,idx)=>{
                    return <div key={idx}>
                    <img src={item.IconUrl} alt=""/>
                    <span>{item.IconName}</span>
                </div>
                })
            }
                
            </div>
        </div>
    )};
}
export default IsMe;