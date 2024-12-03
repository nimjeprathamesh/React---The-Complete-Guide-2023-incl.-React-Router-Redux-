import { Box, Divider, Heading, List, ListItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import '../MiddleFooter.css';

export default function PackagesArea({packages}) {
    const packageArray = Object.values(packages);

    return (
        <Box className="middlefooter-area">
            <Heading className='heading'>Packages<Divider className='hr' /></Heading>
            <List className="unorder">
                {packageArray.map((packages) => (
                    <ListItem key={packages.id}>
                        <NavLink
                            to={`../package/${packages.id}`}
                            className={({isActive}) => isActive ? 'activeLinks' : undefined}
                        >
                            &nbsp;{packages.title}
                        </NavLink>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}