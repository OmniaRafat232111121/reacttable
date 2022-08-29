import { useState } from 'react'

import './App.css'
import BasicTable from './components/BasicTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   <BasicTable/>
     
    </div>
  )
}

export default App
