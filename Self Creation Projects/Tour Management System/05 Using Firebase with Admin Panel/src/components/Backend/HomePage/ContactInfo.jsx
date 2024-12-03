import { Box, Button, Icon, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FiTrash2 } from "react-icons/fi";
import useDelete from '../../../hooks/useDelete.jsx';

export default function ContactInfo({feedback, onDelete}) {
    const [contactInfo, setContactInfo] = useState(feedback);
    const {
        formBg,
        borderColor,
        buttonTheme,
        deleteDialogBox,
        onOpen,
        setDeleteType,
        setSelectedContactId
    } = useDelete({onDelete: handleDeleteConfirm});

    useEffect(() => {
        setContactInfo(feedback);
    }, [feedback]);

    function handleDelete(contactId) {
        onOpen();
        setSelectedContactId(contactId);
        setDeleteType('contact')
    }

    function handleDeleteConfirm(deletedId) {
        setContactInfo(contactInfo.filter(info => info.id !== deletedId));
        onDelete(feedback.key);
    }

    return (
        <>
            {deleteDialogBox}
            <Box>
                <TableContainer bg={formBg} className={`contSubTable ${borderColor}`}>
                    <Table className="cITable">
                        <Thead>
                            <Tr>
                                <Th>Sr.No.</Th>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th>Subject</Th>
                                <Th>Message</Th>
                                <Th>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {feedback.map((contact, index) => (
                                <Tr key={index}>
                                    <Td className='center'>{index + 1}</Td>
                                    <Td>{contact.name}</Td>
                                    <Td>{contact.email}</Td>
                                    <Td>{contact.subject}</Td>
                                    <Td>{contact.message}</Td>
                                    <Td className='actionSec'>
                                        <Button
                                            className={`btn-btn-success ${buttonTheme}`}
                                            onClick={() => handleDelete(contact.id)}
                                        >
                                            <Icon position='relative' bottom='0.1rem' as={FiTrash2} /> Delete
                                        </Button>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
}