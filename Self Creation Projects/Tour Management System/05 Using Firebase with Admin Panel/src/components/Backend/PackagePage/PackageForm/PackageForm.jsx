import { Box, Button, Flex, FormControl, FormLabel, Icon, Input, Textarea, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { FiEdit, FiPlusCircle } from "react-icons/fi";
import { Form, useLocation } from 'react-router-dom';
import '../../addUpdateFile.css';
import PackageHeading from './PackageHeading.jsx';

export default function PackageForm({packages, method}) {
    const formBg = useColorModeValue('white', 'gray.700');
    const location = useLocation();
    const isAddPath = location.pathname === '/admin/package/add';
    const icon = isAddPath ? FiPlusCircle : FiEdit;
    const heading = isAddPath ? 'Add Package' : 'Update Package';

    return (
        <Box id="addUpdate">
            <PackageHeading />
            <Flex className='form' justifyContent='center'>
                <Box
                    mt={2}
                    bg={formBg}
                    shadow='0 0px 5px 0 rgba(0, 0, 0, 0.2), 0 0px 18px 0 rgba(0, 0, 0, 0.19)'
                    width='50rem'
                    rounded="md"
                >
                    <Form method={method}>
                        <Box display="flex" flexDirection="column" gap={4}>
                            <FormControl id="title">
                                <FormLabel>Place Title:</FormLabel>
                                <Input
                                    name="title"
                                    type="text"
                                    defaultValue={packages ? packages.title : ''}
                                />
                            </FormControl>
                            <FormControl id="location">
                                <FormLabel>Tour Location:</FormLabel>
                                <Input
                                    name="location"
                                    type="text"
                                    defaultValue={packages ? packages.location : ''}
                                />
                            </FormControl>
                            <FormControl id="time">
                                <FormLabel>Tour Duration:</FormLabel>
                                <Input
                                    name="duration"
                                    type="text"
                                    defaultValue={packages ? packages.duration : ''}
                                />
                            </FormControl>
                            <FormControl id="details">
                                <FormLabel>Package Details:</FormLabel>
                                <Textarea
                                    name="details"
                                    defaultValue={packages ? packages.details : ''}
                                />
                            </FormControl>
                            <FormControl id="price">
                                <FormLabel>Package Price:</FormLabel>
                                <Input
                                    name="price"
                                    type="text"
                                    defaultValue={packages ? packages.price : ''}
                                />
                            </FormControl>
                            <FormControl id="file">
                                <FormLabel>Tour Image:</FormLabel>
                                <Input
                                    name="image"
                                    type="url"
                                    defaultValue={packages ? packages.image : ''}
                                />
                            </FormControl>
                            <Button type="submit" colorScheme='green' leftIcon={<Icon as={icon} />}>
                                {heading}
                            </Button>
                        </Box>
                    </Form>
                </Box>
            </Flex>
        </Box>
    );
}