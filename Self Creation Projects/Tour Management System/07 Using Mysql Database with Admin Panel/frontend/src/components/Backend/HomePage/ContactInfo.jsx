import { Box, Button, Icon, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FiTrash2 } from "react-icons/fi";
import { useTheme } from '../../../hooks/useTheme';
import Modal from '../../UI/Modal';

export default function ContactInfo({feedback, onDelete}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [contactInfo, setContactInfo] = useState(feedback);
    const [contactToDelete, setContactToDelete] = useState(null);
    const {isDark} = useTheme();
    const buttonTheme = isDark ? 'buttonLight' : 'buttonLight';
    const borderColor = isDark ? 'lightBorder' : 'darkBorder';
    const formBg = useColorModeValue('white', 'gray.700');

    useEffect(() => {
        setContactInfo(feedback);
    }, [feedback]);

    function handleDelete(contactId) {
        onOpen();
        setContactToDelete(contactId);
        setContactInfo(contactInfo.filter(info => info.id !== contactId));
    }

    function confirmDelete() {
        onDelete(contactToDelete);
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
                                    <Td>{contact.Name}</Td>
                                    <Td>{contact.Email}</Td>
                                    <Td>{contact.Subject}</Td>
                                    <Td>{contact.Message}</Td>
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