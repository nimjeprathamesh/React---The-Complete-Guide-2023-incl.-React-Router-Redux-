import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTheme from '../../../hooks/useTheme.jsx';
import './Destination.css';
import DestinationContent from './DestinationContent.jsx';
import DestinationHeader from './DestinationHeader/DestinationHeader.jsx';

export default function Destination() {
    const {destinations} = useLoaderData();
    const destinationArray = Object.values(destinations);
    const {themeCss} = useTheme();

    return (
        <Box>
            <DestinationHeader />
            <Box id="inner-page">
                <Flex
                    wrap='wrap'
                    justifyContent='center'
                    flex='1 1 calc(25% - 1rem)'
                    className="inner-area"
                    gap={5}
                    style={themeCss}
                >
                    {destinationArray.map((destination) => (
                        <DestinationContent key={destination.id} destination={destination} />
                    ))}
                </Flex>
            </Box>
        </Box>
    );
}