import { Box, Card, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BACKEND_URL } from "../../../util/constant.jsx";
import DestinationDescription from './DestinationDetails.jsx';
import DestinationHeader from './DestinationHeader.jsx';
import './DestinationPage.css';

export default function DestinationPage() {
    const { destinations } = useLoaderData();
    const destinationArray = Object.entries(destinations).map(([key, value]) => ({ ...value, key }));
    const [destinationsData, setDestinationsData] = useState(destinationArray);

    async function onDelete(id) {
        try {
            const url = `${BACKEND_URL}/destinationsData/${id}.json`;
            console.log(`Attempting to delete destination with URL: ${url}`);
            
            const response = await fetch(url, {
                method: 'DELETE',
            });
    
            if (!response.ok) {
                const errorMessage = await response.text();
                console.error('Failed to delete destination:', errorMessage);
                return;
            }
    
            console.log(`Successfully deleted destination with ID: ${id}`);
            setDestinationsData(prevDestinations => prevDestinations.filter(destination => destination.key !== id));
        } catch (error) {
            console.error('Error deleting destination:', error);
        }
    }

    async function onUpdate(updatedDestination) {
        try {
            const url = `${BACKEND_URL}/destinationsData/${updatedDestination.key}.json`;
            console.log(`Attempting to update destination with URL: ${url}`);
            
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedDestination)
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                console.error('Failed to update destination:', errorMessage);
                return;
            }

            console.log(`Successfully updated destination with ID: ${updatedDestination.key}`);
            setDestinationsData(prevDestinations =>
                prevDestinations.map(destination =>
                    destination.key === updatedDestination.key ? updatedDestination : destination
                )
            );
        } catch (error) {
            console.error('Error updating destination:', error);
        }
    }

    useEffect(() => {
        setDestinationsData(destinationArray);
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
                        <DestinationDescription
                            key={destination.key}
                            destination={destination}
                            onDelete={onDelete}
                            onUpdate={onUpdate}
                        />
                    </Card>
                ))}
            </Flex>
        </Box>
    );
}
