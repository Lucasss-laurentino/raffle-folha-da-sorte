import React, { SetStateAction, useContext, useEffect } from 'react';
import './index.css';
import Modal from 'react-bootstrap/Modal';
import { Button_green } from '../Button_green';
import * as yup from 'yup';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import InputMask from "react-input-mask";
import { RaffleContext } from '../../Contexts/RaffleContext';
import { PixContext } from '../../Contexts/PixContext';


type Props = {
    modal_cpf: boolean,
    setModal_cpf: React.Dispatch<SetStateAction<boolean>>,
    tot: string,
    id: string | undefined,
}

const schema = yup.object({
    cpf: yup.string().required("Campo obrigatório").min(14).max(14)
}).required()

export const Modal_cpf = ({modal_cpf, setModal_cpf, tot, id}: Props) => {

    const { generate_pix } = useContext(RaffleContext);
    const { qrCode } = useContext(PixContext);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const callQrCode = (data: any) => {
        generate_pix(tot, id, data);
    }

    useEffect(() => {

        setModal_cpf(false);

    }, [qrCode])

    return (

        <>
            <Modal
                show={modal_cpf}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className='d-flex justify-content-end align-items-center'>
                    <svg onClick={() => setModal_cpf(false)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </Modal.Header>
                <Modal.Body>

                    <form onSubmit={(data) => handleSubmit(callQrCode)(data)}>

                        <InputMask
                            mask={"999.999.999-99"}
                            type="text" 
                            className='input_login mb-2' 
                            placeholder='Digite seu cpf' 
                            {...register("cpf")}
                        />
                        {errors.cpf && <p className='text-error'>{errors.cpf.message}</p>}
                        <button className='btn btn-sm btn-success my-2' type='submit'>Gerar qrCode</button>                        

                    </form>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>

    );

}