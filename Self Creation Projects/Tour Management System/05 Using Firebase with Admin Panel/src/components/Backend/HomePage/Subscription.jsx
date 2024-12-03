import { Box, Button, Icon, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FiTrash2 } from "react-icons/fi";
import useDelete from '../../../hooks/useDelete.jsx';

export default function Subscription({subscribe, onDelete}) {
    const [subscriptions, setSubscriptions] = useState(subscribe);
    const {
        formBg,
        borderColor,
        buttonTheme,
        deleteDialogBox,
        onOpen,
        setDeleteType,
        setSelectedSubscriptionId
    } = useDelete({onDelete: handleDeleteConfirm });

    useEffect(() => {
        setSubscriptions(subscribe);
    }, [subscribe]);

    function handleDelete(subscriptionId) {
        onOpen();
        setSelectedSubscriptionId(subscriptionId);
        setDeleteType('subscription');
    }

    function handleDeleteConfirm(deletedId) {
        setSubscriptions(subscriptions.filter(subscription => subscription.id !== deletedId));
    }

    return (
        <>
            {deleteDialogBox}
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
                                    <Td>{subscription.mail}</Td>
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