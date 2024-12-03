import { Box, Card, CardBody, Flex, Heading, Icon, Img, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { MdLocationPin } from "react-icons/md";
import { Link } from 'react-router-dom';
import { BACKEND_URL } from '../../../util/constant.jsx';
import { currencyFormatter } from '../../../util/formatting.jsx';
import './Packages.css';

export default function PackagesContent({packages}) {
    return (
        <Link to={`../package/${packages.id}`}>
            <Card maxW='sm' className='service-2-box' id="adventour">
                <CardBody p={0}>
                    <Box className="service-2-image-overlay">
                        <Img src={BACKEND_URL + packages.image} alt='destination' />
                        <Box className="service-2-overlay"></Box>
                    </Box>
                    <Stack spacing='3' p={6}>
                        <Heading size='md' fontWeight='900' className='title'>{packages.title}</Heading>
                        <Text m={0}>
                            <Icon
                                position='relative'
                                bottom='0.1rem'
                                marginRight='0.5rem'
                                as={MdLocationPin}
                                color='#f41844'
                            />
                            {packages.location}
                        </Text>
                        <Text className="para">{packages.details}</Text>
                        <Flex justifyContent='space-between'>
                            <Text>{packages.duration}</Text>
                            <Text>{currencyFormatter.format(packages.price)}</Text>
                        </Flex>
                    </Stack>
                </CardBody>
            </Card>
        </Link>
    );
}