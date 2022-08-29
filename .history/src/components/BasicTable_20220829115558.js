import React,{useMemo} from 'react'
import {useTable} from 'react_table'
import { COLUMNS } from './columns'

const BasicTable = () => {
    const columns=useMemo(()=>COLUMNS,[])
    const data=useMemo(()=>MOCK_DATA,[])
    const tableInstance= useTable({
        columns,
        data,
     })
    return (
    <table>
    <thead>
    <tr>
    <
    </tr>
    </thead>
    <tbody>
    </tbody>
    </table>
  )
}

export default BasicTable
