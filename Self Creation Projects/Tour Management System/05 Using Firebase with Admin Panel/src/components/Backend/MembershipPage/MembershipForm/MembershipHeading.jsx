import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../addUpdateFile.css';

export default function MembershipHeading() {
    const location = useLocation();
    const isAddPath = location.pathname === '/admin/membership/add';
    const heading = isAddPath ? 'Add Testimonial' : 'Update Testimonial';

    return (
        <Box>
            <Flex justifyContent='center'>
                <Heading as='h1' fontSize='1.8rem'>{heading}</Heading>
            </Flex>
        </Box>
    );
}