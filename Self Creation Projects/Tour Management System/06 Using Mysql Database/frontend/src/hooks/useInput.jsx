import { useDisclosure } from '@chakra-ui/react';
import React, { useRef } from 'react';
import Modal from "../components/UI/Modal/Modal.jsx";

export default function useInput({successMsg}) {
    const formRef = useRef(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    function handleSubmit(event) {
        event.preventDefault();

        onOpen();

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
