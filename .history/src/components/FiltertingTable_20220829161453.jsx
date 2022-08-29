import React, { useMemo } from 'react'
import { useTable,useGlobalFilter } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS,GROUPED_COLUMNS } from './columns'
import './table.css'
export const FiltertingTable = () => {
  const columns = useMemo(() => GROUPED_COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({
    columns,
    data
  },useGlobalFilter)
   const {globalFilter}=state
  return (
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
        {rows.map(row=>{
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
       <tfoot>
          {footerGroups.map(footerGroup => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map(column => (
                <td {...column.getFooterProps()}>{column.render('Footer')}</td>
              ))}
            </tr>
          ))}
       </tfoot>
      </table>
    
  )
}