import React from "react"

const GithubContext = React.createContext()
// used to create the props to use all componets by wrapping with parent componnet in index.js

const GithubProvider=({children})=>{
return(
    <GithubContext.Provider value="hello">
        {children}
    </GithubContext.Provider>
)
}

export{GithubContext,GithubProvider}