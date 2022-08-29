import React from 'react'

const GlobalFilter = ({filter,setFilter}) => {
  return (
    <span>
    Search:{' '}
    <input value={filter|| " "}
    onChange={e=>setFilter(e.t)} />
    </span>
  )
}

export default GlobalFilter