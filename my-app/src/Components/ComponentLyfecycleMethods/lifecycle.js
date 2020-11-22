import React, { Component } from "react"
import counter from "../Counter/counter"
import Person from "./person/person"
class Lifecycle extends Component{
constructor(props){
    super(props)
    this.state={
        counter:0,
        showComponent:false,
        person:[{id:1,name:"charan"},{id:2,name:"rajkumar"}]
    }
    this.createButtonElement=React.createRef()
}

componentDidMount(){
    this.createButtonElement.current.click()
}
  
    //getDerivedStateFromProps
// we will use these when some scensrio that changing the props and upadate te state
//Dont send any http request
//used to update the state depends on outside properties
static getDerivedStateFromProps=(props,state)=> {
console.log(props)
    return  state
    }
    // shouldComponentUpdate
    //it decide the component should render to the dom or not 
    // no http request
    shouldComponentUpdate=(nextProp,nextState)=>{
        console.log("should componentupdate"+nextState)
         return true
    }
    // no http request
    // componentDidMount=()=>{
    //     // Don't send any htttp request here
    //     console.log("[component did mount]")
    // }
    //getSnapshotBeforeUpdate
    // no http request
    //1.rere usecases  2.used at the last minutes of dom updating 3.gives the the snapshot of dom before updating the dom
// get 
    getSnapshotBeforeUpdate=(preProp,preState)=>{
console.log("getSnapshotbeforeupdate"+preState)
return {message:"snapshot"}
}
//  http request done here
componentDidUpdate=(preProp,preState,snapshot)=>{
    console.log("componentdidupdate"+snapshot)
}

    incCounter =()=>{
        //let bl = this.state.showComponent
        console.log("this keywords:"+this.state)
        this.setState({counter:this.state.counter+1,showComponent:!this.state.showComponent})
    }
    
    render(){
        let person=null;

        if(this.state.showComponent){
person=(<Person id={this.state.person[0].id} id={this.state.person[0].name}/>)
        }
        
        console.log("[render method]")
        return(<div>

       {/* // {this.state.showComponent?<Person id={this.state.person[0].id} name={this.state.person[0].name}/>:null} */}
        <p>{this.state.counter}</p>
        {person}
<button onClick={this.incCounter} ref={this.createButtonElement}>inccrementByOne</button>
        </div>)
    }
  
}
 

export default Lifecycle