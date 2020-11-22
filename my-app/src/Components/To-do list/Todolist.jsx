import React,{useState} from "react"
import GetListItem from "../List/List"


function Todolist(){

    let [text,getText]=useState(" ")
    let [disText,getDisText]=useState([])
   // let [textArray,getArray]=useState([])

    function getInputValue(e){

        let text = e.target.value
        getText(text)
        console.log('the text is '+text)

    }
    
    function displayText(event){

        event.preventDefault()

     getDisText((prevText)=>{
                  return [
                      ...prevText,text
                  ]
     })
     event.target.text.value=" "
     getText(" ")
    //  getArray(.push(disText))
       
        //console.log("display text array is "+textArray)

    }

    function deleteItem(id){

        console.log(id)

        getDisText(prev=>{

            console.log(prev)                           
            return prev.filter((item,index)=>{
                return index!==id
            })

        })

    }

    return(
        <div style={{margin:"20px"}}>
            <div className="todo"  style={{margin:"auto",
                                    width:"300px",
                                    height:"200px",
                                    border:"1px solid blue",
                                    backgroundColor:"Blue",
                                    textAlign:"center",
                                    paddingTop:"100px",
                                    textAlign:"center"}}>

    {/* <p style={{color:"#fff"}}>  {disText}</p> */}

    <h3>TO-DO list</h3>

            <form action=""  onSubmit={displayText}>
                <input type="text"
                       style={{padding:"10px"}}
                        name="text"
                        onChange={getInputValue}
                        name="text"
                        />
                <button style={{padding:"10px",margin:"10px"}}
                       >Add</button>
            </form>

{/* <ul style={{width:"100px",textAlign:"center"}}>
    {disText.map(text=> <li style={{marginLeft:"100px",width:"100px"}}>{text}</li> )}
</ul> */}
{
    disText.map((text,index)=>{
        return <GetListItem  key={index} text = {text} id={index} onDelete={deleteItem} />
    })
}



            </div>
        </div>
    )
}

export default Todolist

