import { Box } from '@chakra-ui/react'

import NavBar from './components/NavBar.jsx'
import Polaroids from './components/Polaroids.jsx'

import background from './images/background.png'

const Home = () => {
  return (
    <Box bgImg={background} bgPosition='center' bgRepeat='no-repeat' bgSize='cover'>
      <NavBar />
      <Polaroids />
    </Box>
  )
}

export default Home
