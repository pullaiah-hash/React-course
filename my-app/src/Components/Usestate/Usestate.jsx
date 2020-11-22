import React,{useState} from 'react'


function Hooks(){

let [count,getCount] = useState(0)

console.log(count)
function increase(){
    getCount(count+1)
}





    let styles = {
        border:"2px solid rgb(22, 160, 133)",
        backgroundColor:"rgb(26, 188, 156)",
        margin:"30px",
        padding:"20px",
        color:"#fff",
        textAlign:"center",
        fontSize:"50px"
    }


    return(
        <div style={styles}>
<p>{count}</p>
<button onClick={increase} style={{color:"#8e44ad,",border:"none",padding:"10px"}}>increaseByOne</button>
        </div>
    )
}
export default Hooks