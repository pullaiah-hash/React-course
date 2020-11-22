import React,{useState} from "react"


function GetListItems(props){
    let [isDone,getDone]=useState(false)

function handleBreak(event){
    let checked=event.target.checked
    console.log(checked)
    if(event.target.checked===true){
    getDone(prev=>{
   return !prev
    })
    }else{
        getDone(prev=>{
            return !prev
             }) }}

console.log(props)
    return(<div>
       <div style={{display:"flex",justifyContent:"center"}} onClick={()=>props.onDelete(props.id)}>
       <input type="checkbox" onClick={handleBreak}/>  
      <p style={{textDecoration:isDone?"line-through":"none",marginLeft:"10px"}} > {props.text}</p> 
       </div>
    </div>)
}
export default GetListItems