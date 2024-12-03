import { Box, Heading } from '@chakra-ui/react';
import './AboutHeader.css';

export default function AboutHeader() {
    return (
        <Box id="About_header">
            <Box className="bottom-header">
                <Heading as='h1'>About</Heading>
            </Box>
        </Box>
    );
}