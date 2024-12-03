import { Icon } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { FaLock, FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Button from '../components/UI/Button.jsx';
import Modal from "../components/UI/Modal/Modal";
import { useAuth } from '../store/AuthContext.jsx';

export default function useLogin() {
    const formRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const {login} = useAuth();

    function handleOkButton() {
        setIsModalOpen(false);
    };

    function togglePasswordVisibility() {
        setShowPassword(!showPassword);
    };

    function handleSubmit(event) {
        event.preventDefault();

        const fd = new FormData(event.target);
        const customerData = Object.fromEntries(fd.entries());

        const credentials = {
            username: 'nimjeprathamesh1@gmail.com',
            password: '123456',
        };

        if (
            customerData.username === credentials.username &&
            customerData.password === credentials.password
        ) {
            login();
            navigate('homepage');
        } else if (
            customerData.username !== credentials.username ||
            customerData.password !== credentials.password
        ) {
            setIsModalOpen(true);
        } else {
            setIsModalOpen(false);
        }

        if (formRef.current) {
            formRef.current.reset();
        }
    }

    const username = (
        <span>
            <Icon marginLeft='0.2rem' marginRight='0.5rem' as={FaUserCircle} />Username *
        </span>
    );

    const password = (
        <span>
            <Icon marginLeft='0.2rem' marginRight='0.5rem' as={FaLock} />Password *
        </span>
    );

    const dialogBox = (
        <Modal open={isModalOpen}>
            <h1>
                <div className="modal-container">
                    <div className="circle-border"></div>
                    <div className="circle">
                        <div className="error"></div>
                    </div>
                </div>
            </h1>
            <h3>Oops!</h3>
            <p>Incorrect username and passsword!</p>
            <Button className='okButton' onClick={handleOkButton}>
                Ok
            </Button>
        </Modal>
    );

    return {
        formRef, dialogBox, showPassword, username, password, handleSubmit, togglePasswordVisibility
    };
};
