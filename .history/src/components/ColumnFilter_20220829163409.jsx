import React from 'react'
const ColumnFilter = ({column}) => {
    
  return (
   <span>
     Search: {' '} 
     <input className='mt-5 py-4 bg-green-400 text-center' value={filter|| '' }
     onChange={(e)=>setFilter(e.target.value)}/>
   </span>
  )
}

export default ColumnFilter