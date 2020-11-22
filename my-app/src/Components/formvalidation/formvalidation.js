import React,{Component} from "react"
import "./validation.css"


class Validation extends Component{

    state={
        name:"",
        email:"",
        phone:"",
        image:"",
        errorMesages:{
            name:"",
            email:"",
            phone :""
        }
    }
getDetails=(evt)=>{
    let {name,value}=evt.target
    switch(name){
case"name":
if(!value||value.length===0){
    this.setState({errorMesages:{name:"name is reqired"}})
// this.state.errorMesages.name = "name is reqired"
}
else if(value.length<3 ||value.length>20){
this.setState({errorMesages:{
    name:"name must be between 3 20 characters"  
}})
    //this.state.errorMesages.name = "name must be between 3 20 characters"   
}

else{
    this.setState({errorMesages:{name:" "}})
}
break;
case"email":
if(!value||value.length===0){
    this.setState({errorMesages:{email:"email must be required"}})
    //this.state.errorMesages.email="email must be required"
}else if(!value.includes("@")){
    this.setState({errorMesages:{email:"enter proper email"}})
    //this.state.errorMesages.email ="enter proper email"
}
else if(value.length<8){
    this.setState({errorMesages:{email:"enter atleast  8 characters"}})
    //this.state.errorMesages.email ="enter atleast  8 characters"
}
else{
    this.setState({errorMesages:{email:" "}})
   // this.state.errorMesages.email =" "  
}
break;
case"phone":
if(!value||value.length===0){
    this.setState({errorMesages:{phone:"enter valid mobile number" }})
  // this.state.errorMesages.phone="enter valid mobile number" 
}
else if(value.length<13){
    this.setState({errorMesages:{phone:"enter number bitween 10 to 12" }})
//this.state.errorMesages.phone="enter number bitween 10 to 12"
}
else{
    this.setState({errorMesages:{phone:" " }})
    //this.state.errorMesages.phone=""
}

    }
   
this.setState({[name]:value })
    console.log(name,value)

}
setImages = (evt) => {
    let {name,value}=evt.target


    let reader = new FileReader();
    reader.readAsDataURL(value);
    this.setState({[name]:value})

    
 console.log(evt.target.value)
  
  }
  
    render(){

        return(
            <div className="Validation">

                <div className="form-validation">
                    <form>
                        <div className="name">
                            <label htmlFor="name">name:   </label>
                                <input onChange={this.getDetails} value={this.state.value} name="name" id="name" placeholder="Enter name"></input>
        <p style={{color:"red"}}>{this.state.errorMesages.name}</p>
                                </div>

                                <div className="email">
                                <label htmlFor="email">email:  </label>
                                <input onChange={this.getDetails}  value={this.state.value}  name="email" id="email" placeholder="Enter email"></input>
                                <p style={{color:"red"}}>{this.state.errorMesages.email}</p>
                                </div>
                               <div className="phone">
                               <label htmlFor="phone">phone number:  </label>
                                <input onChange={this.getDetails}  value={this.state.value}  name="phone" id="phone" placeholder="Enter phone number"></input>
                                <p style={{color:"red"}}>{this.state.errorMesages.phone}</p>
                              
                               </div>
                               <div className="images">
                               <label htmlFor="images">phone number:  </label>
                                <input onChange={this.setImages}   type="file" value={this.state.images}  name="image" id="image" placeholder="upload the picture"></input>
                                   
                               </div>
                    </form>
     
                </div>

        <p>{JSON.stringify(this.state,null,3)}</p>
        <img src={this.state.image}></img>

            </div>
        )
    }
}
export default Validation