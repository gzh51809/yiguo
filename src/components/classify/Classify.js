import React, { Component } from 'react';
import {Menu} from 'antd';
import "antd/dist/antd.css";
import './classify.css';
class Classify extends Component {
    render(){return (
        <div className="classify">
            <div>
                <Menu 
                defaultSelectedKeys={['1']}
                mode="inline">
                    <Menu.Item key="1">菜单项</Menu.Item>
                    <Menu.Item key="2">菜单项</Menu.Item>
                </Menu>
            </div>
            <div>
            </div>
        </div>
    )};
}
export default Classify;