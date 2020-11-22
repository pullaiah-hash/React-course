import React from 'react'
import { useState } from 'react'
let isRigister = true
function Login(){
let [isColor,getColor]=useState(true)
function handleOnMouseOutEvent(){
    getColor(false)
console.log("onmouseover")
}
function handleMouseOverEvent(){
    getColor(true)
}
let bgColor={backgroundColor:"black"}
    return(
        <div className="login">
            <form action="">
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            {isRigister===false&&<input type="password" placeholder="re-entred-password"/>}
            
    <button onMouseOver={handleOnMouseOutEvent}
              onMouseOut={handleMouseOverEvent}

            style={{backgroundColor:isColor?"white":"black"}}
        
            >{isRigister===false?"Rigister":"Login"}</button>
            </form>
        </div>
    )
}

export default Login