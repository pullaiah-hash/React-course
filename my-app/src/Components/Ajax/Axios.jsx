import React from "react"
import axios from "axios"
import { useState } from "react"
import "./Axios.css"


function Axios(){

    let [advice,getAdvice]=useState("")
    let [collection,getCollection]=useState([])
   



      const    getApi =()=>{
           
            axios.get("https://api.adviceslip.com/advice").then((response)=>{
          
            //console.log(response)
            let advice  = response.data.slip.advice
            getAdvice(advice=advice)
            getCollection((prevText)=>{
                return [
                    ...prevText,advice
                ]
            })
            console.log(advice)
        }).catch((error)=>{
console.log(error)
        })}
    return(
        <div className="Advice">
             
            
             <h1 className="Heading">{advice}</h1>
<button className="Btn" onClick={getApi}>GetAdvice</button>
           
 
   
        </div>
    )
}

export default Axios