import React from 'react'
import './App.css'
import { FilteringTable } from './components/FiltertingTable'
import { SortingTable } from './components/sortingTable'
//import { BasicTable } from './components/BasicTable'
//import { SortingTable } from './components/sortingTable'


function App() {
  return (
    <div className="App">
    <FilteringTable/>
    <SortingTable
    </div>
  )
}

export default App
