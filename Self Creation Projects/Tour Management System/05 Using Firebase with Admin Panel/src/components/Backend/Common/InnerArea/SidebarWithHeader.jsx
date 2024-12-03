import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, Heading, Icon, IconButton, Tooltip, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { RiMenu2Fill } from "react-icons/ri";
import MobileNav from './MobileNav';
import SidebarContent from './SidebarContent';

export default function SidebarWithHeader({ children }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef()

    return (
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <Flex
                justify="space-between"
                align="center"
                borderBottomWidth="1px"
                borderBottomColor={useColorModeValue('gray.700', 'gray.700')}
            >
                <Tooltip mt={2} hasArrow label='Navigation Menu' bg='gray.300' color='black' placement='auto-start'>
                    <IconButton ref={btnRef} ml={4} onClick={onOpen}>
                        <Icon as={RiMenu2Fill} />
                    </IconButton>
                </Tooltip>
                <Drawer
                    isOpen={isOpen}
                    placement='left'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerBody>
                            <SidebarContent onClose={onClose} />
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
                <Heading as="h1" ml='14rem' color='#00FF00'>Tour Management System</Heading>
                <MobileNav onOpen={onOpen} />
            </Flex>
            <Box p="4">
                {children}
            </Box>
        </Box>
    );
}