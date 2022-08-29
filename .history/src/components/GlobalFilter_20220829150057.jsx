import React from 'react'

const GlobalFilter = ({filter,setFilter}) => {
  return (
   <span>
     <h1></h1> Search: {' '}
     <input value={filter|| '' }
     onChange={(e)=>setFilter(e.target.value)}/>
   </span>
  )
}

export default GlobalFilter