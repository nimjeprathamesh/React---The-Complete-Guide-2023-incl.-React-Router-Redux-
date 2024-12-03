import { Box, CardBody, Flex, Heading, Icon, Img, Stack, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { MdLocationPin } from "react-icons/md";
import { currencyFormatter } from '../../../util/formatting.jsx';
import Modal from "../../UI/Modal.jsx";
import MembershipAction from "./MembershipAction.jsx";
import './MembershipPage.css';

export default function MembershipDescription({membership, onDelete}) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    function handleConfirmDelete() {
        onDelete(membership.id);
        onClose();
    };

    const deleteDialogBox = (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            children='membership'
            onConfirm={handleConfirmDelete}
        />
    );
    
    return (
        <Box>
            {deleteDialogBox}
            <CardBody p={0}>
                <Box className="member-image-overlay">
                    <Img
                        src={membership.Image}
                        height='20rem'
                        width='100%'
                        transition='all 0.5s linear'
                        borderTopRadius='6px'
                    />
                    <Box className="member-overlay"></Box>
                </Box>
                <Stack spacing='3' p={4} pb={0}>
                    <Heading size='md' className='heading'>{membership.Type_of_Tour}</Heading>
                    <Flex justifyContent='space-between'>
                        <Text><Icon mb={1} mr={1} color='#f41844' as={MdLocationPin} />{membership.Location}</Text>
                        <Text>from-{currencyFormatter.format(membership.Package_Price)}</Text>
                    </Flex>
                </Stack>
            </CardBody>
            <MembershipAction membership={membership} onOpen={onOpen} />
        </Box>
    );
}