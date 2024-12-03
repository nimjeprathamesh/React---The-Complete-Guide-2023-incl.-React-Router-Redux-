import { Box, Divider, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './About.css';
import AboutHeader from './AboutHeader/AboutHeader.jsx';
import AboutDestinationContent from './InnerArea/AboutDestinationContent.jsx';
import InnerArea from './InnerArea/InnerArea.jsx';

export default function About() {
    const {destinations} = useLoaderData();
    const destinationArray = Object.values(destinations);
    
    return (
        <Box>
            <AboutHeader />
            <Box id="description_page">
                <InnerArea />
                <Box className="dest-area">
                    <Heading as='h1'>DESTINATION FOR THE CLIENT.</Heading>
                    <Divider className="horizontal" />
                    <Flex wrap="wrap" justifyContent="space-between" flex='1 1 calc(25% - 1rem)' gap={0}>
                        {destinationArray.map((destination) => (
                            <AboutDestinationContent key={destination.id} destination={destination} />
                        ))}
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
}