import axios from "axios"

export const INCREMENT = "INCREMENT"
export const DECREMENT = "ADD 5"
export const STORE_RESULT = "STORE_RESULT"
export const DELETE_ITEM = "DELETE_ITEM"


//action is an plain abject
export const increment=()=>{

    return{
        type:INCREMENT
    }
}
//asynchronou function using setTime out
export const inc = ()=>{
   
return dispatch=>{
    setTimeout(()=>{
dispatch(increment())
    },2000)
}
}

export const add=(val)=>{
    return{
        type:"ADD 5",
        value:val
    }
}
export const addition=(val)=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(add(val))
        },3000)
    }
}
////////////////////////////////

export const storeResult=(val)=>{

    return{
        type:STORE_RESULT,
        value:val
    }
   
}

//Asynck function
export const saveResult=()=>{
    //  axios.get("https://api.adviceslip.com/advice").then((response)=>{
    //     let suggestion = response.data.slip.advice
        return dispatch=>{

            axios.get("https://api.adviceslip.com/advice").then((response)=>{
        let suggestion = response.data.slip.advice
                dispatch(storeResult(suggestion))
        })
        }
    //})
    
}