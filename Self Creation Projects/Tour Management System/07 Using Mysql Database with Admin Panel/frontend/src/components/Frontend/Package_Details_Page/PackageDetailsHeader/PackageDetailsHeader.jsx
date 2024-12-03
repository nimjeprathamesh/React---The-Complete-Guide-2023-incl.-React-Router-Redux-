import { Box, Heading } from '@chakra-ui/react';
import './PackageDetailsHeader.css';

export default function PackageDetailsHeader({packages}) {
    const backgroundImageStyle = {
        backgroundImage: `url(${packages.Image})`,
    };

    return (
        <Box id="packageDetailsHeader" style={backgroundImageStyle}>
            <Box className="bottom-header">
                <Heading as='h1'>{packages.Title}</Heading>
            </Box>
        </Box>
    );
}