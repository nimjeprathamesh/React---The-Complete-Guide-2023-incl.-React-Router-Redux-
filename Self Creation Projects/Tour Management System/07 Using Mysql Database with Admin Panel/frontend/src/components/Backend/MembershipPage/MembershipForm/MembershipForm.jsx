import { Box, Button, Flex, FormControl, FormLabel, Icon, Input, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { FiEdit, FiPlusCircle } from "react-icons/fi";
import { Form, useLocation } from 'react-router-dom';
import '../../addUpdateFile.css';
import MembershipHeading from './MembershipHeading.jsx';

export default function MembershipForm({membership, method}) {
    const formBg = useColorModeValue('white', 'gray.700');
    const location = useLocation();
    const isAddPath = location.pathname === '/admin/membership/add';
    const icon = isAddPath ? FiPlusCircle : FiEdit;
    const heading = isAddPath ? 'Add Membership' : 'Update Membership';

    return (
        <Box id="addUpdate" w='full'>
            <MembershipHeading />
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
                            <FormControl id='type'>
                                <FormLabel>Type of Tour:</FormLabel>
                                <Input
                                    name='type'
                                    type='text'
                                    defaultValue={membership ? membership.Type_of_Tour : ''}
                                    className="form-control addUpdatefield"
                                />
                            </FormControl>
                            <FormControl id='location'>
                                <FormLabel>Location:</FormLabel>
                                <Input
                                    name='location'
                                    type='text'
                                    defaultValue={membership ? membership.Location : ''}
                                    className="form-control addUpdatefield"
                                />
                            </FormControl>
                            <FormControl id='file'>
                                <FormLabel>Package Image:</FormLabel>
                                <Input
                                    name='image'
                                    type='url'
                                    defaultValue={membership ? membership.Image : ''}
                                    className="form-control addUpdatefield"
                                />
                            </FormControl>
                            <FormControl id='price'>
                                <FormLabel>Package Price:</FormLabel>
                                <Input
                                    name='price'
                                    type='number'
                                    defaultValue={membership ? membership.Package_Price : ''}
                                    className="form-control addUpdatefield"
                                />
                            </FormControl>
                            <Button type='submit' colorScheme="green" leftIcon={<Icon as={icon} />}>
                                {heading}
                            </Button>
                        </Box>
                    </Form>
                </Box>
            </Flex>
        </Box>
    );
}