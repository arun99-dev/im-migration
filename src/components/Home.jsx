import { motion} from 'framer-motion'
import { Box, Button } from '@mui/material'

import ana from '../images/polaroid/ana.png'
import kito from '../images/polaroid/kito.png'
import elena from '../images/polaroid/elena.png'
import background from '../images/background.png'
import jianLi from '../images/polaroid/jianLi.png'
import kelvis from '../images/polaroid/kelvis.png'

const Home = () => {
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
      {[kelvis, ana, kito, elena, jianLi].map((img, index) => (
        <Button
          key={index}
          component={motion.button}
          whileHover={{ scale: 1.1, transition: { duration: .1 } }}
          whileTap={{ scale: 0.9, transition: { duration: .1 }  }}
        >
          <img src={img} alt="polaroid" style={{ width: '20vh' }} />
        </Button>
      ))}
    </Box>
  )
}

export default Home
