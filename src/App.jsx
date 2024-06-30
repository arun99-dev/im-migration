import { useState } from 'react'

import Home from './components/Home.jsx'
import Kito from './components/Kito.jsx'
import Navbar from './components/NavBar.jsx'

import './App.css'

const App = () => {
  const [selectedLang, setSelectedLang] = useState(0)
  const [selectedSoul, setSelectedSoul] = useState(null)
  console.log(selectedSoul)
  return (
    <>
      <Navbar selectedLang={selectedLang} setSelectedLang={setSelectedLang} />
      {<Home selectedLang={selectedLang} setSelectedSoul={setSelectedSoul} />}
      {/* {selectedSoul && <Kito selectedLang={selectedLang} />} */}
    </>
  )
}
export default App
