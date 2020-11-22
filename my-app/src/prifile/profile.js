import React, { Component } from "react"
import contacts from  "../Components/contact"
import {connect} from "react-redux"
class Profile extends Component{
   state={
        
      id:1,
      title:"Smiling Face with Smiling Eyes",
      symbol:"😊",
      description:"Emoji Meaning A yellow face with smiling eyes and a broad, closed smile turning up to rosy cheeks. Often expresses genuine happiness and…"
}

componentDidMount=()=>{
   // let data = this.props.match.params.id 
 
}
   render(){
      
     console.log(this.props.cnts)
 return(
 <div>
<input type="text" id="name" placeholder="Enter text"/>
<button onClick={this.props.addContacts}>addcontact </button>
<button onClick={this.props.getProfileById}>getbyid</button>

 </div>
 )

   }
}

let mapStateToProps=(state)=>{
   return{
      cnts:state.contacts
   }

}
let mapDispatchToProps=(dispatch)=>{
  
 return{
   addContacts:()=>dispatch({type:"ADD_CONTACTS",data:contacts}),
   getProfileById:()=>dispatch({type:"GET_DETAILS",data:2})
 }

}
export default connect(mapStateToProps,mapDispatchToProps)(Profile)