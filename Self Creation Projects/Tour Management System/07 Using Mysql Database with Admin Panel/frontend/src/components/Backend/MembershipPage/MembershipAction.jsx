import { Button, ButtonGroup, CardFooter, Flex, Icon } from '@chakra-ui/react';
import React from "react";
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";

export default function MembershipAction({membership, onOpen}) {
    const navigate = useNavigate();

    function handleUpdateClick() {
        navigate(`/admin/membership/${membership.id}`, { state: { membership } });
    }

    return (
        <Flex justifyContent='center'>
            <CardFooter>
                <ButtonGroup spacing='8'>
                    <Flex justifyContent='space-between' gap='5rem'>
                        <Button variant='solid' colorScheme='blue' onClick={handleUpdateClick}>
                            <Icon marginRight='0.2rem' as={FiEdit} /><span>Update</span>
                        </Button>
                        <Button variant='solid' colorScheme='red' onClick={onOpen}>
                            <Icon as={FiTrash2} marginRight='0.1rem' />Delete
                        </Button>
                    </Flex>
                </ButtonGroup>
            </CardFooter>
        </Flex>
    );
};