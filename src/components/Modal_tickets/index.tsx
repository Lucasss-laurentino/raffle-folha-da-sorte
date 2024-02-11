import React, { SetStateAction } from 'react';
import './index.css';
import Modal from 'react-bootstrap/Modal';

interface Props {
    show: boolean
    setModalShow: React.Dispatch<SetStateAction<boolean>>,
}

export const Modal_tickets = ({show, setModalShow}: Props) => {

    return (

        <>
            <Modal
                show={show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <div className="container d-flex justify-content-between align-items-center">
                        <div className="container text d-flex justify-content-center align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-ticket-perforated mx-2" viewBox="0 0 16 16">
                                <path d="M4 4.85v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9z"/>
                                <path d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3zM1 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1.05a2.5 2.5 0 0 0 0 4.9v1.05a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1.05a2.5 2.5 0 0 0 0-4.9z"/>
                            </svg>
                            Bilhetes
                        </div>
                        <div className="container text d-flex justify-content-end align-items-center">
                            <button className='btn btn-sm' onClick={() => setModalShow(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body>

                    <div className="div_tickets">

                    </div>

                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>

    )

}