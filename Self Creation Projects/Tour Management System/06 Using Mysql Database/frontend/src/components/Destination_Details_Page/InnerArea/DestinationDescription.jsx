import { TimeIcon } from '@chakra-ui/icons';
import { Box, Divider, Heading, Icon, Img, Text } from '@chakra-ui/react';
import React from 'react';
import { FaRegCalendar } from "react-icons/fa";
import { useTheme } from '../../../hooks/useTheme';
import { BACKEND_URL } from '../../../util/constant';
import './DestinationDescription.css';

export default function DestinationDescription({destination}) {
    const {isDark} = useTheme();
    const borderColor = isDark ? 'lightBorder' : 'darkBorder';
    const formattedDate = new Date(destination.Date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const detailsParagraphs = destination.Details.split('\n');

    return (
        <Box margin='1.2rem 0' width='72%'>
            <Heading as='h5'>
                <Icon as={FaRegCalendar} color='#ff1944' position='relative' mr={2} bottom='0.2rem' />
                {formattedDate}
            </Heading>
            <Divider className={borderColor} m={0} />
            <Img mt={4} src={BACKEND_URL + 'public/' + destination.Image} alt='Destination Details' />
            <Text><Text as='i'><TimeIcon /></Text> {destination.Duration}</Text>
            {detailsParagraphs.map((paragraph, index) => (
                <Text key={index}>
                    {index > 0}
                    {paragraph}
                </Text>
            ))}
        </Box>
    );
}