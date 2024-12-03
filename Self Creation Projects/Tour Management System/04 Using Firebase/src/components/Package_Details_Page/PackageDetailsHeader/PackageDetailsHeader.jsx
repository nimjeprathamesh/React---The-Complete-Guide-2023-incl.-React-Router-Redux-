import { Box, Heading, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import './PackageDetailsHeader.css';

export default function PackageDetailsHeader({packagesData}) {
    const { id } = useParams();
    const packageArray = Object.values(packagesData);
    const selectedPackage = packageArray.find((packages) => packages.id === id);

    if (!selectedPackage) {
        return <Text>Destination not found</Text>;
    }

    const backgroundImageStyle = {
        backgroundImage: `url(${selectedPackage.image})`,
    };

    return (
        <Box id="packageDetailsHeader" style={backgroundImageStyle}>
            <Box className="bottom-header">
                <Heading as='h1'>{selectedPackage.title}</Heading>
            </Box>
        </Box>
    );
}