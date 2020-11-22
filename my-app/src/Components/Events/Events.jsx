import React from "react"

function Formevents(){



    return(<div className="Event" >

        <input type="text"
               style={{margin:" 16px auto"}} 
               onInvalid={(e)=>{
                   console.log(e.target)
               }}/>

    </div>)
}

export default Formevents