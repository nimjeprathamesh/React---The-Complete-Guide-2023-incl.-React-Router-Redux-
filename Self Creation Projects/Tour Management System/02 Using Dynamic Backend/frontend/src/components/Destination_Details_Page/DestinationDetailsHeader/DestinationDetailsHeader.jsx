import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { BACKEND_URL } from '../../../util/constant.jsx';
import './DestinationDetailsHeader.css';

export default function DestinationDetailsHeader({destinations}) {
    const backgroundImageStyle = {
        backgroundImage: `url(${BACKEND_URL + destinations.image})`,
    };

    return (
        <Box id="destinationHeader" style={backgroundImageStyle}>
            <Box className="bottom-header">
                <Heading as='h1'>{destinations.name}</Heading>
            </Box>
        </Box>
    );
}