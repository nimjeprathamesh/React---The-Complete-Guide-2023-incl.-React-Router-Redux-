import { TimeIcon } from '@chakra-ui/icons';
import { Box, Button, Card, CardBody, CardFooter, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { FiChevronsRight } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useTheme } from '../../../../hooks/useTheme.jsx';
import { useDestinationContext } from '../../../../store/DestinationContext.jsx';
import { BACKEND_URL } from '../../../../util/constant.jsx';
import '../About.css';

export default function AboutDestinationContent({destination}) {
    const { setExcludedName } = useDestinationContext();
    const {isDark} = useTheme();
    const buttonHoverClass = isDark ? 'service-btn-dark' : 'service-btn-light';

    function handleReadMoreClick() {
        setExcludedName(destination.Name);
    };

    return (
        <Card maxW='xs' width='18rem' className="destination">
            <CardBody p={0}>
                <Box className="desti-img-overlay">
                    <Image src={BACKEND_URL + 'public/' + destination.Image} />
                    <Box className="desti-overlay"></Box>
                </Box>
                <Stack spacing='3' p={4}>
                    <Heading fontSize='20px'>{destination.Name}</Heading>
                    <Text as='p'>{destination.details}</Text>
                    <Text>
                        <Icon as={TimeIcon} position='relative' bottom='0.1rem' marginRight='0.5rem' />
                        {destination.Duration}
                    </Text>
                </Stack>
            </CardBody>
            <CardFooter padding='0 0 1rem 1rem'>
                <Link to={`../destination/${destination.id}`} onClick={handleReadMoreClick}>
                    <Button className={`service-btn ${buttonHoverClass}`}>
                        Read more<Icon marginLeft='0.2rem' as={FiChevronsRight} />
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}