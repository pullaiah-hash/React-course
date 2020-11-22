import React, { Component } from "react"
import {connect} from "react-redux"
import * as actionType from "../actions/actions"
//import {increment,add}from "../actions/actions"

class Counter extends Component{

    render(){
        console.log(actionType)
        const myObject = new Object();
myObject["firstName"]="kalandhar"
myObject["lastName"]="Garikapati"
myObject["age"]=21
console.log("Length is "+Object.keys(myObject).length)

Object.size =function(obj){
var size=0,key
for( key in obj){
    if(obj.hasOwnProperty(key)){
         size++
    }
}
return size
}

let size = Object.size(myObject)
console.log("the Size of an object is :"+size)
        return(
 <div>

<p>{this.props.ctr}</p>
<button className="btn btn-primary" onClick={this.props.getIncreaseCounter}>incrementByOne</button>
<button className="btn btn-success ml-1" onClick={this.props.onIncrementBy5}>ADD 5</button>
<button className="btn btn-danger ml-1"onClick={this.props.onStoreResult}>getResult</button>
<ul>
    {
        this.props.res.map((count,index)=>{
        return<li  key={index}onClick={()=>this.props.onDeleteItem(index)}>{count.advice}</li>
        })
    }
</ul>
</div>
  )
    }
}
const mapStateToProps =(state)=>{
    return{
      ctr:state.counter,
      res:state.result
    }}
const mapDispatchToProps=(dispatch)=>{
    return{
        getIncreaseCounter:()=>dispatch(actionType.inc()),
        onIncrementBy5:()=>dispatch(actionType.addition(5)),
        onStoreResult:()=>dispatch(actionType.saveResult()),
        onDeleteItem:(id)=>dispatch({type:"DELETE_ITEM",payload:id})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)