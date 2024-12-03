import { TimeIcon } from '@chakra-ui/icons';
import { Box, Divider, Heading, Icon, Img, Text } from '@chakra-ui/react';
import React from 'react';
import { FaRegCalendar } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { useTheme } from '../../../hooks/useTheme';
import './DestinationDescription.css';

export default function DestinationDescription({destinations}) {
    const {isDark} = useTheme();
    const borderColor = isDark ? 'lightBorder' : 'darkBorder';
    const { id } = useParams();
    const destinationArray = Object.values(destinations);
    const selectedDestination = destinationArray.find((destination) => destination.id.toString() === id);

    if (!selectedDestination) {
        return (
            <Text>Destination not found</Text>
        );
    }

    const detailsParagraphs = selectedDestination.details.split('\n');

    return (
        <Box margin='1.2rem 0' width='72%'>
            <Heading as='h5'>
                <Icon as={FaRegCalendar} color='#ff1944' position='relative' mr={2} bottom='0.2rem' />
                {selectedDestination.date}
            </Heading>
            <Divider className={borderColor} m={0} />
            <Img mt={4} src={selectedDestination.image} alt='Destination Details' />
            <Text><Text as='i'><TimeIcon /></Text> {selectedDestination.duration}</Text>
            {detailsParagraphs.map((paragraph, index) => (
                <Text key={index}>
                    {index > 0}
                    {paragraph}
                </Text>
            ))}
        </Box>
    );
}