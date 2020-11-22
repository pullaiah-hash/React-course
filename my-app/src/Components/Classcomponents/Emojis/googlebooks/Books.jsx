import React from "react"
import { useState } from "react"
import { render } from "react-dom"
import "./book.css"
function Book(props){
let [book,getBooks]=useState({})
 console.log(props.id)
return(
<div className="Book">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSolaUO9rDcRbusOx6ZRF-aLFdH2ypOcH3ljg&
usqp=CAU" alt=""/>
<div className="shakes">
<p>books.google.co.in</p>
<p>William shakesphere</p>
<p>Horald boom</p>
<p>Presents a collection of critical essays on the works of William Shakespeare.</p>
<button>preview</button>
<button>More editions</button>  
</div> 
</div>
 )
}
export default Book