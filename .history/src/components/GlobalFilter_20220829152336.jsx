import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

export const GlobalFilter = ({ filter, setFilter }) => {

  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 1000)
  return (
    <span>
      Search:{' '}
      <input
        value={value || ''}
        onChange={e => {
    
          onChange(e.target.value);
        }}
      />
    </span>
  )
}