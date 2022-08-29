import React,{useMemo} from 'react'
import {useTable} from 'react_table'

const BasicTable = () => {
    const columns=
     useTable({
        columns:'columns',
        data:'data'
     })
    return (
    <div>
      
    </div>
  )
}

export default BasicTable
