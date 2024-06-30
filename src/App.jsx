import { useState } from 'react'

import Ana from './components/Ana.jsx'
import Home from './components/Home.jsx'
import Kito from './components/Kito.jsx'
import Jian from './components/Jian.jsx'
import Klevis from './components/Klevis.jsx'
import Navbar from './components/NavBar.jsx'

import './App.css'

const App = () => {
  const [selectedLang, setSelectedLang] = useState(0)
  const [selectedSoul, setSelectedSoul] = useState('')

  return (
    <>
      <Navbar selectedSoul={selectedSoul} selectedLang={selectedLang} setSelectedLang={setSelectedLang} />
      {!selectedSoul && <Home selectedLang={selectedLang} setSelectedSoul={setSelectedSoul} />}
      {selectedSoul === 'kito' && <Kito selectedLang={selectedLang} />}
      {selectedSoul === 'klevis' && <Klevis selectedLang={selectedLang} />}
      {selectedSoul === 'ana' && <Ana selectedLang={selectedLang} />}
      {selectedSoul === 'jian' && <Jian selectedLang={selectedLang} />}
    </>
  )
}
export default App
