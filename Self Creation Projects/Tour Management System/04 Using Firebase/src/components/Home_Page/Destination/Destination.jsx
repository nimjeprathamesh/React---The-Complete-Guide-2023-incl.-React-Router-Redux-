import { Box, Button, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { FiEye } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../hooks/useTheme.jsx';
import './Destination.css';
import DestinationContent from './DestinationContent.jsx';

export default function Destination({destinations}) {
    const destinationArray = Object.values(destinations);
    const limitedDestinations = destinationArray.slice(0, 4);
    const {isDark} = useTheme();
    const buttonHoverClass = isDark ? 'service-1-area-btn-dark' : 'service-1-area-btn-light';

    return (
        <Box id="homePageDestination">
            <Heading as="h1" size="xl">
                <Text as='span' fontWeight='bold'>Top</Text> Destinations
            </Heading>
            <Flex wrap="wrap" justifyContent="space-between" flex='1 1 calc(25% - 1rem)' margin='4rem 1rem'>
                {limitedDestinations.map((destination) => (
                    <DestinationContent key={destination.id} destination={destination} />
                ))}
            </Flex>
            <Link to='/destination'>
                <Button className={`service-1-area-btn ${buttonHoverClass}`}>
                    <Icon marginRight='0.5rem' as={FiEye} />VIEW ALL DESTINATION
                </Button>
            </Link>
        </Box>
    )
}