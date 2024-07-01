import { useState } from 'react'
import {
  Box,
  List,
  Button,
  Drawer,
  Collapse,
  ListItem,
  IconButton,
  ListItemText,
  ListItemButton 
} from '@mui/material/'
import { RiMenuLine } from 'react-icons/ri'
import { HiTranslate } from 'react-icons/hi'
import { BsInfoCircleFill } from 'react-icons/bs'
import { BiSolidDonateHeart } from 'react-icons/bi'
import { IoIosCall, IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'

import logoDark from '../images/logoDark.webp'
import logoLight from '../images/logoLight.webp'

const NavBar = ({ selectedSoul, selectedLang, setSelectedLang }) => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [openMenu, setOpenMenu] = useState(true)
  const toggleLang = (lang) => () => {
    setOpenDrawer(false)
    setSelectedLang(lang)
  }

  return (
    <Box
      sx={{
        width: '100%',
        paddingX: 2,
        paddingY: 1,
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'fixed',
        top: 0,
        zIndex: 1,
        background: selectedSoul ? 'var(--dark)' : 'none'
      }}
    >
      <Button onClick={() => window.location.reload()}>
        <img src={selectedSoul ? logoLight : logoDark} alt="im-migration logo" style={{ width: 150 }} />
      </Button>
      <IconButton sx={{ fontSize: 50 }} onClick={() => setOpenDrawer(true)}>
        <RiMenuLine style={{ color: 'var(--red)' }}/>
      </IconButton>
      <Drawer anchor={'right'} open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box
          sx={{ height: '100%', color: 'var(--red)', background: 'var(--dark)' }}
          onClose={() => setOpenDrawer(false)}
        >
          <List>
            <ListItem>
              <ListItemButton>
                <BsInfoCircleFill color='var(--red)' />
                <ListItemText primary={selectedLang ? 'About Us' : 'Chi Siamo?'} sx={{ marginLeft: 2 }} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={() => window.open('https://shorturl.at/Q18xZ', '_blank')}>
                <IoIosCall color='var(--red)' />
                <ListItemText primary={selectedLang ? 'Anti-Racism Number' : 'Numero Antidiscriminazione'} sx={{ marginLeft: 2 }} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={() => setOpenMenu(!openMenu)}>
                <HiTranslate />
                <ListItemText primary={selectedLang ? 'Translate' : 'Traduci'} sx={{ marginLeft: 2 }} />
                {openMenu ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              </ListItemButton>
            </ListItem>
            <Collapse in={openMenu} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItemButton sx={{ pl: 6 }} selected={selectedLang === 0} onClick={toggleLang(0)}>
                  <ListItemText primary='Italiano' />
                </ListItemButton>
                <ListItemButton sx={{ pl: 6 }} selected={selectedLang === 1} onClick={toggleLang(1)}>
                  <ListItemText primary='English' />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItem sx={{ position: 'fixed', bottom: 0 }}>
              <ListItemButton onClick={() => window.open('https://shorturl.at/eLNev', '_blank')}>
                <BiSolidDonateHeart color='var(--red)' />
                <ListItemText primary={selectedLang ? 'Donate' : 'Dona'} sx={{ marginLeft: 2 }} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}

export default NavBar
