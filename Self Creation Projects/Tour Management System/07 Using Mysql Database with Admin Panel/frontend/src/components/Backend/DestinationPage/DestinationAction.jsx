import { Button, ButtonGroup, CardFooter, Icon } from '@chakra-ui/react';
import React from "react";
import { FiChevronsRight, FiEdit, FiTrash2 } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import { useDestinationContext } from "../../../store/DestinationContext.jsx";

export default function DestinationAction({ destination, onOpen }) {
    const { setExcludedName } = useDestinationContext();
    const navigate = useNavigate();

    function handleReadMoreClick() {
        navigate(`/destination/${destination.id}`);
        setExcludedName(destination.Name);
    }

    function handleUpdateClick() {
        navigate(`/admin/destination/${destination.id}`, { state: { destination } });
    }

    return (
        <CardFooter>
        <ButtonGroup spacing='8'>
            <Button variant='solid' colorScheme='green' onClick={handleReadMoreClick}>
                Read More<Icon marginLeft='0.2rem' mt={1} as={FiChevronsRight} />
            </Button>
            <Button variant='solid' colorScheme='blue' onClick={handleUpdateClick}>
                <Icon marginRight='0.2rem' as={FiEdit} />Update
            </Button>
            <Button variant='solid' colorScheme='red' onClick={onOpen}>
                <Icon as={FiTrash2} marginRight='0.1rem' />Delete
            </Button>
        </ButtonGroup>
    </CardFooter>
    );
}
