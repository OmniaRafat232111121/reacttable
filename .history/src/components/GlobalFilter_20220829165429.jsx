import React from 'react'
const GlobalFilter = ({filter,setFilter}) => {
  return (
   <spa>
     Search: {' '} 
     <input className='mt-5 py-4 bg-green-400 text-center' value={filter|| '' }
     onChange={(e)=>setFilter(e.target.value)}/>
   </spa>
  )
}

export default GlobalFilter