import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { useTheme } from '../../hooks/useTheme.jsx';
import { destinationsData } from '../Dummy_Data/DestinationsData.jsx';
import './Destination.css';
import DestinationContent from './DestinationContent.jsx';
import DestinationHeader from './DestinationHeader/DestinationHeader.jsx';

export default function Destination() {
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
                    {destinationsData.map((destination) => (
                        <DestinationContent key={destination.id} destination={destination} />
                    ))}
                </Flex>
            </Box>
        </Box>
    );
}