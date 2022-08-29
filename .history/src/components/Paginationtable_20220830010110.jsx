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
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    prepareRow,
  } = useTable({
    columns,
    data
  },usePagination)
const {pageIndex}=state
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
      <div >
      <span>
      Page {' '}
      <strong>
      {pageIndex+1} of {pageOptions.length} 
      </strong>
      </span>
      <span>
      go to page  : {'  '}
      <input type="number" defaultValue={pageIndex+1}
      onChange={e=>{
        const pageNumber=e.target.value ? Number(e.target.value)-1 :0
        gotoPage(pageNumber)
      }} 
      style={{width:'50px'}}
      />
      </span>
      <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
      </div>
     </>
  )
}