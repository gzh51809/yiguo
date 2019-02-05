import React from 'react';
import {NavLink} from 'react-router-dom';
import {sum} from './router.js';
function Navbar(){
    let navName=['首页','分类','资讯','购物车','个人主页'];
    return (<div className="sNav">
        {
          sum().map(function(item,index){
            return <NavLink to={item} key={index} activeClassName="navDian">{navName[index]}</NavLink>
          })
        }
    </div>);
}
export default Navbar;