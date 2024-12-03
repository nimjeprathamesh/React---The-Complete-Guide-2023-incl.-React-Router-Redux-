import { Box, Button, CardBody, Flex, Heading, Icon, Img, Stack, Text } from '@chakra-ui/react';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { MdLocationPin } from "react-icons/md";
import { currencyFormatter } from '../../../util/formatting.jsx';
import Modal from "../../UI/Modal.jsx";
import MembershipAction from "./MembershipAction.jsx";
import './MembershipPage.css';

export default function MembershipDescription({membership, onDelete, onUpdate}) {
    const [showModal, setShowModal] = useState(false);

    function handleConfirmDelete() {
        onDelete(membership.key);
        setShowModal(false);
    };

    function handleCancelDelete() {
        setShowModal(false);
    };

    const deleteDialogBox = (
        <Modal open={showModal}>
            <div>
                <h1>
                    <div className='icon-alert-circle'>
                        <FontAwesomeIcon icon={faExclamation} />
                    </div>
                </h1>
                <h3>Are you sure you?</h3>
                <p>You won't be able to revert this!</p>
                <Button className='okButton deleteButton' onClick={handleConfirmDelete}>
                    Yes, delete it
                </Button>
                <Button className='okButton cancelButton' onClick={handleCancelDelete}>
                    Cancel
                </Button>
            </div>
        </Modal>
    );
    
    return (
        <Box>
            {deleteDialogBox}
            <CardBody p={0}>
                <Box className="member-image-overlay">
                    <Img
                        src={membership.image}
                        height='20rem'
                        width='100%'
                        transition='all 0.5s linear'
                        borderTopRadius='6px'
                    />
                    <Box className="member-overlay"></Box>
                </Box>
                <Stack spacing='3' p={4}>
                    <Heading size='md' className='heading'>{membership.type}</Heading>
                    <Flex justifyContent='space-between'>
                        <Text><Icon mb={1} mr={1} color='#f41844' as={MdLocationPin} />{membership.location}</Text>
                        <Text>from-{currencyFormatter.format(membership.price)}</Text>
                    </Flex>
                </Stack>
            </CardBody>
            <MembershipAction membership={membership} setShowModal={setShowModal} onUpdate={onUpdate} />
        </Box>
    );
}