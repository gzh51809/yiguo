import React from 'react';
import './list.css';
let items=[{
    url:require('../../assets/apply.jpg'),
    name:'新疆阿克苏冰糖心苹果原箱xxxxx',
    text:'甜蜜内心 天生实力派',
    saletip:'直降40元',
    price:99
}];
function list(props){ 
    return (
    <div className="mlits">
        {
            props.sum.map((idx)=><div className="mitem" key={idx}>
            <div className="itemUrl">
                <img src={items[0].url} alt=""/>
            </div>
            <div>
                <span className="itemName">{items[0].name}</span>
                <span className="itemTxt">{items[0].text}</span>
                <span className="label">{items[0].saletip}</span>
                <p className="price">
                    <span><strong>￥{items[0].price}</strong>/4.5kg</span>
                </p>
            </div>
        </div>)
        }
    </div>);
}
export default list;