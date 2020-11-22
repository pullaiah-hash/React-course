import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
// import pi,{getExpanses,getTotal} from "./Math"
import * as Pi from "./Math"
import {createStore,applyMiddleware} from "redux"
import {Provider} from "react-redux"
import reducer from "./Components/reducer/reducer"
import thunk from "redux-thunk"
import {GithubProvider} from "./Components/contextAPI/context"
// Adding Middleware

let logger = store=>{
  return next=>{
    return action=>{
      console.log("[middleware dispatching]",action)
      let result = next(action)
      console.log("Middileware nextState",store.getState())
      
      return result
    }
  }
}

//creating store with redux
let store = createStore(reducer,applyMiddleware(logger,thunk))


ReactDOM.render(
  
//  <div>
//   
// <p>{Pi.default}</p>
// <p>{Pi.getTotal()}</p>
// <p >{currentYear.getFullYear()}</p>
// <img className="" src=""/>
// <img className="" src=""/>
// <img className="" src=""/>
//  </div> 
<GithubProvider>
<Provider store={store}><App /></Provider>
</GithubProvider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
