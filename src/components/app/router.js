import Car from '../car/Car.js';
import Classify from '../classify/Classify.js';
import Home from '../home/Home.js';
import Infor from '../infor/Infor.js';
import IsMe from '../me/IsMe.js';
import List from '../classify/List.js';
import Details from '../classify/Details.js'
import {Route,Switch,Redirect} from 'react-router-dom';
import React from 'react';
//路由模块
function sum(){
    let cheSum=(new SaSwitch()).props.children;
    let arr=[];
    for(let i=0;i<cheSum.length-3;i++){
        arr.push(cheSum[i].props.path);
    }
    return arr;
}

const SaSwitch=()=>{
    return (
        <Switch>
            <Route path="/Home" component={Home}></Route>
            <Route path="/Classify" component={Classify}></Route>
            <Route path="/Infor" component={Infor}></Route>
            <Route path="/Car" component={Car}></Route>
            <Route path="/IsMe" component={IsMe}></Route>
            <Route path="/List" component={List}></Route>
            <Route path="/Details" component={Details}></Route>
            <Redirect from="/" to="/Home"></Redirect>
        </Switch>
    );
}
export {sum,SaSwitch};