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
     const {getTableProps,getTableBodyProps}=tableInstance
    return (
    <table>
    <thead>
    <tr>
    <th></th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>
    </td>
    </tr>
    </tbody>
    </table>
  )
}

export default BasicTable
