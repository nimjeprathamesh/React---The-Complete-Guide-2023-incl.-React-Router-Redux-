import { Box, Divider, Heading, List, ListItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../../hooks/useTheme.jsx';
import './PackageList.css';

export default function PackageList({packages, excludeName}) {
    const {isDark} = useTheme();
    const borderColor = isDark ? 'lightBorder' : 'darkBorder';

    return (
        <Box className="inner-box-2">
            <Heading as='h6' fontSize='1rem'>OTHER PACKAGES</Heading>
            <Divider className='hr-1' />
            <Divider className='hr-2' />
            <List className={borderColor}>
                {packages
                    .filter((packages) => packages.title !== excludeName)
                    .map((packages) => (
                        <ListItem key={packages.id} className={borderColor}>
                            <NavLink to={`../package/${packages.id}`}>
                                {packages.title}
                            </NavLink>
                        </ListItem>
                    )
                )}
            </List>
        </Box>
    );
}