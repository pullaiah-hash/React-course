
let initialState={
    counter:0,
    result:[],
    contacts:[]
}
let reducer=(state=initialState,action)=>{

switch(action.type){
    case"INCREMENT":
    return{
        ...state,
        counter:state.counter+1
    }
   case"ADD 5": 
   return{
    ...state,
    counter:state.counter + action.value
}
case"STORE_RESULT":
return{
    ...state,
    result:state.result.concat({id:new Date().getHours(), value:state.counter, advice:action.value})
}
case"DELETE_ITEM":
const newArray = state.result.filter((item,index)=>{
    return index!==action.payload
        })
return{
    ...state,
    result:newArray
    
}
case"ADD_CONTACTS":
return{
    ...state,
    contacts:state.contacts.concat(action.data)
    
}
case"GET_DETAILS":
let contacts =state.contacts.filter((contact)=>contact.id===action.data)
return{
    ...state,
    contacts:contacts

}
}
 return state
}
export default reducer