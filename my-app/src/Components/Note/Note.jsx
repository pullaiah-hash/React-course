import React,{useState} from "react"
let isDOne = false

// function strike(){
//     isDOne=true
// //document.getElementById("info").style.textDecoration="line-through"
// }
function unStrike(){
    isDOne=false
    //document.getElementById("info").style.textDecoration=null
    }

function Note(){

    //let isDOne = false
    const [isDone,getBoolean]=useState(false)
    function unStrike(){
        getBoolean(isDOne=false)
        //document.getElementById("info").style.textDecoration=null
        }
    function strike(){
        getBoolean(isDOne=true)
    }

let breakThrough = {
    textDecoration:"line-through"
}

    return(
        <div>


            <p style={isDOne?breakThrough:null} id="info">Buy milk</p>
            <button onClick={strike}>Get strike</button>
            <button onClick={unStrike}>Get unstrike</button>
        </div>
    )
}

export default Note
