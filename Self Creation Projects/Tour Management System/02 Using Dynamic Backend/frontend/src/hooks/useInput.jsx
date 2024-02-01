import React, { useEffect, useRef, useState } from 'react';
import Modal from "../components/UI/Modal/Modal";

export default function useInput({successMsg}) {
    const formRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        return () => {
            setIsModalOpen(false);
        };
    }, [isModalOpen]);

    const dialogBox = (
        <Modal open={isModalOpen}>
            <h1>
                <div className="success-checkmark">
                    <div className="check-icon">
                        <span className="icon-line line-tip"></span>
                        <span className="icon-line line-long"></span>
                        <div className="icon-circle"></div>
                        <div className="icon-fix"></div>
                    </div>
                </div>
            </h1>
            <h3>Good Job!</h3>
            <p>{successMsg}</p>
        </Modal>
    );

    return {
        formRef, setIsModalOpen, dialogBox,
    };
};
