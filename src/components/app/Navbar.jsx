import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {sum} from './router.js';

class Navbar extends Component{
    constructor(){
      super();
      this.state={navName:['首页','分类','资讯','购物车','个人主页'],img:['active','','','','']}
  }
  componentDidMount(){
    this.onclis(sum().indexOf(this.props.xian.location.pathname))
  }
  onclis(pop){
    //console.log(pop);
    //console.log(this.state.img);
    let result = this.state.img.map(x => '');
    result[pop]='active';
    this.setState({img:result})
  }
  styleBlock=()=>{
    if(this.props.xian.location.pathname==='/list'){
      return 'none';
    }else if(this.props.xian.location.pathname==='/details'){
      return 'none';
    }else{
      return 'block';
      
    }
  }
    //console.log(props);
    render(){
      return (<div className="sNav" style={{display:this.styleBlock()}}>
    <div>
    {
      sum().map((item,index)=>{
        return (<NavLink to={item} key={index} >
        <span className="nav_item" onClick={this.onclis.bind(this,index)}>
          <span className={'nav_img nav_img'+index+' nav_img'+index+this.state.img[index]}></span>
          <span className="nav_name">{this.state.navName[index]}</span>
        </span>
        </NavLink>)
      })
    }
    </div>
        
    </div>);
    }
}

export default Navbar;