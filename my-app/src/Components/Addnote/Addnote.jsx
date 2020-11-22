import React,{useState} from "react"
import Displaynote from "./Notes"
function Addnote(){
const [note,getNote]=useState({title:"",content:""})
const [collection,getCollection]=useState([])
function getIContent(e){
let input = e.target.value
getNote(prev=>{
   return {
        ...prev,
        content:input
       }
})
}
function getTitle(e){
    const title = e.target.value
    getNote(prev=>{
        return{
            ...prev,
            title:title
        }
    })
}

    function addContent(){

       getCollection(prev=>{
          
           return[
               ...prev,note
           ]
       }) 
console.log(collection)
    }
    return(

<div style={{margin:"100px"}}>

<div style={{margin:"auto",padding:"20px",width:"500px",backgroundColor:"#d9e4dd",height:"80px"}}>
<input type="text"
       onChange={getTitle} 
       placeholder="add title here......" 
       style={{display:"block",marginBottom:"10px",border:"none",padding:"10px",outline:"none"}}/>
<input type="text"  onChange={getIContent} placeholder="add note here....." style={{border:"none",padding:"10px",outline:"none"}}/>
<button onClick={addContent} style={{backgroundColor:"#ffe05d",borderRadius:"50%",padding:"8px",float:"right",transform:"translate(10px,20px)"}}> Add</button>
    {collection.map((note,index)=>{
return <Displaynote key={index} id = {index} title={note.title} content={note.content}/>
    })}
</div>
</div>
    )
}

export default Addnote