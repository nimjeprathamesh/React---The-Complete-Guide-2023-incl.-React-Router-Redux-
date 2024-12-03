import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { BACKEND_URL } from '../../../util/constant';
import './DestinationDetailsHeader.css';

export default function DestinationDetailsHeader({destination}) {
    const backgroundImageStyle = {
        backgroundImage: `url(${BACKEND_URL + 'public/' + destination.Image})`,
    };

    return (
        <Box id="destinationHeader" style={backgroundImageStyle}>
            <Box className="bottom-header">
                <Heading as='h1'>{destination.Name}</Heading>
            </Box>
        </Box>
    );
}