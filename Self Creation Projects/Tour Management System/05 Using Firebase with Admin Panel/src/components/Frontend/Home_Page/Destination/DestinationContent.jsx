import { Box, Card, CardBody, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useDestinationContext } from '../../../../store/DestinationContext.jsx';
import './Destination.css';

export default function DestinationContent({destination}) {
    const { setExcludedName } = useDestinationContext();

    const handleReadMoreClick = () => {
        setExcludedName(destination.name);
    };

    return (
        <Link to={`../destination/${destination.id}`} onClick={handleReadMoreClick}>
            <Card maxW='xs' className='service-1-box'>
                <CardBody p={0}>
                    <Box className="service-1-image-overlay">
                        <Image
                            src={destination.image}
                            alt='Green double couch with wooden legs'
                        />
                        <Box className="service-1-overlay"></Box>
                    </Box>
                    <Stack spacing='3' p={4}>
                        <Heading size='md' className='heading'>{destination.name}</Heading>
                        <Text>
                            <Icon position='relative' bottom='0.1rem' marginRight='0.5rem' as={FiClock} />
                            {destination.duration}
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
        </Link>
    );
}