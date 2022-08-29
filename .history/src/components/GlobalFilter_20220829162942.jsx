import React from 'react'
const GlobalFilter = ({filter,setFilter}) => {
  return (
   <span>
     <h1  > Search: {' '} </h1> 
     <input className='' value={filter|| '' }
     onChange={(e)=>setFilter(e.target.value)}/>
   </span>
  )
}

export default GlobalFilter