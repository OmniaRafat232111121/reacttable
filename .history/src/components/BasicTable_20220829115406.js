import React,{useMemo} from 'react'
import {useTable} from 'react_table'
import { COLUMNS } from './columns'

const BasicTable = () => {
    const columns=useMemo(()=>COLUMNS,[])
    const data=useMemo(()=>MOCK_DATA,[])
    const tableInstance= useTable({
        columns,
        data:'da
     })
    return (
    <div>
      
    </div>
  )
}

export default BasicTable