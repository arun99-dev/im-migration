import parse from 'html-react-parser'

import { Box } from '@mui/material'
import { motion } from 'framer-motion'

export const SlideIntro = (name, mapImg, soulImg, intro) => {
  return (
    <>
      <Box sx={{ height: '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center', fontWeight: 700 }}>
        <motion.p
          style={{ width: '100%', fontSize: '20vw', margin: 0, textAlign: 'end' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
        >{name}</motion.p>
      </Box>
      <Box sx={{ height: '50vh', marginBottom: 50, display: 'flex', alignItems: 'center', position: 'relative' }}>
        <motion.img
          src={mapImg} alt="journey image" style={{ height: '100%', position: 'absolute', top: 0, right: 0, zIndex: -1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2, delay: 1 } }}
        />
        <motion.img
          src={soulImg} alt="journey image" style={{ width: '50vw', maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 80%, transparent 100%' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
        />
        <motion.p
          style={{ fontSize: '2vw' }}
          initial={{ translateY: 100, opacity: 0 }}
          animate={{ translateY: 0 , opacity: 1, transition: { duration: .75, delay: 1.5 } }}
        >{parse(intro)}</motion.p>
      </Box>
    </>
  )
}

export const SlideR = (p, img) => {
  return (
    <Box sx={{ height: '100vh', paddingY: 25, display: 'flex', alignItems: 'center'}}>
      <motion.p
        style={{ fontSize: '2vw', marginRight: '5vw' }}
        initial={{ translateY: 300, opacity: 0 }}
        whileInView={{ translateY: 0 , opacity: 1, transition: { duration: .5 } }}
      >{parse(p)}</motion.p>
      <motion.img
        src={img} alt="journey image" style={{ width: '40vw' }}
        initial={{ translateX: 400, opacity: 0 }}
        whileInView={{ translateX: 0 , opacity: 1, transition: { duration: .5 } }}
      />
    </Box>
  )
}

export const SlideL = (p, img) => {
  return (
    <Box sx={{ height: '100vh', paddingY: 25, display: 'flex', alignItems: 'center' }}>
      <motion.img
        src={img} alt="journey image" style={{ width: '40vw' }}
        initial={{ translateX: -400, opacity: 0 }}
        whileInView={{ translateX: 0 , opacity: 1, transition: { duration: .5 } }}
      />
      <motion.p
        style={{ fontSize: '2vw', marginLeft: '5vw' }}
        initial={{ translateY: 300, opacity: 0 }}
        whileInView={{ translateY: 0 , opacity: 1, transition: { duration: .5 } }}
      >{parse(p)}</motion.p>
    </Box>
  )
}

export const SlideGif = (gif) => {
  return (
    <Box sx={{ height: '100vh', display: 'grid', placeItems: 'center' }}>
      <motion.img
        src={gif} alt="journey image" style={{ width: '100%' }}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1, transition: { duration: 1 } }}
      />
    </Box>
  )
}

export const SlideStat = (title, desc, source) => {
  return (
    <Box sx={{ width: '100%', height: '100vh', padding: '0 2rem', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'var(--red)' }}>
      <motion.p
        style={{ width: '80%', margin: 0, fontSize: '10vw', fontWeight: 700, textAlign: 'start' }}
        initial={{ translateX: -400, opacity: 0 }}
        whileInView={{ translateX: 0 , opacity: 1, transition: { duration: .5 } }}
      >{title}</motion.p>
      <motion.p
        style={{ width: '80%', margin: 0, fontSize: '2vw', fontWeight: 600, textAlign: 'end' }}
        initial={{ translateX: 400, opacity: 0 }}
        whileInView={{ translateX: 0 , opacity: 1, transition: { duration: .5 } }}
      >{desc}</motion.p>
      <motion.p
        style={{ width: '80%', margin: 0, marginTop: 5, fontSize: '1vw', textAlign: 'end' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: .5, delay: .5 } }}
      >{source}</motion.p>
    </Box>
  )
}

export const SlideOutro = (dataDesc, title, desc) => {
  return (
    <>
      <Box sx={{ width: '100%', height: '100vh', padding: '0 2rem', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'var(--red)' }}>
        <motion.p
          style={{ width: '50%', margin: 0, fontSize: '2vw', fontWeight: 700, textAlign: 'center' }}
          initial={{ translateY: 200, opacity: 0 }}
          whileInView={{ translateY: 0 , opacity: 1, transition: { duration: .5 } }}
        >{dataDesc}</motion.p>
      </Box>
      <Box sx={{ width: '100%', height: '100vh', padding: '0 2rem', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'var(--red)' }}>
        <motion.p
          style={{ margin: 0, fontSize: '15vw', fontWeight: 700 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
        >{title}</motion.p>
        <motion.p
          style={{ margin: 0, fontSize: '5vw' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: .5, delay: 1 } }}
        >{desc}</motion.p>
      </Box>
    </>
  )
}

export const Slide = ({ children }) => {
  return (
    <Box sx={{ width: '100%', paddingX: 3, paddingY: 10, boxSizing: 'border-box' }}>
      {children}
    </Box>
  )
}
