import { useState } from 'react'
import {
  Box,
  List,
  Button,
  Drawer,
  Divider,
  Collapse,
  ListItem,
  IconButton,
  ListItemText,
  ListItemButton 
} from '@mui/material/'
import { RiMenuLine } from 'react-icons/ri'
import { HiTranslate } from "react-icons/hi"
import { BsInfoCircleFill } from 'react-icons/bs'
import { IoIosCall, IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'

import logoDark from '../images/logoDark.png'
import logoLight from '../images/logoLight.png'

const NavBar = ({ selectedSoul, selectedLang, setSelectedLang }) => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [openMenu, setOpenMenu] = useState(true)
  const toggleLang = (lang) => () => {
    setOpenDrawer(false)
    setOpenMenu(false)
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
                <ListItemText primary={'Chi Siamo?'} sx={{ marginLeft: 2 }} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <IoIosCall color='var(--red)' />
                <ListItemText primary={'Numero Anti-Razzismo'} sx={{ marginLeft: 2 }} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={() => setOpenMenu(!openMenu)}>
                <HiTranslate />
                <ListItemText primary='Translate' sx={{ marginLeft: 2 }} />
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
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}

export default NavBar
