import { Component } from "react";
import React from "react"
import 'bootstrap/dist/css/bootstrap.css';

class Grid extends Component{

    render(){
      
        return(
        
<div className="container">
<div className="row">
<div className="col" style={{backgroundColor:"red"}}>
    col-1
</div>
<div className="col" style={{backgroundColor:"yellow"}}>
    col-2
</div>
 </div>
 <div className="row">
<div className="col-sm-8" style={{backgroundColor:"blue"}}>
    col-10
</div>
<div className="col-sm-2" style={{backgroundColor:"green"}}>
    
    col-6
</div>
<div className="col-sm-2" style={{backgroundColor:"red"}}>
    
    col-end
</div>
 </div>
 <hr></hr>
 
 <div className="container">
  <div className="row">
    <div className="col-sm-8">col-sm-8</div>
    <div className="col-sm-4">col-sm-4</div>
  </div>
  <div className="row">
    <div className="col-sm">col-sm</div>
    <div className="col-sm">col-sm</div>
    <div className="col-sm">col-sm</div>
  </div>
</div>
<hr></hr>
<div classNameName="container">
<div className="row">
    <div className="col-md-8" style={{backgroundColor:"green"}} >.col-md-8</div>
    <div className="col-6 col-md-4" style={{backgroundColor:"blue"}}>
    think before ypu loose someone else
    </div>
  </div>
</div>
<hr></hr>
<div class="container">
  <div class="row">
    <div class="col-md-8">.col-md-8</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>
  <div class="row">
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>
  <div class="row">
    <div class="col-6">.col-6</div>
    <div class="col-6">.col-6</div>
  </div>
</div>
<div>lorem view
<h3>lorem</h3>
  <p>lorem</p>
</div>
  </div>
 )}}
export default Grid
