import { Avatar, Flex, IconButton, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Input, Button, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, List, ListItem, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react'
import { useRef } from 'react';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement='start'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>
                    <DrawerBody>
                        <Input placeholder='Type here...' />
                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                        Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
            <Flex h="75px" bg="brand.800" justifyContent="space-between" align="center" px={4}>
                <IconButton 
                    onClick={onOpen}
                    ref={btnRef}
                    variant="ghost" color="white" _hover={{ bg: "main.400" }} fontSize="2xl"
                >
                    <FaBars />
                </IconButton>
                <Menu>
                    <MenuButton>
                        <Avatar />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Profil</MenuItem>
                        <MenuItem>Paramètre</MenuItem>
                    </MenuList>
                </Menu>
                {/* <Popover>
                    <PopoverTrigger>
                        <Avatar />
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Confirmation!</PopoverHeader>
                        <PopoverBody>
                            <List>
                                <ListItem>Profil</ListItem>
                                <ListItem>Paramètre</ListItem>
                            </List>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>               */}
            </Flex>
        </>
    )
}

export default NavBar