import { useDisclosure } from '@chakra-ui/react';
import React, { useRef } from 'react';
import Modal from "../components/UI/Modal/Modal.jsx";
import { BACKEND_URL } from '../util/constant.jsx';

export default function useInput({successMsg}) {
    const formRef = useRef(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    async function handleSubmit(event, request) {
        event.preventDefault();

        const formData = await request.formData();
        const postData = Object.fromEntries(formData);
        console.log(postData);
        let endpoint = BACKEND_URL + 'contactInfo';

        if ('mail' in postData && Object.keys(postData).length === 1) {
            endpoint = BACKEND_URL + 'subscription';
        }

        const response = await fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if(response.ok) {
            onOpen();
        }

        if (formRef.current) {
            formRef.current.reset();
        }
    }

    const dialogBox = (
        <Modal
            isOpen={isOpen}
            message={successMsg}
            onConfirm={onClose}
        />
    );

    return {
        formRef, handleSubmit, dialogBox,
    };
};
