import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import './DestinationDetailsHeader.css';

export default function DestinationDetailsHeader({destinations}) {
    const { id } = useParams();
    const destinationArray = Object.values(destinations);
    const selectedDestination = destinationArray.find((destination) => destination.id.toString() === id);

    if (!selectedDestination) {
        return <Text>Destination not found</Text>;
    }

    const backgroundImageStyle = {
        backgroundImage: `url(${selectedDestination.image})`,
    };

    return (
        <Box id="destinationHeader" style={backgroundImageStyle}>
            <Box className="bottom-header">
                <Heading as='h1'>{selectedDestination.name}</Heading>
            </Box>
        </Box>
    );
}