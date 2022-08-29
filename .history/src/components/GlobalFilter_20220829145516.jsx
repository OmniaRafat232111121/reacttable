import React from 'react'

const GlobalFilter = ({filter,seFilter}) => {
  return (
   <span>
     Search:{' '}
     <input value={filter|| '' }
     onChange={(e)=>setFil}/>
   </span>
  )
}

export default GlobalFilter