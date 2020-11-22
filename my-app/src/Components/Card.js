import React from 'react'
import pi from '../Math'
import Avatar from "./avatar/avatar"


function Card(props){

let numbers = [2,4,5,6]
let res = numbers.map((n)=>{
  return n*2
})
let anyString = 'Mozilla'

// Displays 'M'
console.log('substring is :'+anyString.substring(0, 6))
console.log('substring is :'+anyString.substring(1, 0))

console.log("The result is "+res)

console.log(props)
    return(
       <div className="card">
           <div className="top">
           <h1 className="name">{props.name}</h1>
           <Avatar  photo= {props.img}/>
           </div>

  <div className="bottom">
  <p className='tell'>{props.tell}</p>
    <p className='mail'>{props.email}</p>
  </div>
       </div>
    )
}

export default Card