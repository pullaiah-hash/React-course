import React, { Component } from "react"

class Person extends Component{

    constructor(props){
        super(props)
        this.inputElemetRef=React.createRef()
    }

componentDidMount(){
    // document.querySelector("#username").focus()
    // this.inputElement.focus()
    this.inputElemetRef.current.focus()
    console.log()
}

    render(){
      
        return(<div>
            <span>{this.props.id}</span>
        <span>{this.props.name}</span>
        <input 
        type="text"
         placeholder=""
         id="username"/><br/>
          <input 
        type="email"
        // ref={(inputEle)=>{this.inputElement=inputEle}}
         placeholder=""
         id="email"/><br/>
          <input 
        type="password"
        ref={this.inputElemetRef}
         placeholder=""
         id="password
         "/>
        </div>)
    }
}

export default Person