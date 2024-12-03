import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import './DestinationDetailsHeader.css';

export default function DestinationDetailsHeader({destination}) {
    const backgroundImageStyle = {
        backgroundImage: `url(${destination.Image})`,
    };

    return (
        <Box id="destinationHeader" style={backgroundImageStyle}>
            <Box className="bottom-header">
                <Heading as='h1'>{destination.Name}</Heading>
            </Box>
        </Box>
    );
}