import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import './PackageDetailsHeader.css';

export default function PackageDetailsHeader({packages}) {
    const { id } = useParams();
    const packageArray = Object.values(packages);
    const selectedPackage = packageArray.find((packages) => packages.id.toString() === id);

    if (!selectedPackage) {
        return (
            <Text>Destination not found</Text>
        );
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