import parse from 'html-react-parser'

import { Box } from '@mui/material'

export const SlideR = (p, img) => {
  return (
    <Box sx={{ marginBottom: '5vw', display: 'flex', alignItems: 'center' }}>
      <p style={{ height: '50%', fontSize: '2vw', marginRight: '5vw' }}>{parse(p)}</p>
      <img src={img} alt="journey image" style={{ width: '40vw' }}/>
    </Box>
  )
}

export const SlideL = (p, img) => {
  return (
    <Box sx={{ marginBottom: '5vw', display: 'flex', alignItems: 'center' }}>
      <img src={img} alt="journey image" style={{ width: '40vw' }}/>
      <p style={{ fontSize: '2vw', marginLeft: '5vw' }}>{parse(p)}</p>
    </Box>
  )
}

export const SlideStat = (title, desc, source) => {
  return (
    <Box sx={{ width: '100%', height: '50vw', padding: '0 2rem', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'hsla(357.29, 92.248%, 45.935%)' }}>
      <p
        style={{
          width: '80%',
          margin: 0,
          fontSize: '10vw',
          fontWeight: 700,
          textAlign: 'start'
        }}
      >{title}</p>
      <p
        style={{
          width: '80%',
          margin: 0,
          fontSize: '2vw',
          fontWeight: 600,
          textAlign: 'end'
        }}
      >{desc}</p>
      <p
        style={{
          width: '80%',
          margin: 0,
          marginTop: 5,
          fontSize: '1vw',
          textAlign: 'end'
        }}
      >{source}</p>
    </Box>
  )
}

export const SlideIntro = (name, mapImg, soulImg, intro) => {
  return (
    <>
      <Box sx={{ marginBottom: '5vw', display: 'flex', flexDirection: 'column', alignItems: 'center', fontWeight: 700 }}>
        <p
          style={{
            width: '100%',
            fontSize: '20vw',
            margin: 0,
            textAlign: 'center'
          }}
        >{name}</p>
      </Box>
      <Box sx={{ marginBottom: '5vw', display: 'flex', alignItems: 'center', position: 'relative' }}>
        <img
          src={mapImg}
          style={{
            height: '100%',
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: -1
          }}
        />
        <img src={soulImg} alt="journey image" style={{ width: '50vw', maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 80%, transparent 100%' }} />
        <p style={{ fontSize: '2vw' }}>{parse(intro)}</p>
      </Box>
    </>
  )
}

export const SlideOutro = (dataDesc, title, desc) => {
  return (
    <>
      <Box sx={{ width: '100%', height: '50vw', padding: '0 2rem', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'hsla(357.29, 92.248%, 45.935%)' }}>
        <p style={{ width: '50%', margin: 0, fontSize: '2vw', fontWeight: 700, textAlign: 'center' }}>{dataDesc}</p>
      </Box>
      <Box sx={{ width: '100%', height: '50vw', padding: '0 2rem', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'hsla(357.29, 92.248%, 45.935%)' }}>
        <p style={{ margin: 0, fontSize: '15vw', fontWeight: 700 }}>{title}</p>
        <p style={{ margin: 0, fontSize: '5vw' }}>{desc}</p>
      </Box>
    </>
  )
}

export const SlideGif = (gif) => {
  return (
    <Box sx={{ marginBottom: '5vw' }}>
      <img src={gif} alt="journey image" style={{ width: '100%' }}/>
    </Box>
  )
}
