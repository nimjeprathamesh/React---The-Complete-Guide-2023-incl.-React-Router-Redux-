import { Box, CardBody, Flex, Heading, Icon, Img, Stack, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { MdLocationPin } from "react-icons/md";
import { currencyFormatter } from '../../../util/formatting.jsx';
import Modal from '../../UI/Modal.jsx';
import PackageAction from './PackageAction.jsx';
import './PackagePage.css';

export default function PackageDetails({packages, onDelete}) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    function handleConfirmDelete() {
        onDelete(packages.id);
        onClose();
    };

    const deleteDialogBox = (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            children='package'
            onConfirm={handleConfirmDelete}
        />
    );

    return (
        <Box>
            {deleteDialogBox}
            <CardBody p={0}>
                <Box className="show-tours-image-overlay">
                    <Img
                        src={packages.Image}
                        borderTopRadius='lg'
                        height='20rem'
                        width='100%'
                        transition= 'all 0.5s linear' />
                    <Box className="show-tours-overlay"></Box>
                </Box>
                <Stack spacing='3' p={4}>
                    <Heading size='md' className='title'>{packages.Title}</Heading>
                    <Text m={0}><Icon m={0} mr={1} color='#f41844' as={MdLocationPin} />{packages.Location}</Text>
                    <Text className="package_details para" m={0}>{packages.Details}</Text>
                    <Flex justifyContent="space-between">
                        <Text>{packages.Duration}</Text>
                        <Text>{currencyFormatter.format(packages.Price)}</Text>
                    </Flex>
                </Stack>
            </CardBody>
            <PackageAction packages={packages} onOpen={onOpen} />
        </Box>
    );
}