import { Box, Flex, HStack, Icon, Img, List, ListItem } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import ToggleTheme from '../../../ToggleTheme.jsx';
import { menuItem } from '../../MenuItem.jsx';
import './BottomHeader.css';

export default function BottomHeader() {
    return (
        <Box id="bottom-header" p={2}>
            <Flex justifyContent='space-between' flex="1 0 calc(33.33% - 1rem)" gap='7rem'>
                <Img src={require('../../../../images/logo.png')} alt='It is a logo.' />
                <HStack>
                    {menuItem.map((item, index) => (
                        <List key={index} m={0} p={0}>
                            <ListItem>
                                <NavLink
                                    to={item.to}
                                    className={({isActive}) => (
                                        isActive ? 'activeBottomHeader' : undefined
                                    )}
                                >
                                    <Icon position='relative' bottom='0.1rem' as={item.icon} /> {item.name}
                                </NavLink>
                            </ListItem>
                        </List>
                    ))}
                </HStack>
                <ToggleTheme />
            </Flex>
        </Box>
    );
}