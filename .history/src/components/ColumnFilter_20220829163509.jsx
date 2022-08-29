import React from 'react'
const ColumnFilter = ({column}) => {
    const {filterValue,setFilter}=column;
  return (
   <span>
     Search: {' '} 
     <input className='mt-5 py-4 bg-green-400 text-center' value={filtervalue|| '' }
     onChange={(e)=>setFilter(e.target.value)}/>
   </span>
  )
}

export default ColumnFilter