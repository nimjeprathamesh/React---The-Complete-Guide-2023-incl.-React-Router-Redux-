import { TimeIcon } from '@chakra-ui/icons';
import { Box, Button, Card, CardBody, CardFooter, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { FiChevronsRight } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme.jsx';
import { useDestinationContext } from '../../store/DestinationContext.jsx';
import { BACKEND_URL } from '../../util/constant.jsx';
import './Destination.css';

export default function DestinationContent({destination}) {
    const { setExcludedName } = useDestinationContext();
    const {isDark} = useTheme();
    const buttonHoverClass = isDark ? 'service-btn-dark' : 'service-btn-light';

    function handleReadMoreClick() {
        setExcludedName(destination.name);
    };

    return (
        <Card maxW='sm' className="destination">
            <CardBody p={0} overflow='hidden'>
                <Box className="desti-img-overlay">
                    <Image src={BACKEND_URL + 'public/' + destination.Image} borderTopRadius='lg' alt='Destination' />
                    <Box className="desti-overlay"></Box>
                </Box>
                <Stack p={4} spacing='3'>
                    <Heading size='md'>{destination.Name}</Heading>
                    <Text as='p'>{destination.Details}</Text>
                    <Text>
                        <Icon as={TimeIcon} position='relative' bottom='0.1rem' mr={1} />{destination.Duration}
                    </Text>
                </Stack>
            </CardBody>
            <CardFooter pt={0}>
                <Link to={`../destination/${destination.id}`} onClick={handleReadMoreClick}>
                    <Button className={`service-btn ${buttonHoverClass}`}>
                        Read more<Icon as={FiChevronsRight} />
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}