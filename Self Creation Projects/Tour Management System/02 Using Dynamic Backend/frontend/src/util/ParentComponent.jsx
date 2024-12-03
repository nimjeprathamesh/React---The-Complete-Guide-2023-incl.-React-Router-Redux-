import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import DestinationList from '../components/Destination_Details_Page/InnerArea/DestinationList';
import DestinationContent from '../components/Destination_Page/DestinationContent';
import { destinationsData } from './DestinationsData';

export default function DestinationPage() {
    const [selectedDestination, setSelectedDestination] = useState(null);

    const handleReadMoreClick = (destinationId) => {
        setSelectedDestination(destinationId);
    };

    const filteredDestinations = destinationsData.filter(
        (destination) => destination.id !== selectedDestination
    );

    return (
        <Box>
            <DestinationContent
                id={selectedDestination}
                onReadMoreClick={handleReadMoreClick}
            />
            <DestinationList
                destinations={filteredDestinations}
            />
        </Box>
    );
}
