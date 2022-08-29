import React from 'react'
const GlobalFilter = ({filter,setFilter}) => {
  return (
   <span>
     <h1  > Search: {' '} </h1> 
     <input className='m' value={filter|| '' }
     onChange={(e)=>setFilter(e.target.value)}/>
   </span>
  )
}

export default GlobalFilter