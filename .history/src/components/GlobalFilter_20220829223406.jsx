import React from 'react'
import {useAsyn}
const GlobalFilter = ({filter,setFilter}) => {
  return (
    <span>
    Search:{' '}
    <input value={filter|| " "}
    onChange={e=>setFilter(e.target.value)} />
    </span>
  )
}

export default GlobalFilter