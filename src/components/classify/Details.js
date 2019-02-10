import React, { Component } from 'react';

class Details extends Component{
    constructor(){
        super();
        this.state={data:'详情页'}
    }
    render(){
        return (<div>{this.state.data}</div>);
    }
}
export default Details;