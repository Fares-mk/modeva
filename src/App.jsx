import { Routes , Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import Dashboard from './pages/dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    
    </>
  )
}

export default App

