import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from '../Button';
import './Modal.css';

export default function Modal({children, open}) {
    const dialog = useRef();
    const modal = dialog.current;

    useEffect(() => {
        if(open) {
            modal.showModal();
        }

        return ;
    }, [open, modal]);

    function handleOkButtonClick() {
        modal.close();
    };


    return createPortal(
        <dialog ref={dialog} id='dialog'>
            {children}
            <div className='actionButton'>
                <Button className="okButton" children="OK" onClick={handleOkButtonClick} />
            </div>
        </dialog>,
        document.getElementById('modal-root'),
    );
};