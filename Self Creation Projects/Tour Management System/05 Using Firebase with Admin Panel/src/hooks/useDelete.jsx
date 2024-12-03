import { useColorModeValue, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import Modal from "../components/UI/Modal.jsx";
import { BACKEND_URL } from "../util/constant.jsx";
import useTheme from "./useTheme.jsx";

export default function useDelete({ onDelete }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedContactId, setSelectedContactId] = useState(null);
    const [selectedSubscriptionId, setSelectedSubscriptionId] = useState(null);
    const [deleteType, setDeleteType] = useState(null);
    const { isDark } = useTheme();
    const buttonTheme = isDark ? 'buttonLight' : 'buttonLight';
    const borderColor = isDark ? 'lightBorder' : 'darkBorder';
    const formBg = useColorModeValue('white', 'gray.700');

    async function handleConfirmDelete() {
        let endpoint = '';
        let deleteId = '';

        if (deleteType === 'contact') {
            endpoint = 'contactInfo/';
            deleteId = selectedContactId;
        } else if (deleteType === 'subscription') {
            endpoint = 'subscription/';
            deleteId = selectedSubscriptionId;
        }

        try {
            const response = await fetch(`${BACKEND_URL}${endpoint}${deleteId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                onDelete(deleteId);
                onClose();
            } else {
                console.error('Failed to delete');
            }
        } catch (error) {
            console.error('Error deleting:', error);
        }
    }

    const modalChildren = deleteType === 'contact' ? 'feedback' : 'subscription';

    const deleteDialogBox = (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            children={modalChildren}
            onConfirm={handleConfirmDelete}
        />
    );

    return {
        formBg,
        borderColor,
        buttonTheme,
        deleteDialogBox,
        onOpen,
        setDeleteType,
        setSelectedContactId,
        setSelectedSubscriptionId,
    };
}