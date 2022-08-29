import React from 'react'
const GlobalFilter = ({filter,setFilter}) => {
  return (
   <span>
     <h1 className='mt-' > Search: {' '} </h1> 
     <input  value={filter|| '' }
     onChange={(e)=>setFilter(e.target.value)}/>
   </span>
  )
}

export default GlobalFilter