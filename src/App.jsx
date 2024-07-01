import { useState } from 'react'

import Ana from './components/Ana.jsx'
import Home from './components/Home.jsx'
import Kito from './components/Kito.jsx'
import Jian from './components/Jian.jsx'
import Elena from './components/Elena.jsx'
import Klevis from './components/Klevis.jsx'
import Navbar from './components/NavBar.jsx'
import Scroll from './components/Scroll.jsx'
import AboutUs from './components/AboutUs.jsx'
import { motion, useScroll } from "framer-motion";

import './App.css'

const App = () => {
  const [route, setRoute] = useState('')
  const [selectedLang, setSelectedLang] = useState(0)
  const { scrollYProgress } = useScroll()

  return (
    <>
      {route && route !== 'aboutUs' && <Scroll />}
      <Navbar route={route} setRoute={setRoute} selectedLang={selectedLang} setSelectedLang={setSelectedLang} />
      {!route && <Home selectedLang={selectedLang} setRoute={setRoute} />}
      {route === 'klevis' && <Klevis selectedLang={selectedLang} />}
      {route === 'ana' && <Ana selectedLang={selectedLang} />}
      {route === 'kito' && <Kito selectedLang={selectedLang} />}
      {route === 'elena' && <Elena selectedLang={selectedLang} />}
      {route === 'jian' && <Jian selectedLang={selectedLang} />}
      {route === 'aboutUs' && <AboutUs selectedLang={selectedLang} />}
      {route && (
        <motion.div
          className="progress-bar"
          style={{
            scaleX: scrollYProgress,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1,
            height: '5px',
            background: 'var(--red)',
            transformOrigin: '0%',
          }}
        />
      )}
    </>
  )
}
export default App
