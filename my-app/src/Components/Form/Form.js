import React,{useState} from "react"
function Form(){
    const element = <h1>Hello, world</h1>;
    console.log("element is "+element)
    let [fullName,getFname]=useState({fname:'',lname:'',password:""})
    let [name,setName] = useState("")
    let [heading,setHeading]=useState("")
    let [password,setPassword]=useState('')
    let [heading1,setHeading1]=useState("")
    
//     function handleName(e){
//         console.log(e.target.value)
//         console.log(e.target.type)
//         console.log(e.target.placeholder)
//         setName(e.target.value)
//     }0
//     function handlepassword(e){
//         setPassword(e.target.value)
// console.log(`password is ${e.target.value}`)

//     }
function getAllInputs(e){
   
let newName = e.target.name
let newVlaue =   e.target.value
if(newName==="fname"){
    
    getFname(previousValue=>{

        return {
           
            fname:newVlaue,
            lname:previousValue.lname,
            password:previousValue.password
           
        }

    })
   
}else if(newName==="lname"){
    // let newVlaue =   e.target.value
    // getFname({lname:newVlaue})
    getFname((previousValue)=>{

        return {
           lname:newVlaue,
           fname:previousValue.fname,
           password:previousValue.password
        }

    })
}else if(newName==="password"){
    getFname(previousValue=>{
        return{
            password:newVlaue,
            fname:previousValue.fname,
            lname:previousValue.lname
        }
    })
}


}
function handleClick(e){
    e.preventDefault()
    console.log("first name is "+fullName.fname+" lastname is "+fullName.lname+" password is "+fullName.password)
    setHeading(name)
    setHeading1(password)
    //e.target.value=" "
    e.target.fname.value=" "
    e.target.lname.value=" "
    e.target.password.value=" "
   
}
    return(<div className="form">
       <div className="controlled" style={{margin:"auto",
                                    width:"300px",
                                    height:"400px",
                                    border:"1px solid blue",
                                    backgroundColor:"Blue",
                                    textAlign:"center",
                                    paddingTop:"100px"}}>
       
<p>Hello {fullName.fname}  {fullName.lname}  {fullName.password}</p>
      <form onSubmit={handleClick}>

      <input type="text" onChange={getAllInputs} 
                         placeholder="Enter proper first name" 
                         style={{margin:"10px",textAlign:"center",padding:"10px"}}
                         name="fname"
                         value={fullName.fname}
                     />
      <input type="text" 
            onChange={getAllInputs} 
            placeholder="Enter proper last name" 
            style={{margin:"10px",textAlign:"center",padding:"10px"}} 
            name="lname"
            value={fullName.lname}
           /><br></br>
            <input type="text" 
            onChange={getAllInputs} 
            placeholder="Enter proper password" 
            style={{margin:"10px",textAlign:"center",padding:"10px"}} 
            name="password"
           /><br></br>

<button style={{padding:"10px"}} >Setname</button>
      </form>
      
       </div>
    </div>)
}

export default Form