import { Box, Button, Icon, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FiTrash2 } from "react-icons/fi";
import { useTheme } from '../../../hooks/useTheme.jsx';
import Modal from '../../UI/Modal.jsx';

export default function Subscription({subscribe, onDelete}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [subscriptions, setSubscriptions] = useState(subscribe);
    const [subscriptionToDelete, setSubscriptionToDelete] = useState(null);
    const {isDark} = useTheme();
    const buttonTheme = isDark ? 'buttonLight' : 'buttonLight';
    const borderColor = isDark ? 'lightBorder' : 'darkBorder';
    const formBg = useColorModeValue('white', 'gray.700');

    useEffect(() => {
        setSubscriptions(subscribe);
    }, [subscribe]);

    function handleDelete(subscriptionId) {
        onOpen();
        setSubscriptionToDelete(subscriptionId);
        setSubscriptions(subscriptions.filter(subscription => subscription.id !== subscriptionId));
    }

    async function confirmDelete() {
        await onDelete(subscriptionToDelete);
        onClose();
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                onConfirm={confirmDelete}
                children="feedback"
            />
            <Box>
                <TableContainer bg={formBg} className={`contSubTable ${borderColor}`}>
                    <Table className="cITable">
                        <Thead>
                            <Tr>
                                <Th key="srNo">Sr.No.</Th>
                                <Th key="email">Email</Th>
                                <Th key='action'>Action</Th>
                            </Tr>
                        </Thead>
                        {subscribe.map((subscription, index) => (
                            <Tbody key={subscription.id}>
                                <Tr>
                                    <Td className='center'>{index + 1}</Td>
                                    <Td>{subscription.Mail}</Td>
                                    <Td className='actionSec'>
                                        <Button
                                            className={`btn-btn-success ${buttonTheme}`}
                                            onClick={() => handleDelete(subscription.id)}
                                        >
                                            <Icon position='relative' bottom='0.1rem' as={FiTrash2} /> Delete
                                        </Button>
                                    </Td>
                                </Tr>
                            </Tbody>
                        ))}
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
}