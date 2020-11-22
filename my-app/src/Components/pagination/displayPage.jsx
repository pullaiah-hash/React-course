import React from "react"


const Dispage=({currentPost,loading})=>{

if(loading){
    return<p>Loading......</p>
}

    return(<div>

        <ul>
        {currentPost.map((p,index)=>{
            return <li key={index} className="list-group">{p.id}. {p.title}</li> 
         })}
        </ul>
     
         </div>)

 
}

export default Dispage