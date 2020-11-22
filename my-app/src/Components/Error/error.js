import React from "react"
import {Link} from "react-router-dom"


const Error=()=>{


    return<div>
        <h3 style={{fontSize:"4rem"}}>404</h3>
        <p>the page you are lookig for is not available</p>
    
    <Link to="/" className="btn btn-primary">
        Go Home
    </Link>
    </div>
}

export default Error