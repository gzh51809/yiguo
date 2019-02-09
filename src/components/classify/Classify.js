import React, { Component } from 'react';
import {Menu,Icon} from 'antd';
import "antd/dist/antd.css";
import './classify.css';
import classLIst from './itemdata.json';
//console.log(classLIst.CategoryList);

class Classify extends Component {
    constructor(){
        super();
        this.state ={
            title:classLIst.CategoryList,
            sid:['ad7f227d-73c0-44a2-9edd-924006deb134'],
            xitem:classLIst.CategoryList[0].Childs
        }
    }
    
    
    oppo(nextProps){
        console.log(nextProps);
        this.setState({
            xitem:classLIst.CategoryList[nextProps.key].Childs
        })
    }
    componentDidMount(){
        //console.log(12345);
    }
    itemClick(pop,sta){
        console.log(pop);
        this.props.history.push({pathname:'/list',state:{ 'sid': pop}});//传递的state格式要按内置模板
    }
    render(){return (
        <div className="classify">
            <div className="classTop">
                <input type="text" placeholder="请输入商品名称"/>
                <span>搜索</span>
                <p><Icon type="search" /></p>
            </div>
            <div className="classBox">
                <div className="classLeft">
                    <Menu 
                    defaultSelectedKeys={['0']}
                    mode="inline"
                    onClick={this.oppo.bind(this)} 
                    >
                        {
                        this.state.title.map((item,idx)=>{
                                return (
                                    <Menu.Item key={idx}>{item.CategoryName}</Menu.Item>
                                )
                        })  
                        }
                    </Menu>
                </div>
                <div className="classRight">
                {
                    this.state.xitem.map((item)=>{
                        return (
                            <div className="classItem" key={item.CategoryId} onClick={this.itemClick.bind(this,'sta')}>
                                <img src={item.PictureUrl} alt=""/>
                                <span>{item.CategoryName}</span>
                            </div>
                        )
                    })
                }
                    
                </div>
            
            </div>
            
        </div>
    )};
}
export default Classify;