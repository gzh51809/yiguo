import React, { Component } from 'react';
import './details.scss'
import { InputNumber,Rate,Carousel  } from 'antd';
class Details extends Component{
    constructor(){
        super();
        this.state={data:'详情页',img:require('../../assets/squirrel.jpg'),img2:require('../../assets/yt.jpg'),itemData:{CommodityName:'',OriginalPrice:'',SmallPic:'',Spec:'',SubTitle:''}}
    }
    componentDidMount(){
        console.log(777);
        try {
            this.setState({itemData:this.props.location.state.data},()=>{
                //console.log(this.state);
            });
            this.setState({img2:this.props.location.state.data.SmallPic},()=>{
                //console.log(this.state);
            })
        } catch (error) {
            //console.log('未传参');
        }
        
    }
    onChange(){
        console.log('变化');
        
    }
    clis=()=>{
        //console.log(this.props.history);
        
        //this.props.history.replace({pathname:'/details/:id=49',state:{ 'data': '890'}});
    }
    render(){
        return (<div className="details">
            <div className="details_g">
                <i className="close"></i>
                <i className="ygLogo"></i>
                <div>
                    <p>易果生鲜</p>
                    <p>新人立享受80元优惠券</p>
                </div>
                <span>立即打开</span>
            </div>
            <div className="MyCarousel details_banner">
            <Carousel autoplay>
                <div><img src={this.state.img2} alt=""/></div>
                <div><img src={this.state.img2} alt=""/></div>
                <div><img src={this.state.img2} alt=""/></div>
            </Carousel>
            </div>
            <div className="productInfor">
                <p>{this.state.itemData.CommodityName}</p>
                <p>{this.state.itemData.SubTitle}</p>
                <div><span>￥{this.state.itemData.OriginalPrice}</span>
                <span>产地：内蒙古</span>
                </div>
                <p>不支持7天无理由退货</p>
            </div>
            <div className="norms">
                <div>
                    规格<span>{this.state.itemData.Spec}</span>
                </div>
                <div>
                    <span>数量</span><InputNumber min={1} max={100000} defaultValue={3} onChange={this.onChange} />
                </div>
            </div>
            <div className="address">
                <p>送至</p>
                <div>
                    <span> <i></i>广东 广州市 天河区</span>
                    <span><span>有货</span>20:00 前完成订单，预计明日(2月12日)送达</span>
                </div>
            </div>
            <div className="evaluate">
                <div className="evaluate_head">
                    <div>评论（999）</div>
                    <div>查看全部<i></i></div>
                </div>
                <div className="ev_content">
                    <div>
                        <img src={this.state.img} alt=""/>
                        <div>
                            <span>123456</span>
                            <Rate defaultValue={3} />
                        </div>
                    </div>
                    <div>
                        <span className="ev_date">2019-02-09</span>
                    </div>
                    
                </div>
                <div className="ev_ping"><span>超时未评价，系统默认好评</span></div>
            </div>
            <div className="ev_duo">
                <span>查看图文详情</span>
            </div>
            <div className="footer1">
                <div>
                    <div>
                        <span><i></i>首页</span>
                        <span><i></i>购物车</span>
                    </div>
                    <div>加入购物车</div>
                </div>
            </div>
        </div>);
    }
}
export default Details;