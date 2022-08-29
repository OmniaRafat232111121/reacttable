import React from 'react'
import './App.css'
 import { FilteringTable } from './components/FiltertingTable'
import { SortingTable } from './components/sortingTable'
function App() {
  return (
    <div className="App">
  <SortingTable/>
  <FilteringTable/>
    </div>
  )
}

export default App
