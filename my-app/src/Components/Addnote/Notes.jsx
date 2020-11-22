import React from "react"

function Displaynote(props){
    console.log(props)

    return(<div>

    <p>{props.title}</p>
    <p>{props.content}</p>

    </div>)
}

export default Displaynote