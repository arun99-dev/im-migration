import { Button, Flex, Image } from '@chakra-ui/react'
import { motion} from 'framer-motion'

import polaroidKito from '../images/polaroidKito.jpg'
import polaroidElena from '../images/polaroidElena.jpg'
import polaroidAndriy from '../images/polaroidAndriy.jpg'
import polaroidDenisa from '../images/polaroidDenisa.jpg'
import polaroidKlevis from '../images/polaroidKlevis.jpg'

const polaroids = [
  { src: polaroidKlevis, alt: 'Klevis Ramo' },
  { src: polaroidElena, alt: 'Elena Grahovac' },
  { src: polaroidKito, alt: 'Kito Mann'},
  { src: polaroidDenisa, alt: 'Denisa Capri' },
  { src: polaroidAndriy, alt: 'Andriy Shepitsen' }
]
const Polaroids = () => {
  return (
    <Flex h='100vh' p={20} justifyContent='center' alignItems='center' flexWrap='wrap'>
      {polaroids.map((polaroid, idx) => (
        <Button
          as={motion.button}
          key={idx}
          w={175}
          h='fit-content'
          m={7}
          p={0}
          whileHover={{ scale: 1.1, transition: { duration: .1 } }}
          whileTap={{ scale: 0.9, transition: { duration: .1 }  }}
        >
          <Image
            {...polaroid}
          />
        </Button>
      ))}
    </Flex>
  )
}

export default Polaroids
