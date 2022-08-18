import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Iitem } from '../../global';

export default function EditModal(props:{shouldShow: boolean}) {
    const [show, setShow] = useState<boolean>(props.shouldShow);

    //const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);
    if(props.shouldShow) setShow(true);
    
    return (


        <Modal show={show} onHide={()=>setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                FOOTER
            </Modal.Footer>
        </Modal>
    );
}