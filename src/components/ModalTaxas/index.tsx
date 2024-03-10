import React from 'react';
import './index.css';
import Modal from 'react-bootstrap/Modal';

interface Props {
    show: boolean,
    onHide: () => void,
}

export const ModalTaxas = ({show, onHide}: Props) => {

    const taxa_e_arrecadacao = [

        {
            id: '1',
            arrecadao: {de: '0.00', a: '100.00'},
            taxa: 'R$ 7,00'
        },
        {
            id: '2',
            arrecadao: {de: '101.00', a: '200.00'},
            taxa: 'R$ 17,00'
        },
        {
            id: '3',
            arrecadao: {de: '201.00', a: '400.00'},
            taxa: 'R$ 27,00'
        },
        {
            id: '4',
            arrecadao: {de: '401.00', a: '700.00'},
            taxa: 'R$ 37,00'
        },
        {
            id: '5',
            arrecadao: {de: '$ 701.00', a: '1.000.00'},
            taxa: 'R$ 47,00'
        },
        {
            id: '6',
            arrecadao: {de: '1.001.00', a: '2.000.00'},
            taxa: 'R$ 67,00'
        },
        {
            id: '7',
            arrecadao: {de: '2.001.00', a: '4.000.00'},
            taxa: 'R$ 77,00'
        },
        {
            id: '8',
            arrecadao: {de: '4.001.00', a: '7.100.00'},
            taxa: 'R$ 127,00'
        },
        {
            id: '9',
            arrecadao:{de: '7.101.00', a: '10.000.00'},
            taxa: 'R$ 197,00'
        },
        {
            id: '10',
            arrecadao: {de: '0.000.00', a: '20.000.00'},
            taxa: 'R$ 247,00'
        },
        {
            id: '11',
            arrecadao: {de: '0.000.00', a: '30.000.00'},
            taxa: 'R$ 497,00'
        },
        {
            id: '12',
            arrecadao: {de: '0.000.00', a: '70.000.00'},
            taxa: 'R$ 1.497,00'
        },
        {
            id: '13',
            arrecadao: {de: '70.000.00', a: '150.000.00'},
            taxa: 'R$ 2.997,00'
        },
        {
            id: '14',
            arrecadao: {de: 'Acima de ', a: '150.000.00'},
            taxa: 'R$ 3.997,00'
        },

    ]
   
    return (

        <>

            <Modal
                show={show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton onHide={onHide}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Valores de taxas
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row p-0">
                        <div className="p-0 d-flex justify-content-between align-items-center">
                            <p className="m-0 col-6 w-text text-center">Arrecadação estimada</p>
                            <p className="m-0 col-6 w-text text-center">Taxa de publicação</p>
                        </div>
                        {taxa_e_arrecadacao.map((data) => {
                            return (
                                <React.Fragment key={data.id}>
                                    <div className="p-0 d-flex justify-content-between align-items-center">
                                        <p className="m-0 col-6 w-text text-center txt-modal">{'R$ '+data.arrecadao.de+' a '+'R$ '+data.arrecadao.a}</p>
                                        <p className="m-0 col-6 w-text text-center txt-modal">{data.taxa}</p>
                                    </div>                                
                                    <hr />
                                </React.Fragment>
                            )
                        })}

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-sm btn-danger' onClick={onHide}>Fechar</button>
                </Modal.Footer>
            </Modal>
        </>

    )

}