import { Box, Divider, Heading, List, ListItem } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { menuItem } from '../../../MenuItem.jsx';
import '../MiddleFooter.css';

export default function QuickLinks() {
    return (
        <Box className="middlefooter-area">
            <Heading className='heading'>Quick Links<Divider className='hr' /></Heading>
            <List className="unorder">
                {menuItem.map((item, index) => (
                    <ListItem key={index}>
                        <NavLink
                            to={item.to}
                            className={({isActive}) => (isActive ? 'activeLinks' : undefined)}
                        >
                            {item.name}
                        </NavLink>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}