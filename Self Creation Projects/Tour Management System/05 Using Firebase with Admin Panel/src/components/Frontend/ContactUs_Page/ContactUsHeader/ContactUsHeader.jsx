import { Box, Heading } from '@chakra-ui/react';
import './ContactUsHeader.css';

export default function ContactUsHeader() {
    return (
        <Box id="contactUsHeader">
            <Box className="bottom-header">
                <Heading as='h1'>Contact Us</Heading>
            </Box>
        </Box>
    );
}