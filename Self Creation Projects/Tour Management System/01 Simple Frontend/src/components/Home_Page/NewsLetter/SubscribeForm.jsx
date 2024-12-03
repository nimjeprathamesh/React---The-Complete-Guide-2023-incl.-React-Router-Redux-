import { Box, Button, Flex, FormControl, Icon, Input } from "@chakra-ui/react";
import React from "react";
import { FiBell } from "react-icons/fi";
import { Form } from "react-router-dom";
import useInput from "../../../hooks/useInput.jsx";
import { useTheme } from '../../../hooks/useTheme.jsx';
import './SubscribeForm.css';

export default function SubscribeForm() {
    const successMsg = "You subscribed our website.";
    const {formRef, handleSubmit, dialogBox} = useInput({successMsg});
    const {isDark} = useTheme();
    const buttonHoverClass = isDark ? 'subscribeButtonDark' : 'subscribeButtonLight';

    return (
        <Box>
            {dialogBox}
            <Box className="subscribe">
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Flex wrap="wrap" align="center" padding='0 17rem'>
                        <FormControl flex="1" mr={4}>
                            <Input name='mail' type="email" placeholder="Enter your email" />
                        </FormControl>
                        <FormControl flex="0">
                            <Button type='submit' className={`subscribeButton ${buttonHoverClass}`}>
                                <Icon marginRight='0.5rem' as={FiBell} />SUBSCRIBE
                            </Button>
                        </FormControl>
                    </Flex>
                </Form>
            </Box>
        </Box>
    );
}