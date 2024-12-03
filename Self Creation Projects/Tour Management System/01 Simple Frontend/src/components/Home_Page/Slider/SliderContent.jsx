import { Box, Button, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';
import './Slider.css';

export default function SliderContent({ imgSrc, description, title }) {
    const backgroundImageStyle = {
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <Box
            style={backgroundImageStyle}
            height="92vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            color="white"
        >
            <Box>
                <Text mb={5}>{description}</Text>
                <Heading as='h1' fontSize='6rem' mb={5}>{title}</Heading>
                <Link href='/contact-us'>
                    <Button className="theme-btn-s2">Contact Us</Button>
                </Link>
            </Box>
        </Box>
    );
}
