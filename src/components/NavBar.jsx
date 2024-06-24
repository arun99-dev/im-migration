import { IoMenu } from 'react-icons/io5'
import { BsInfoLg } from 'react-icons/bs'
import { IoMdCall } from 'react-icons/io'
import { HiLanguage } from 'react-icons/hi2'
import { Flex, IconButton, Image, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

import logo from '../images/logo.png'

const NavBar = () => {
  return (
    <Flex w='100%' p={10} position='fixed' justifyContent='space-between'>
      <IconButton icon={<Image src={logo} />} colorScheme='none' />
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Menu'
          icon={<IoMenu />}
          colorScheme='none'
          fontSize={35}
        />
        <MenuList>
          <MenuItem icon={<HiLanguage fontSize={20} />}> Language </MenuItem>
          <MenuItem icon={<BsInfoLg fontSize={20} />}> About: Us & Project </MenuItem>
          <MenuItem icon={<IoMdCall fontSize={20} />}> Anti-Discrimination Number </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default NavBar
