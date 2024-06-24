import { Box, Button } from '@chakra-ui/react'

import NavBar from './components/NavBar.jsx'
import Polaroids from './components/Polaroids.jsx'

import background from './images/background.png'

const Home = () => {
  return (
    <Box bgImg={background} bgPosition='center' bgRepeat='no-repeat' bgSize='cover'>
      <NavBar />
      <Polaroids />
      <Button mb={10} colorScheme='red' position='fixed' left='50%' bottom='0' transform='translate(-50%, 0)'>Donate</Button>
    </Box>
  )
}

export default Home
