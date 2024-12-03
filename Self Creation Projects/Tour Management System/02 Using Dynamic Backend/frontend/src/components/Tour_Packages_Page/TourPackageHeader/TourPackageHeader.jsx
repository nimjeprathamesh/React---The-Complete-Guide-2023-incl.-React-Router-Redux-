import { Box, Heading } from '@chakra-ui/react';
import './TourPackageHeader.css';

export default function TourPackageHeader() {
    return (
        <Box id="tourPackageHeader">
            <Box className="bottom-header">
                <Heading as='h1'>Tour Packages</Heading>
            </Box>
        </Box>
    );
}