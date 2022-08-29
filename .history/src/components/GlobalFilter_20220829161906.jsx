import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const GlobalFilter = ({filter,setFilter}) => {
  return (
   <span>
     <h1 class> Search: {' '} </h1> 
     <input value={filter|| '' }
     onChange={(e)=>setFilter(e.target.value)}/>
   </span>
  )
}

export default GlobalFilter