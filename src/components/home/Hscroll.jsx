import React from 'react';
import './H_scroll.css';
import {Icon} from 'antd';

function Hscroll(porps){
    let acg=[1,2,3,4,5];
    return (<div className={porps.class}>
    <img src={porps.img} alt=""/>
        <div className="product-list">
    {
    acg.map(function(params) {
        return (<div className="proitemF" key={params}>
        <img src={porps.img2} alt=""/>
        <div className="proitem">
            <span>自利红樱桃</span>
            <div>
                <span>秒杀39.9元</span>
            </div>
            <div>
                <strong>￥39.9</strong>/454g
            </div>
        </div>
    </div>);
    })
    }
        <p className="more">查看更多<Icon type="right-circle" /></p>
        </div>
    </div>);
}
export default Hscroll;