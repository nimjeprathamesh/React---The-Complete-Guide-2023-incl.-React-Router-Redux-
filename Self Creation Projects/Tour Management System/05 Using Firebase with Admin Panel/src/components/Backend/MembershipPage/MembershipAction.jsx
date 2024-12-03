import { Button, ButtonGroup, CardFooter, Flex, Icon } from '@chakra-ui/react';
import React from "react";
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";

export default function MembershipAction({membership, setShowModal}) {
    const navigate = useNavigate();
    
    function handleDeleteClick() {
        setShowModal(true);
    }

    function handleUpdateClick() {
        navigate(`/admin/membership/${membership.key}`, { state: { membership } });
    }

    return (
        <Flex justifyContent='center'>
            <CardFooter>
                <ButtonGroup spacing='8'>
                    <Flex justifyContent='space-between' gap='5rem' onClick={handleUpdateClick}>
                        <Button variant='solid' colorScheme='blue'>
                            <Icon marginRight='0.2rem' as={FiEdit} /><span>Update</span>
                        </Button>
                        <Button variant='solid' colorScheme='red' onClick={handleDeleteClick}>
                            <Icon as={FiTrash2} marginRight='0.1rem' />Delete
                        </Button>
                    </Flex>
                </ButtonGroup>
            </CardFooter>
        </Flex>
    );
};