import React from 'react'
import { useAsyncDebounce } from 'react-table'
const GlobalFilter = ({filter,setFilter}) => {
  const [value,setValue]=useState(fil)
  return (
    <span>
    Search:{' '}
    <input value={filter|| " "}
    onChange={e=>setFilter(e.target.value)} />
    </span>
  )
}

export default GlobalFilter