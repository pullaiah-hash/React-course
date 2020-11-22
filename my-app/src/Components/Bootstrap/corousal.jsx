import React from "react"
import "./corousel.css"


const Corousel= ()=>{

  let styleCorousel={
    
    height:"200px",
    padding:"5% 10%",
    textAlign:"center"
  }
    return(<div>
  
  
  <hr/>
  
  <div id="carouselExampleSlidesOnly" style={styleCorousel} className="carousel slide " data-ride="carousel" >
  <div className="carousel-inner">
    <div className="carousel-item active" style={{backgroundColor:"red"}}>
        <img src="..." className="d-block w-100" alt="first slide"/>
    </div>
    <div className="carousel-item " style={{backgroundColor:"green"}}>
      <img src="..." className="d-block w-100" alt="secound slide"/>
    </div>
    <div className="carousel-item" style={{backgroundColor:"yellow"}}>
      <img src="..." className="d-block w-100" alt="Third slide"/>
    </div>
  </div>
  <p className="m-5">lorem</p>
</div>
  
  
 
  
  </div>)

}


export default Corousel