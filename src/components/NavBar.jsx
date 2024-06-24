import React from 'react'
import { BsInfoLg } from 'react-icons/bs'
import { HiLanguage } from 'react-icons/hi2'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoIosMoon, IoIosSunny } from 'react-icons/io'
import { IoMdArrowDropdown, IoMdCall } from 'react-icons/io'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
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
  useColorMode,
  useDisclosure
} from '@chakra-ui/react'

import logo from '../images/logo.png'

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex w='100%' p={10} position='fixed' justifyContent='space-between'>
      <IconButton icon={<Image src={logo} />} colorScheme='none' />
      <IconButton
        aria-label='Menu'
        icon={<GiHamburgerMenu color='white' />}
        colorScheme='none'
        fontSize={30}
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
          <DrawerFooter>
          <IconButton
            icon={colorMode === 'light' ? <IoIosSunny /> : <IoIosMoon />}
            isRound='true'
            size='lg'
            onClick={toggleColorMode}
          />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export default NavBar
