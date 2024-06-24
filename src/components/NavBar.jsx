import React from 'react'
import { IoMenu } from 'react-icons/io5'
import { BsInfoLg } from 'react-icons/bs'
import { HiLanguage } from 'react-icons/hi2'
import { IoMdArrowDropdown, IoMdCall } from 'react-icons/io'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Stack,
  useDisclosure
} from '@chakra-ui/react'

import logo from '../images/logo.png'

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <Flex w='100%' p={10} position='fixed' justifyContent='space-between'>
      <IconButton icon={<Image src={logo} />} colorScheme='none' />
      <IconButton
        aria-label='Menu'
        icon={<IoMenu />}
        colorScheme='none'
        fontSize={35}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader />
          <DrawerBody as={Stack} align='start' spacing={5} p={10}>
            <Button leftIcon={<BsInfoLg fontSize={20} />} variant='none'>About: Us & Project</Button>
            <Button leftIcon={<IoMdCall fontSize={20} />} variant='none'>Anti-Discrimination</Button>
            <Menu>
              <MenuButton as={Button} leftIcon={<HiLanguage fontSize={20} />} rightIcon={<IoMdArrowDropdown fontSize={20} />} variant='none'>Language</MenuButton>
              <MenuList>
              <MenuOptionGroup title='Select Language' defaultValue='eng' type='radio'>
                <MenuItemOption value='eng'>English</MenuItemOption>
                <MenuItemOption value='it'>Italiano</MenuItemOption>
              </MenuOptionGroup>
              </MenuList>
            </Menu>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export default NavBar
