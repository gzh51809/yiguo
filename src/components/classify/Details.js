import React, { Component } from 'react';
import './details.scss'
import { InputNumber,Rate  } from 'antd';
class Details extends Component{
    constructor(){
        super();
        this.state={data:'详情页',img:require('../../assets/squirrel.jpg')}
    }
    componentDidMount(){
        console.log(777);
        try {
            //console.log(this.props.location.state.data);
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
            <div className="details_banner"></div>
            <div className="productInfor">
                <p>澳奎内蒙羔羊肉卷250g</p>
                <p>没有羊肉卷的火锅是假的</p>
                <div><span>￥25</span>
                <span>产地：内蒙古</span>
                </div>
                <p>不支持7天无理由退货</p>
            </div>
            <div className="norms">
                <div>
                    规格<span>250g/盒</span>
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
            <div className="footer"></div>
        </div>);
    }
}
export default Details;