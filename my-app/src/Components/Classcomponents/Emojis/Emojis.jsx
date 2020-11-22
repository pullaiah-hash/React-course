import React,{Component} from "react"
import {Link} from "react-router-dom"
import emoji from "./emoji"
import Dispemoji from "./DispEmoji"


class Emojis extends Component{

    state={
        
            id:1,
            title:"Smiling Face with Smiling Eyes",
            symbol:"😊",
            description:"Emoji Meaning A yellow face with smiling eyes and a broad, closed smile turning up to rosy cheeks. Often expresses genuine happiness and…"
        
    }

    render(){
        return(
            <div>
{emoji.map((em)=>{
    return <Dispemoji 
    id={em.id}
     title={em.title}
     symbol={em.symbol}
     desc={em.description}
     />
})}
             
              
{/* 
{emoji.map((em,index)=>{
    <Link to={"/"+em.id}>
   return  <Dispemoji 
   symbol={em.title}
     key={index} symbol={em.symbol} 
     desc={em.description}/>
   </Link>
})} */}



            </div>
        )
    }

}

export default Emojis