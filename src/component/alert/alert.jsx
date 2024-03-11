import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'; // Import Bootstrap components
import { useValue } from '../../Ecom-context';

export const Alert = () => {

    const { showModal, modalBody, handleShowModal, handleCloseModal, confirmType, handleConfirm,  } = useValue()
    console.log(confirmType)

    return (
        <>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Body>
                    {modalBody}
                </Modal.Body>
                <Modal.Footer>
                    {
                        confirmType ? (
                            <>
                                <Button variant="primary" onClick={handleCloseModal}>
                                    Close
                                </Button >
                                <Button variant="danger" onClick={handleConfirm}>
                                    Confirm
                                </Button >
                            </>

                        ) :
                            (
                                <Button variant="danger" onClick={handleCloseModal}>
                                    OK
                                </Button >
                            )
                    }
                </Modal.Footer>
            </Modal >
        </>
    );
}


