import React, { Component } from 'react';
import ListItem from '../home/ItemList.js';
import { Menu } from 'antd';

class List extends Component{
    
    constructor(){
        super();
        this.state={data:'123',current: 'mail'}
    }
    handleClick = (e) => {
        //筛选事件
        //console.log('click ', e);
        this.setState({
          current: e.key,
        });
      }
    det=(tas,name)=>{
        //console.log('kkk',tas,name);
        this.props.history.push({pathname:'/details',state:{ 'data': name}});
    }

    render(){
        return (<div>
            <div className="listPageTop">
            <Menu
                onClick={this.handleClick.bind(this)}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="mail" style={{width:'125px',textAlign:'center'}}>
                销量
                </Menu.Item>
                <Menu.Item key="app" style={{width:'125px',textAlign:'center'}}>
                新品
                </Menu.Item>
                <Menu.Item key="alipay" style={{width:'125px',textAlign:'center'}}>
                价格
                </Menu.Item>
            </Menu>
            </div>
            <ListItem det={this.det}>list</ListItem>
            </div>)
    }

}
export default List;