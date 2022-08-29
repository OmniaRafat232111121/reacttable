import React from 'react'
import './App.css'
import ColumnFilter from './components/ColumnFilter'
import { FiltertingTable } from './components/FiltertingTable'

function App() {
  return (
    <div className="App">
      <FiltertingTable/>
      <ColumnFilter/>

    </div>
  )
}

export default App