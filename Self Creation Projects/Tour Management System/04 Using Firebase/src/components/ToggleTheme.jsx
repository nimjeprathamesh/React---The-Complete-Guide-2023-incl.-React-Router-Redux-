import { Box, Button, ChakraProvider, Icon, Menu, MenuButton, MenuItem, MenuList, useColorMode } from "@chakra-ui/react";
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { WiMoonAltNew } from "react-icons/wi";

export default function ToggleTheme() {
    const { colorMode, toggleColorMode } = useColorMode();

    function handleSetTheme(themeMode) {
        if (themeMode === 'system') {
            toggleColorMode();
        } else if (themeMode === 'light' && colorMode !== 'light') {
            toggleColorMode();
        } else if (themeMode === 'dark' && colorMode !== 'dark') {
            toggleColorMode();
        }
    }

    return (
        <ChakraProvider>
            <Box position='absolute' top='0.5rem' left='81rem'>
                <Menu placement="left">
                    <MenuButton as={Button}><FontAwesomeIcon icon={faPalette} /></MenuButton>
                    <MenuList position='absolute' inset='unset' top='1.5rem' right='-3.6rem' >
                        <MenuItem onClick={() => handleSetTheme('system')}>
                            <Icon as={WiMoonAltNew} /> &nbsp; System Default
                        </MenuItem>
                        <MenuItem onClick={() => handleSetTheme('light')}>
                            <Icon as={FiSun} /> &nbsp; Light
                        </MenuItem>
                        <MenuItem onClick={() => handleSetTheme('dark')}>
                            <Icon as={FiMoon} /> &nbsp; Dark
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </ChakraProvider>
    );
}