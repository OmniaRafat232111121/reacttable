import React from 'react'
import { useAsyncDebounce } from 'react-table'
const GlobalFilter = ({filter,setFilter}) => {
  const [value,setValue]=useState(filter);
  const onChange=useAsyncDebounce(value=>{
   setFilter(value||undefined)
  },1000)
  return (
    <span>
    Search:{' '}
    <input value={filter|| " "}
    onChange={(e)=>{
      setValue()
    }}} />
    </span>
  )
}

export default GlobalFilter