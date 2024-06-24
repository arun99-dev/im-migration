import { IoMenu } from 'react-icons/io5'
import { BsInfoLg } from 'react-icons/bs'
import { IoMdCall } from 'react-icons/io'
import { HiLanguage } from 'react-icons/hi2'
import { Button, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'


const NavBar = () => {
  return (
    <Flex w='100%' position='fixed' justifyContent='space-between'>
      <Button colorScheme='red' variant='solid'>
        <Text> i&apos;m-migration </Text>
      </Button>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Menu'
          icon={<IoMenu />}
          variant='outline'
        />
        <MenuList>
          <MenuItem icon={<HiLanguage />}> Language </MenuItem>
          <MenuItem icon={<BsInfoLg />}> About: Us & Project </MenuItem>
          <MenuItem icon={<IoMdCall />}> Anti-discrimination Toll-Free Number </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default NavBar
