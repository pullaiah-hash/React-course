import React, { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import Dispage from "./displayPage"
import Pagenumbers from "./pagenumbers/pagenumbers"
const Pagination=()=>{

    let [currentPage,setCurrentPgae]=useState(1)
    let [postPerPage,setPostPerPage]=useState(10)
    let [loading,setLoading]=useState(false)
    let [page,setPage]=useState([])


    useEffect(()=>{

        setLoading(true)
       let fetchPost=async ()=>{
      let res =  await axios.get("https://jsonplaceholder.typicode.com/posts")
      setPage(res.data)
     setLoading(false)
    }
fetchPost()
},[])
    let lastIndexOfPage =currentPage*postPerPage
let firstIndexOfPage=lastIndexOfPage-postPerPage
let currentPost=page.slice(firstIndexOfPage,lastIndexOfPage)

// paginate =(num)=>{
//     setCurrentPgae(num)
// }
    return(<div>
<h4>Pagination</h4>
<Dispage currentPost={currentPost} loading={loading}/>

<Pagenumbers postPerPage={postPerPage} totalPage={page.length} />

    </div>)
}


export default Pagination