import { Heading } from '@chakra-ui/react';
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../addUpdateFile.css';

export default function DestinationHeading() {
    const location = useLocation();
    const isAddPath = location.pathname === '/admin/destination/add';
    const heading = isAddPath ? 'Add Destination' : 'Update Destination';

    return (
        <div className="container">
            <div className="row">
                <Heading as='h1' fontSize='1.8rem'>{heading}</Heading>
            </div>
        </div>
    );
}