import { Box, Heading } from '@chakra-ui/react';
import './DestinationHeader.css';

export default function DestinationHeader() {
    return (
        <Box id="destHeader">
            <Box className="bottom-header">
                <Heading as='h1'>Destination</Heading>
            </Box>
        </Box>
    );
}