import { Box, Button, Heading, Icon } from '@chakra-ui/react';
import React from 'react';
import { FiPlusCircle } from "react-icons/fi";
import { Link } from 'react-router-dom';
import './MembershipPage.css';

export default function MembershipHeader() {
    return (
        <Box>
            <Heading as='h1' fontSize='1.8rem'>Memberships Added</Heading>
            <Link to='add' className='addBtn'>
                <Button className="button">
                    <Icon marginTop='0.1rem' marginRight='0.2rem' as={FiPlusCircle} />Add Membership
                </Button>
            </Link>
        </Box>
    );
}