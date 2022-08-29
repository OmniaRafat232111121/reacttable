import React from 'react'

const GlobalFilter = ({filter,seFilter}) => {
  return (
   <span>
     Search:{' '}
     <input value={filter|| '' }
     onChange={(e)=>setFilter(e.target.value)}/>
   </span>
  )
}

export default GlobalFilter