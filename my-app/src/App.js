import React from 'react';
import {BrowserRouter,Route,Link, Router,Switch} from "react-router-dom"
import './App.css';
// import Card from './Components/Card'
import contacts from './Components/contact'
import Login from "./Components/Login/Login"
import Note from "./Components/Note/Note"
import Hooks from './Components/Usestate/Usestate'
import Form from "./Components/Form/Form"
import Todolist from "./Components/To-do list/Todolist"
import Addnote from "./Components/Addnote/Addnote"
import Formevents from "./Components/Events/Events"
import Emojis from "./Components/Classcomponents/Emojis/Emojis"
import Book from "./Components/Classcomponents/Emojis/googlebooks/Books"
import Dispemoji from "./Components/Classcomponents/Emojis/DispEmoji"
import Axios from "./Components/Ajax/Axios"
import Validation from "./Components/formvalidation/formvalidation"
import Counter from "./Components/Counter/counter"
import Profile from "./prifile/profile"
import Grid from "./Grid/Grid"
import Item from "./Components/backbutton/backbutton"
import Lifecycle from "./Components/ComponentLyfecycleMethods/lifecycle"
import Google from "./googleweb/google"
import Error from "./Components/Error/error"
import Pagination from "./Components/pagination/pagination"
import Corousel from "./Components/Bootstrap/corousal"
import Card from "./Components/Card"
function App() {
  
  return (
       
    <div className="App">
            <BrowserRouter>
           <header>
            <nav>
                  <ul>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to={{
                              pathname:"/add-note",
                              hash:"#submit",
                              search:"?quick-submit=true"
                              }}>Addnote</Link></li>
                              <li><Link to="/form">Form</Link></li>
                              <li><Link to="/todolist">Todolist</Link></li>
                              <li><Link to="/emoji">Emoji</Link></li>
                              <li><Link to="/book">book</Link></li>
                              <li><Link to="/suggest">suggestion</Link></li>
                              <li><Link to="/validation">validation</Link></li>
                              <li><Link to="/counter">counter</Link></li>
                              <li><Link to="/grid">show grid</Link></li>
                              <li><Link to="/google">googleweb</Link></li>
                              <li><Link to="/back">go to top</Link></li>
                              <li><Link to="/lifecycle">lifecycle methods</Link></li>
                  </ul>
            </nav>
           </header>
        
          {/* <Addnote/> */}
          <Switch>
          {/* Switch - will render the component that maches the path */}
          <Route path="/"  exact component={Login}/>
          <Route path="/add-note"   exact component={Addnote}/>
          <Route path="/form"  exact component={Form}/>
          <Route path="/todolist" exact component={Todolist}/>
          <Route path="/emoji" exact component={Emojis}/>
          <Route path="/book" exact component={Book}/>
          <Route path="/suggest" exact component={Axios}/>
          <Route path="/validation" exact component={Validation}/>
          <Route path="/counter" exact component={Counter}/>
          <Route path="/emojititle/:id" exact component={Profile}/>
          <Route path="/grid" exact component={Grid}/>
          <Route path="/google" exact component={Google}/>
          <Route path="/back" exact component={Item}/>
          <Route path="/lifecycle" exact component={Lifecycle}/>
          <Route path="/page" exact component={Pagination}/>
          <Route path="/corousel" exact component={Corousel}/>
          <Route path="/card" exact component={Card}/>
          <Route path="*">
           <Error/>
          </Route>

        
               
          
          </Switch>
          </BrowserRouter>
        
{/* <Formevents/>
      <Addnote/>
      <Todolist/>
      <Form/>
<Hooks/>
      <Note />
<Login/> */}
{/* {contacts.map((contact)=>{
return <Card name={contact.name} email={contact.email} tell={contact.tell} img={contact.img} />
})} */}

{/* <Card 
name={contacts[0].name} 
mail ={contacts[0].email} 
tell={contacts[0].tell} 
img = {contacts[0].img}/>
<Card 
name={contacts[1].name} 
mail ={contacts[1].email} 
tell={contacts[1].tell} 
img = {contacts[1].img}/> */}
    </div>
)}

export default App;
  