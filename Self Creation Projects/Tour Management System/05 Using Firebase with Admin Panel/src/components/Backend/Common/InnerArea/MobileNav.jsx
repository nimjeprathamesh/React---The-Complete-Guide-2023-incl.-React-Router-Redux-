import { Avatar, Box, ChakraProvider, Collapse, Flex, HStack, Icon, IconButton, Menu, MenuButton, MenuItem, MenuItemOption, MenuList, MenuOptionGroup, Text, Tooltip, VStack } from "@chakra-ui/react";
import React from 'react';
import { FiBell, FiChevronDown, FiMoon, FiPower, FiSun } from "react-icons/fi";
import { WiMoonAltNew } from "react-icons/wi";
import useMobileNav from "../../../../hooks/useMobileNav";

export default function MobileNav({ onOpen, ...rest }) {
    const { showMenu, showThemeOptions, title, menuRef, notificationsRef, showNotifications, setShowMenu, handleLogout, handleSetTheme, handleMenuItemClick, handleBellIconClick } = useMobileNav();

    return (
        <Flex
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            {...rest}
        >
            <HStack spacing={{ base: '0', md: '6' }}>
                <Box ref={notificationsRef}>
                    <Tooltip hasArrow label='Notifications' bg='gray.300' color='black'>
                        <IconButton
                            size="lg"
                            variant="ghost"
                            aria-label="open menu"
                            icon={<FiBell />}
                            onClick={handleBellIconClick}
                        />
                    </Tooltip>
                    <Menu isOpen={showNotifications}>
                        <MenuList position='absolute' left='50.3rem' top='4.3rem' minWidth='20rem' minHeight='20rem'>
                            <Text position='relative' top='8.5rem' display='flex' justifyContent='center'>
                                No notification
                            </Text>
                        </MenuList>
                    </Menu>
                </Box>
                <Flex alignItems={'center'}>
                    <ChakraProvider>
                        <Box ref={menuRef}>
                            <Menu isOpen={showMenu}>
                                <Tooltip hasArrow label='Profile Menu' bg='gray.300' color='black'>
                                    <MenuButton p={0} transition="all 0.3s" onClick={() => setShowMenu(!showMenu)} >
                                        <HStack>
                                            <Avatar
                                                size={'sm'}
                                                src={
                                                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wb3N0LXVwZGF0ZXx8fHx8fHwxNjIxMjgyODQw&auto=format&fit=crop&w=500&q=60'
                                                }
                                            />
                                            <VStack display={{ base: 'none', md: 'flex' }} alignItems="flex-start" spacing="1px" ml="2" mt='1rem'>
                                                <Text fontSize="sm" mb={0}>Prathamesh Nimje</Text>
                                                <Text fontSize="xs" color="gray.600">Admin</Text>
                                            </VStack>
                                            <Box display={{ base: 'none', md: 'flex' }}>
                                                <Icon
                                                    as={FiChevronDown}
                                                    transition='all 0.3s'
                                                    transform={showMenu ? 'rotate(180deg)' : 'none'}
                                                />
                                            </Box>
                                        </HStack>
                                    </MenuButton>
                                </Tooltip>
                                <MenuList position='relative' left='0.5rem' bottom='1rem' minWidth='240px'>
                                    <MenuOptionGroup
                                        defaultValue='asc'
                                        title={title}
                                        type='radio'
                                        cursor='pointer'
                                        onClick={handleMenuItemClick}
                                    >
                                        <Collapse
                                            in={showThemeOptions}
                                            transition={{ exit: { delay: 0.1 }, enter: { duration: 2 } }}
                                            animateOpacity
                                        >
                                            <Box transition={{ exit: { delay: 0.1 }, enter: { duration: 2 } }}>
                                                <MenuItemOption value="default" onClick={() => handleSetTheme('system')}>
                                                    <Icon as={WiMoonAltNew} /> &nbsp; System Default
                                                </MenuItemOption>
                                                <MenuItemOption value="light" onClick={() => handleSetTheme('light')}>
                                                    <Icon as={FiSun} /> &nbsp; Light
                                                </MenuItemOption>
                                                <MenuItemOption value="dark" onClick={() => handleSetTheme('dark')}>
                                                    <Icon as={FiMoon} /> &nbsp; Dark
                                                </MenuItemOption>
                                            </Box>
                                        </Collapse>
                                    </MenuOptionGroup>
                                    <MenuItem onClick={handleLogout}>
                                        <Icon as={FiPower} /> &nbsp; Logout
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                    </ChakraProvider>
                </Flex>
            </HStack>
        </Flex>
    );
}