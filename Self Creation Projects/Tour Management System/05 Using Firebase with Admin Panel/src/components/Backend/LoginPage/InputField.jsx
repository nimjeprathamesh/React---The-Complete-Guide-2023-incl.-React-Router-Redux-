import { Box, Button, Flex, FormLabel, Heading, Icon, IconButton, Image, Input, useColorModeValue } from '@chakra-ui/react';
import { faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { FaLock, FaUserCircle } from 'react-icons/fa';
import { MdCreate } from "react-icons/md";
import { useLocation, useNavigate } from 'react-router-dom';
import useTheme from "../../../hooks/useTheme.jsx";

export default function InputField() {
    const [showPassword, setShowPassword] = useState(false);
    const { isDark } = useTheme();
    const textColor = useColorModeValue('gray.800', 'white');
    const borderColor = { borderColor: isDark ? '#1a202c' : '#f9f9f9' };
    const iconColor = useColorModeValue('#1a202c', '#f9f9f9');
    const formBg = useColorModeValue('white', 'gray.700');
    const lockImage = require("../../../images/lock.png");
    const location = useLocation();
    const navigate = useNavigate();
    const isSignIn = location.pathname === '/admin/signIn';

    function handleToggleForm() {
        if (isSignIn) {
            navigate('/admin/signUp');
        } else {
            navigate('/admin/signIn');
        }
    }

    function togglePasswordVisibility() {
        setShowPassword(!showPassword);
    };

    return (
        <Box className='loginForm'>
            <Box p={10} borderRadius="md" bg={formBg} width='32rem'>
                <Box textAlign="center" mb={4}>
                    <Image
                        src={lockImage}
                        alt="lock"
                        borderColor={formBg}
                        borderWidth='6px'
                        borderStyle='solid'
                        boxSize="60px"
                        className="lock_img"
                    />
                </Box>
                <Heading as="h1" size="lg" textAlign="center" mb={6} color={textColor}>
                    {isSignIn ? 'Admin SignIn' : 'Admin SignUp'}
                </Heading>
                <Box mb={4}>
                    <FormLabel>
                        <Icon marginLeft='0.2rem' marginRight='0.5rem' as={FaUserCircle} />Username *
                    </FormLabel>
                    <Input
                        id="username"
                        name="username"
                        placeholder="Enter your username"
                        borderColor={borderColor}
                        mb={2}
                    />
                </Box>
                <Box mb={4}>
                    <FormLabel>
                        <Icon marginLeft='0.2rem' marginRight='0.5rem' as={FaLock} />Password *
                    </FormLabel>
                    <Input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        borderColor={borderColor}
                        mb={2}
                    />
                    <IconButton
                        icon={<FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />}
                        onClick={togglePasswordVisibility}
                        variant="ghost"
                        color={iconColor}
                        size="sm"
                        className='togglePassword'
                    />
                </Box>
                <Flex justifyContent='space-between' textAlign="center">
                    <Button
                        variant='ghost'
                        leftIcon={<Icon as={MdCreate} />}
                        colorScheme={isDark ? 'blue' : 'teal'}
                        onClick={handleToggleForm}
                    >
                        {isSignIn ? 'Create new user' : 'SignIn'}
                    </Button>
                    <Button
                        type="submit"
                        leftIcon={<FontAwesomeIcon icon={faLock} />}
                        colorScheme={isDark ? 'blue' : 'teal'}
                    >
                        {isSignIn ? 'SignIn' : 'Create'}
                    </Button>
                </Flex>
            </Box>
        </Box>
    );
}