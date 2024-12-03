import { Box, Button, Heading, Icon } from '@chakra-ui/react';
import React from 'react';
import { FiPlusCircle } from "react-icons/fi";
import { Link } from 'react-router-dom';
import './TestimonialPage.css';

export default function TestimonialHeader() {
    return (
        <Box>
            <Heading as='h1' fontSize='1.8rem'>Testimonials Added</Heading>
            <Link to='add'>
                <Button className="button">
                    <Icon marginTop='0.1rem' marginRight='0.2rem' as={FiPlusCircle} />Add Testimonial
                </Button>
            </Link>
        </Box>
    );
}