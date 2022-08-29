import React from 'react'

const GlobalFilter = ({filter,setFilter}) => {
  return (
    <span>
    Search:{' '}
    <input value={filter|| " "}
    onChange={e=>set} />
    </span>
  )
}

export default GlobalFilter