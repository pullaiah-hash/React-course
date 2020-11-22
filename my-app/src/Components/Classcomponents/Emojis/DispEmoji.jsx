import React,{Component} from  "react"
import "./emojis.css"
import {Link} from "react-router-dom"

class Dispemoji extends Component{
    state={
        zone:{
            dat:{
               dat:"" 
            }
        }
    }
    componentDidMount=()=>{
        let post
        if(this.state.id){
post=new Date()
        }
        
        //console.log(date)

    }
    render(){
console.log("after render")
         return(
            <div className="Emoj">
               <div className="Emoji">
               <Link to={"/emojititle/"+this.props.id}><h3>{this.props.symbol}{this.props.title}</h3></Link>
                <p>{this.props.desc}</p>
         <p>{this.state.date}</p>
        
               </div>
            </div>
        )
    }
      
}


export default Dispemoji