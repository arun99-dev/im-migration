import { IconButton } from '@mui/material'
import { useEffect, useState } from 'react'
import { BsArrowUpCircleFill } from 'react-icons/bs'

const Scroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {window.removeEventListener('scroll', handleScroll)}
  }, [])

  return (
    <IconButton
      sx={{
        padding: 0,
        position: 'fixed',
        bottom: 50,
        right: 50,
        zIndex: 1,
        opacity: scrollPosition > 300 ? .5 : 0,
        background: 'var(--red)',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        transition: 'opacity .25s',
        '&:hover, &:focus': {
          opacity: 1,
          background: 'var(--red)'
        },
      }}
      onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
    >
      <BsArrowUpCircleFill style={{ fontSize: 100, color: 'white' }} />
    </IconButton>
  )
}


export default Scroll
