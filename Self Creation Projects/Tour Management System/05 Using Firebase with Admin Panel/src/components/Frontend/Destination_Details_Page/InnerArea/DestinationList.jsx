import { Box, Divider, Heading, List, ListItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import useTheme from '../../../../hooks/useTheme.jsx';
import './DestinationList.css';

export default function DestinationList({destination, excludeName}) {
    const destinationArray = Object.values(destination);
    const {isDark} = useTheme();
    const borderColor = isDark ? 'lightBorder' : 'darkBorder';

    return (
        <Box className="desti-list">
            <Heading as='h6' fontSize='1rem'>NEXT DESTINATION</Heading>
            <Divider className='hr-1' />
            <Divider className='hr-2' />
            <List className={borderColor}>
                {destinationArray
                    .filter((destination) => destination.name !== excludeName)
                    .map((destination) => (
                        <ListItem key={destination.id} className={borderColor}>
                            <NavLink to={`../destination/${destination.id}`}>
                                {destination.name}
                            </NavLink>
                        </ListItem>
                    )
                )}
            </List>
        </Box>
    );
}