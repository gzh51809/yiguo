import React from 'react';
import './list.css';
import listdata from './listData1.json';
//console.log(listdata);

// let items=[{
//     url:require('../../assets/apply.jpg'),
//     name:'新疆阿克苏冰糖心苹果原箱xxxxx',
//     text:'甜蜜内心 天生实力派',
//     saletip:'直降40元',
//     price:99
// }];
let items2=listdata.CommodityList;

function list(props){
    return (
    <div className="mlits">
        {
            items2.map((item,idx)=><div className="mitem" key={idx}>
            <div className="itemUrl">
                <img src={item.SmallPic} alt=""/>
            </div>
            <div>
                <span className="itemName">{item.CommodityName}</span>
                <span className="itemTxt">{item.SubTitle}</span>
                <span className="label" style={{display:item.ShowOriginalPrice?'inline-block':'none'}}>{item.PromotionTag}</span>
                <p className="price">
                    <span><strong>￥{item.SellPrice}</strong>/{item.Spec}</span>
                </p>
            </div>
        </div>)
        }
    </div>);
}
export default list;