import React, { useState } from "react"

const  Pagenumbers=({postPerPge,totalPage,paginate})=>{
   let numbers=[]
   console.log(postPerPge,totalPage)
for(let i=1;i<=Math.floor(totalPage/10);i++){

    numbers.push(i)

}
//console.log(numbers)

    return(<div>
        <p>Pagenumbers</p>
<nav >
    <ul className="pagination">
        {numbers.map((num)=>{
            return<li key={num} className="page-item">
                <a onClick={()=>paginate(num)} href="#" className="page-link"  >{num} </a>
            </li>
        })}
    </ul>
</nav>
    </div>)
}

export default Pagenumbers