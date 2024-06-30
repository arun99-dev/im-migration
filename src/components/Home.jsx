import { motion } from 'framer-motion'
import { Box, Button } from '@mui/material'

import ana from '../images/polaroid/ana.png'
import kito from '../images/polaroid/kito.png'
import elena from '../images/polaroid/elena.png'
import background from '../images/background.png'
import jian from '../images/polaroid/jian.png'
import klevis from '../images/polaroid/klevis.png'

const Home = ({ selectedLang, setSelectedSoul }) => {
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
        gap: '50px',
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
          onClick={() => setSelectedSoul(img.split('/').pop().split(img.includes ? '-' : '.')[0])}
          component={motion.button}
          whileHover={{ scale: 1.1, transition: { duration: .1 } }}
          whileTap={{ scale: 0.9, transition: { duration: .1 }  }}
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
          fontSize: 15,
          fontWeight: 'bold',
          color: 'white',
          textTransform: 'inherit',
          backgroundColor: 'var(--red)',
          borderRadius: 0,
          '&:hover': {
            backgroundColor: 'var(--red)'
          }
        }}
        component={motion.button}
        whileHover={{ scale: 1.1, transition: { duration: .1 } }}
        whileTap={{ scale: 0.9, transition: { duration: .1 }  }}
      >
        {selectedLang ? 'Donate' : 'Dona'}
      </Button>
    </Box>
  )
}

export default Home
