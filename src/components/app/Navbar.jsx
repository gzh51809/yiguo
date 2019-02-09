import React from 'react';
import {NavLink} from 'react-router-dom';
import {sum} from './router.js';
function Navbar(props){
    let navName=['首页','分类','资讯','购物车','个人主页'];
    //console.log(props);
    return (<div className="sNav" style={{display:props.xian.location.pathname==='/list'?'none':'block'}}>
        {
          sum().map(function(item,index){
            return <NavLink to={item} key={index} activeClassName="navDian">{navName[index]}</NavLink>
          })
        }
    </div>);
}
export default Navbar;