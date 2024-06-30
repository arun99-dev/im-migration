import { useState } from 'react'
import {
  Box,
  List,
  Button,
  Drawer,
  Divider,
  ListItem,
  IconButton,
  ListItemText,
  ListItemButton 
} from '@mui/material/'
import { RiMenuLine } from 'react-icons/ri'

import logo from '../images/logoLight.png'

const NavBar = ({ selectedIndex, setSelectedIndex }) => {
  const [open, setOpen] = useState(false)
  const toggleLang = (lang) => () => {
    setOpen(false)
    setSelectedIndex(lang)
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
        position: 'absolute',
        top: 0,
        zIndex: 1,
        background: 'var(--dark)'
      }}
    >
      <Button onClick={() => window.location.reload()}>
        <img src={logo} alt="im-migration logo" style={{ width: 150 }} />
      </Button>
      <IconButton sx={{ fontSize: 50 }} onClick={() => setOpen(true)}>
        <RiMenuLine style={{ color: 'var(--red)' }}/>
      </IconButton>
      <Drawer anchor={'right'} open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{ height: '100%', color: 'var(--red)', background: 'var(--dark)' }}
          onClose={() => setOpen(false)}
        >
          <List>
            {['Chi Siamo?', 'Numero Anti-Razzismo'].map((text) => (
              <ListItem key={text}>
                <ListItemButton><ListItemText primary={text} /></ListItemButton>
              </ListItem>
            ))}
            <Divider />
            <List>
              <ListItemButton selected={selectedIndex === 0} onClick={toggleLang(0)}>
                <ListItemText primary='Italiano' />
              </ListItemButton>
              <ListItemButton selected={selectedIndex === 1} onClick={toggleLang(1)}>
                <ListItemText primary='English' />
              </ListItemButton>
            </List>
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}

export default NavBar
