import { Box, Divider, Heading, List, ListItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useDestinationContext } from '../../../../../store/DestinationContext.jsx';
import '../MiddleFooter.css';

export default function DestinationsArea({destinations}) {
    const destinationArray = Object.values(destinations);
    const { setExcludedName } = useDestinationContext();

    function handleReadMoreClick(name) {
        setExcludedName(name);
    }

    return (
        <Box className="middlefooter-area">
            <Heading className='heading'>Destinations<Divider className='hr' /></Heading>
            <List className="unorder scroll">
                {destinationArray
                    .filter((destination) => destination.name !== setExcludedName)
                    .map((destination) => (
                        <ListItem key={destination.id}>
                            <NavLink
                                to={`../destination/${destination.id}`}
                                className={({isActive}) => isActive ? 'activeLinks' : undefined}
                                onClick={handleReadMoreClick}
                            >
                                &nbsp; {destination.name}
                            </NavLink>
                        </ListItem>
                    )
                )}
            </List>
        </Box>
    );
}