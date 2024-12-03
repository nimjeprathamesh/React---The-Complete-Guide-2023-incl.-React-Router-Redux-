import { Box, Heading } from '@chakra-ui/react';
import { BACKEND_URL } from '../../../util/constant.jsx';
import './PackageDetailsHeader.css';

export default function PackageDetailsHeader({packages}) {
    const backgroundImageStyle = {
        backgroundImage: `url(${BACKEND_URL + packages.image})`,
    };

    return (
        <Box id="packageDetailsHeader" style={backgroundImageStyle}>
            <Box className="bottom-header">
                <Heading as='h1'>{packages.title}</Heading>
            </Box>
        </Box>
    );
}