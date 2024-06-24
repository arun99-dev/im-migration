import { Flex, Image } from '@chakra-ui/react'

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
    <Flex h='100vh' p={20} justifyContent='center' flexWrap='wrap'>
      {polaroids.map((polaroid, idx) => (
        <Image
          key={idx}
          {...polaroid}
          w='175px'
          objectFit='contain'
          m='7'
        />
      ))}
    </Flex>
  )
}

export default Polaroids
