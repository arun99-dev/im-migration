import { useState } from 'react'

import Home from './components/Home.jsx'
// import Kito from './components/Kito.jsx'
import Navbar from './components/NavBar.jsx'

import './App.css'

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <>
      <Navbar selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      <Home />
      {/* <Kito selectedIndex={selectedIndex} /> */}
    </>
  )
}
export default App
