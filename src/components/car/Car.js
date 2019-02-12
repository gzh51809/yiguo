import React, { Component } from 'react';
import './css.scss';
import { InputNumber  } from 'antd';
let data=[{
    dian:true,
    pice:32},
    {dian:false,
    pice:33}];

class Car extends Component {
    constructor(){
        super();
        this.state={img:require('../../assets/yt.jpg'),itemData:data,quansss:false}
    }
    oncheck=(idx,_this)=>{
        //console.log(sta,tda);
        let databo=this.state.itemData;
        databo[idx].dian=!databo[idx].dian;
        this.setState({itemData:databo},()=>{
            //console.log(this.state);
            this.setState({quansss:this.quanx()},()=>{
                //console.log(this.state);
                
            });
        });
    }
    quanx(){
        let flag=true;
        this.state.itemData.map((item)=>{
            if(!item.dian)
                flag=false;
            return item;
        });
        return flag;
    }
    quana(){
        let flag=!this.state.quansss;
        this.setState({quansss:flag},()=>{
            let newData=this.state.itemData.map((item)=>{
                item.dian=flag;
                return item;
            });
            console.log(newData);
            this.setState({itemData:newData});
        });
        
    }
    // componentWillReceiveProps(oldid){
    //     console.log(oldid,123);
    // }
    
    render(){return (
        <div className="cark">
            <span className="carls">登录后可同步购物车内商品</span>
            <div className="car_g">全场满100元包邮</div>
            {
                this.state.itemData.map((item,idx)=>{
                    return<div className="car_item" key={idx}>
                        <span onClick={this.oncheck.bind(this,idx)}><i className={item.dian?'check':'check1'}></i></span>
                        <div className="car_img"><img src={this.state.img} alt=""/></div>
                        <div>
                            <div><span>原膳南美白虾仁（中）250g</span>
                            <span><i className="del"></i></span>
                            </div>
                            <div><span>$32.90</span><span><InputNumber min={1} max={100000} defaultValue={3} onChange={this.onChange} /></span></div>
                        </div>
                    </div>
                })
            }
            

            <div className="guess">
            <div>
                <span className="quanx" onClick={this.quana.bind(this)}><i className={this.state.quansss?'check':'check1'}></i>全选</span>
                <div>
                    <div>
                        <span className="car_he">合集（不含运费）：<span>￥68</span></span>
                        <span className="car_hui">已优惠：￥0元</span>
                    </div>
                    <p>去结算（2）</p>
                </div>
            </div>
            </div>
        </div>
    )};
}
export default Car;