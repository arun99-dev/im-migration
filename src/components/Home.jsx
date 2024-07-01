import { motion } from 'framer-motion'
import { Box, Button } from '@mui/material'
import { BiSolidDonateHeart } from 'react-icons/bi'

import ana from '../images/polaroid/ana.webp'
import kito from '../images/polaroid/kito.webp'
import jian from '../images/polaroid/jian.webp'
import elena from '../images/polaroid/elena.webp'
import background from '../images/background.webp'
import klevis from '../images/polaroid/klevis.webp'

const Home = ({ selectedLang, setRoute }) => {
  return (
    <Box
      sx={{
        height: '100vh',
        padding: 10,
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '5vw',
        backgroundImage:`url(${background})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'scroll'
      }}
    >
      {[klevis, ana, kito, elena, jian].map((img, index) => (
        <Button
          key={index}
          component={motion.button}
          initial={{ scale: 0, rotate: 720, opacity: 0 }}
          whileInView={{ scale: 1,  rotate: index % 2 ? -3 : 3, opacity: 1, transition: { duration: .5 } }}
          whileHover={{ scale: 1.1, transition: { duration: .1 } }}
          whileTap={{ scale: 0.9, transition: { duration: .1 }  }}
          onClick={() => setRoute(img.split('/').pop().split(img.includes('-') ? '-' : '.')[0])}
        >
          <img src={img} alt="polaroid" style={{ width: '20vh' }} />
        </Button>
      ))}
      <Button
        sx={{
          paddingX: 3,
          paddingY: 1,
          position: 'absolute',
          bottom: 30,
          fontSize: 20,
          fontWeight: 900,
          color: 'white',
          textTransform: 'inherit',
          backgroundColor: 'var(--red)',
          borderRadius: 0,
          '&:hover': {
            backgroundColor: 'var(--red)'
          }
        }}
        onClick={() => window.open('https://shorturl.at/XoCVj', '_blank')}
        component={motion.button}
        initial={{ translateY: 100 }}
        animate={{ translateY: 0, transition: { duration: .5, delay: 1.5 } }}
        whileHover={{ scale: 1.1, transition: { duration: .1 } }}
        whileTap={{ scale: 0.9, transition: { duration: .1 }  }}
      >
        {selectedLang ? 'Donate' : 'Dona'}
        <BiSolidDonateHeart style={{ marginLeft: 5 }}/>
      </Button>
    </Box>
  )
}

export default Home
