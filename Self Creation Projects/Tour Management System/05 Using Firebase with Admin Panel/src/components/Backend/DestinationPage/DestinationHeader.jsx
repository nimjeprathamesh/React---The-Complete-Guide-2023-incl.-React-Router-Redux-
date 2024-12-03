import { Box, Button, Heading, Icon } from '@chakra-ui/react';
import React from 'react';
import { FiPlusCircle } from "react-icons/fi";
import { Link } from 'react-router-dom';
import './DestinationPage.css';

export default function DestinationHeader() {
    return (
        <Box>
            <Heading as='h1' fontSize='1.8rem'>Destinations Added</Heading>
            <Link to='add' className='addBtn'>
                <Button className="button">
                    <Icon marginTop='0.1rem' marginRight='0.2rem' as={FiPlusCircle} />Add Destination
                </Button>
            </Link>
        </Box>
    );
}