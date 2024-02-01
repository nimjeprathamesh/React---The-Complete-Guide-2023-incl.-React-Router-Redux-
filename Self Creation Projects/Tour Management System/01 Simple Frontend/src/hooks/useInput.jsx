import React, { useEffect, useRef, useState } from 'react';
import Modal from "../components/UI/Modal/Modal.jsx";

export default function useInput({successMsg}) {
    const formRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        return () => {
            setIsModalOpen(false);
        };
    }, [isModalOpen]);

    function handleSubmit(event) {
        event.preventDefault();

        const fd = new FormData(event.target);
        const customerData = Object.fromEntries(fd.entries());
        console.log(customerData);

        setIsModalOpen(true);

        if (formRef.current) {
            formRef.current.reset();
        }
    }

    const dialogBox = (
        <Modal open={isModalOpen}>
            <h1>
                <div className='success-checkmark'>
                    <div className='check-icon'>
                        <span className='icon-line line-tip'></span>
                        <span className='icon-line line-long'></span>
                        <div className='icon-circle'></div>
                        <div className='icon-fix'></div>
                    </div>
                </div>
            </h1>
            <h3>Good Job!</h3>
            <p>{successMsg}</p>
        </Modal>
    );

    return {
        formRef, handleSubmit, dialogBox,
    };
};
