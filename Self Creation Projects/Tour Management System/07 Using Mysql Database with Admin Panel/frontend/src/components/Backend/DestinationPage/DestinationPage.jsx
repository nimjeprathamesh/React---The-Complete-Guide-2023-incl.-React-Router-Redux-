import { Box, Card, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BACKEND_URL } from "../../../util/constant.jsx";
import DestinationDescription from './DestinationDetails.jsx';
import DestinationHeader from './DestinationHeader.jsx';
import './DestinationPage.css';

export default function DestinationPage() {
    const { destinations } = useLoaderData();
    const [destinationsData, setDestinationsData] = useState(destinations);

    async function onDelete(id) {
        const url = BACKEND_URL + 'api/destinationData/' + id;
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            console.error('Failed to delete destination:', errorMessage);
            return;
        }
        setDestinationsData(prevDestinations => prevDestinations.filter(destination => destination.id !== id));
    }

    useEffect(() => {
        setDestinationsData(destinationsData);
    }, [destinations]);

    return (
        <Box id="destination_content">
            <DestinationHeader />
            <Flex flexWrap="wrap" justifyContent="space-between" margin='0 0.5rem'>
                {destinationsData.map((destination) => (
                    <Card
                        key={destination.id}
                        className="destination-card"
                        maxW='md'
                        margin='0.5rem'
                        flex="1 0 calc(33.33% - 1rem)"
                        p={0}
                        overflow='hidden'
                    >
                        <DestinationDescription key={destination.id} destination={destination} onDelete={onDelete} />
                    </Card>
                ))}
            </Flex>
        </Box>
    );
}
