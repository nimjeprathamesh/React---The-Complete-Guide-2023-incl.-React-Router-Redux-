import { Box, Divider, Heading, List, ListItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import '../MiddleFooter.css';

export default function PackagesArea({packages}) {
    return (
        <Box className="middlefooter-area">
            <Heading className='heading'>Packages<Divider className='hr' /></Heading>
            <List className="unorder">
                {packages.map((packages) => (
                    <ListItem key={packages.id}>
                        <NavLink
                            to={`../package/${packages.id}`}
                            className={({isActive}) => isActive ? 'activeLinks' : undefined}
                        >
                            {packages.title}
                        </NavLink>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}