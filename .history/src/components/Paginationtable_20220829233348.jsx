import React, { useMemo } from 'react'
import { usePagination, useTable } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import './table.css'

export  const Paginationtable  = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage
    prepareRow
  } = useTable({
    columns,
    data
  },usePagination)

  return (
    <>
      <table {...getTableProps()}>
      <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
          ))}
        </tr>
      ))}
      </thead>
        <tbody  {...getTableBodyProps()}>
        {page.map(row=>{
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
            {row.cells.map(cell=>{
              return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
            })}
              </tr>
            )
          })}
        </tbody>
       
      </table>
      <div className='Button'>
      <button  onClick={()=>previousPage()} disabled={!}>Previous</button>
      <button onClick={()=>nextPage()}>Next</button>
      </div>
     </>
  )
}