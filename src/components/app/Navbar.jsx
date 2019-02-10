import React from 'react';
import {NavLink} from 'react-router-dom';
import {sum} from './router.js';
console.log(sum());

function Navbar(props){
    let navName=['首页','分类','资讯','购物车','个人主页'];
    //console.log(props);
    return (<div className="sNav" style={{display:props.xian.location.pathname==='/list'&&'./details'?'none':'block'}}>
    <div>
    {
      sum().map(function(item,index){
        return (<NavLink to={item} key={index}>
        <span className="nav_item" >
          <span className={'nav_img nav_img'+index} onClick={nav2.bind(this)}></span>
          <span className="nav_name">{navName[index]}</span>
        </span>
        </NavLink>)
      })
    }
    </div>
        
    </div>);
    function nav2(name){
      //console.log('navDian'+props.xian.location.pathname);
      try{
        console.log(name);
      }catch{
        console.log('报错');
        
      }
      
      //return 'navDian'+props.xian.location.pathname;
    }
}

export default Navbar;