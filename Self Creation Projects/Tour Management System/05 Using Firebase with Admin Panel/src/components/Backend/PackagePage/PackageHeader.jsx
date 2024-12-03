import { Button, Heading, Icon } from '@chakra-ui/react';
import React from 'react';
import { FiPlusCircle } from "react-icons/fi";
import { Link } from 'react-router-dom';
import './PackagePage.css';

export default function PackageHeader() {
    return (
        <div className="row">
            <Heading as='h1' fontSize='1.8rem'>Tours Added</Heading>
            <Link to='add'>
                <Button className="addPackageBtn">
                    <Icon marginTop='0.1rem' marginRight='0.2rem' as={FiPlusCircle} />Add Tour
                </Button>
            </Link>
        </div>
    );
}