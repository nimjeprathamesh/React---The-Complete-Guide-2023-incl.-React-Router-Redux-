import { Box, Card, CardBody, Flex, Heading, Icon, Img, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { MdLocationPin } from "react-icons/md";
import { Link } from 'react-router-dom';
import { usePackageContext } from '../../../../store/PackagesContext.jsx';
import { currencyFormatter } from '../../../../util/formatting.jsx';
import './Packages.css';

export default function PackagesContent({packages}) {
    const { setExcludedName } = usePackageContext();

    const handleReadMoreClick = () => {
        setExcludedName(packages.Title);
    };

    return (
        <Link to={`../package/${packages.id}`} onClick={handleReadMoreClick}>
            <Card maxW='sm' className='service-2-box' id="adventour">
                <CardBody p={0}>
                    <Box className="service-2-image-overlay">
                        <Img
                            src={packages.Image}
                            alt='Green double couch with wooden legs'
                        />
                        <Box className="service-2-overlay"></Box>
                    </Box>
                    <Stack spacing='3' p={6}>
                        <Heading size='md' fontWeight='900' className='title'>{packages.Title}</Heading>
                        <Text m={0}>
                            <Icon
                                position='relative'
                                bottom='0.1rem'
                                marginRight='0.5rem'
                                as={MdLocationPin}
                                color='#f41844'
                            />
                            {packages.Location}
                        </Text>
                        <Text className="para">{packages.Details}</Text>
                        <Flex justifyContent='space-between'>
                            <Text>{packages.Duration}</Text>
                            <Text>{currencyFormatter.format(packages.Price)}</Text>
                        </Flex>
                    </Stack>
                </CardBody>
            </Card>
        </Link>
    );
}