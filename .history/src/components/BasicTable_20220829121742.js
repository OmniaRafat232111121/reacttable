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
     const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow}=tableInstance
    return (
    <table {...getTableProps()}>
    <thead >

    {headerGroups.map((headerGroup)=>(
<tr {...headerGroup.getHeaderGroupProps()}>
{
    headerGroup.headers.map((column)=>{
        <th {}></th>
    })
}

</tr>
    ))}
    </thead>
    <tbody {...getTableBodyProps()}>
    <tr>
    <td>
    </td>
    </tr>
    </tbody>
    </table>
  )
}

export default BasicTable
