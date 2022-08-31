import React from 'react'
import './App.css'
import { ColumnHiding } from './components/ColumnHiding'
import { ColumnOrder } from './components/ColumnOrder'
//import { FilteringTable } from './components/FiltertingTable'
//import { FilteringTable } from './components/FiltertingTable'
import { Paginationtable } from './components/Paginationtable'
import { RowSelection } from './components/RowSelection'
//import { BasicTable } from './components/BasicTable'
//import { SortingTable } from './components/sortingTable'


function App() {
  return (
    <div className="App">
     <ColumnHiding/>
    </div>
  )
}

export default App
