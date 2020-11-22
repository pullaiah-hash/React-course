import React from "react"
import { Component } from "react";
import "./google.css"
import Item from "../Components/backbutton/backbutton"
//import { useHistory } from "react-router-dom";


class Google extends Component{

goToTop=()=>{
  console.log("scroll to top")
  setTimeout(()=>{
    window.scrollTo(0, 0)
  },2000)
}
constructor(props) {
  super(props)
  this.childDiv = React.createRef()
}

// componentDidMount = () => this.handleScroll()

// componentDidUpdate = () => this.handleScroll()

// handleScroll = () => {
//   const { index, selected } = this.props
//   if (index === selected) {
//     setTimeout(() => {
//     this.childDiv.current.scrollIntoView({ behavior: 'smooth' })
//     }, 500)
//   }
// }

    render(){
     // console.log("Move"+ this.childDiv.current.)
      //let history = useHistory()
//history.goBack()
        return(<div   >
<div className="google" >  
<nav className="navbar navbar-expand-lg p-0 m-0" >
  <a className="navbar-brand" href="#">
      <img  style = {{width:"200px",height:"50%" }}className="p-0 m-0" src="https://workspace.google.com/static/img/google-workspace-logo.svg?cache=1d66531" alt=""/>
  </a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNav" >
    <ul className="navbar-nav " >
    
      <li className="nav-item  ">
        <a className="nav-link" href="#">Contact sale <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Start free trial</a>
      </li>
     
    </ul>
  </div>
</nav>
<hr/>
<nav className="navbar navbar-expand-lg navbar-light p-0 m-0">
  {/* <a className="navbar-brand" href="#">Overview</a> */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNav">
    <ul className="navbar-nav ">
    <li className="nav-item">
        <a className="nav-link " href="#" tabindex="-1" >Overview</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="#">What's included <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Security</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#" tabindex="-1" >Resources</a>
      </li>
    </ul>
  </div>
</nav>
</div>
<div className="container-fluid" style={{backgroundColor:"#f2efea"}}>
    <div className="row mt-1">
        {/* content */}
        <div className="col-lg-6 p-0 ">
<img className="img-1" src="https://i.ytimg.com/vi/Itp1ylvT6o4/maxresdefault.jpg" alt=""/>
        </div>
        
        <div className="side col-lg-6 " >
            
            <h2>Sites</h2>
            <p>Effortlessly create impactful team sites</p>
            <p>Collaboratively create engaging, high-quality sites for your team, project or event. The sites look great on every screen, from desktop to smartphone. All without learning design or programming.</p>
            <button className="btn btn-primary">Start free trial</button>
        </div>
    </div>
</div>

<div className="secound row ">
<div className="side-2 col-lg-6 ">

    <h2 style={{fontSize:"50px"}}>Create a site, no programming or design skills needed</h2>
    <p>Sites makes it simple to exhibit your team's work, with easy access to all your content from Google Workspace - whether it's a Drive folder, Doc, or even shared Calendar.</p>
</div>
<div className="col-lg-6">
    <img  className="img-2" src="https://lh3.googleusercontent.com/Nq6RSZCX5CC_Jf2rCkRfmiLLwPVOMaMB_4otD3bYmGjb3jcrDCQ0nt0wxpr5FNTi6ZvUCg1Esh9MksJh7OpCGP0NeTigeU0nZ2kK2w=w768" alt=""/>
</div>
</div>
{/* third-row */}
<div className="secound row  " style={{backgroundColor:"#f2efea"}}>
<div className="side-2 col-lg-6 ">
<img  class="img-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxha3F1C-pR1j3Tvf0JspCWH2TaE2wmaXGTQ&usqp=CAU" alt=""/>
   
</div>
<div className="col-lg-6">
<h2 style={{fontSize:"50px"}}>Your content automatically looks its best across devices</h2>
    <p>Carefully created themes help make your content stand out. Sites intelligently optimizes your work so it looks great on desktop, tablet, and mobile.</p> 
</div>
</div>
<div className="row fourth">
    <div className="col-lg-4">
<h3 >Move, drag and drop, edit, done</h3>
<p className="mt-3">Creation and editing is extremely simple: just click, drag or drop. The design will rearrange automatically with a grid layout. Everything fits into the best place, and is simple to move, resize, or rearrange.</p>
    </div>
    <div className="col-lg-4">
    <h3>Designed for collaboration</h3>
    <p className="mt-3">Sites makes collaborating easy with real time co-editing and the same powerful sharing controls you're used to in Drive and Docs. Just like in Docs, you can work together and see each other’s changes in real-time as you type.</p>
    </div>
    <div className="col-lg-4">
    <h3>Secure your site, without requiring IT
</h3>
<p className="mt-3">Users can easily manage sharing permissions and ownership in Sites with only a few clicks, like they would a Doc. Embedded content retains its original permissions for reliable, fine-grained control.</p>
    </div>
    
</div>

<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://wallpaperaccess.com/full/271965.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="data:image/jpeg;base64,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
      " class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBWGktEydbSDVVf6sqLw9A43KzsS0XGpwm3Q&usqp=CAU" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<div class="overflow-scroll">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius voluptates eum odit ab pariatur, et est sequi, itaque veritatis dolorem incidunt deserunt illum culpa alias excepturi minima. Voluptatum, aspernatur unde.
</div>
<div class="overflow-hidden">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit fugit tempora provident cumque aperiam quos. Modi nam autem unde saepe soluta iure laudantium eos, qui quasi consequuntur mollitia eveniet aspernatur.
</div>
<button onClick={this.goToTop}>goToTop</button>
<Item/>
        </div>)
    }
}

export default Google