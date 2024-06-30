import { useState } from 'react'

import Kito from './components/Kito.jsx'
import Navbar from './components/NavBar.jsx'

import './App.css'

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <>
      <Navbar selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      <Kito selectedIndex={selectedIndex} />
    </>
  )
}
export default App
