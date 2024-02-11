import { SetStateAction, useContext, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button_green } from '../Button_green';
import InputMask from "react-input-mask";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { RaffleContext } from '../../Contexts/RaffleContext';

type Props = {
    show: boolean,
    setShow: React.Dispatch<SetStateAction<boolean>>,
    raff_id: string | undefined,

}

const schema = yup
    .object({
        quantity: yup.string().required('Campo obrigatório'),
        price: yup.string().required('Campo obrigatório'),
    })
    .required()

export const Modal_create_promo = ({ show, setShow, raff_id }: Props) => {

    const { promotions, createPromo, setRaffId } = useContext(RaffleContext);

    useEffect(() => {
        setShow(false)

        if(raff_id){
            setRaffId(raff_id)
        }

        reset()

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });


    }, [promotions])

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className='d-flex justify-content-between align-items-center'>
                <Modal.Title className="pt-1" id="contained-modal-title-vcenter">
                    <h4>Criar Promoção</h4>
                </Modal.Title>
                <button className="btn btn-sm" onClick={() => setShow(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                </button>

            </Modal.Header>


            <Modal.Body>
                <div className="d-flex justify-content-center align-items-center">
                    <form action="" onSubmit={(data) => handleSubmit(createPromo)(data)}>
                        <label>Quantidade de Bilhetes</label>
                        <input 
                            type="text" 
                            className="input_login mb-1"
                            {...register('quantity')}
                        />

                        {errors.quantity && <p className='text-error'>{errors.quantity.message}</p>}

                        <label>Preço da promoção</label>
                        <InputMask 
                            mask={"R$ " + "99,99"} 
                            type="text" 
                            className="input_login mb-1"
                            {...register('price')}    
                        />
                        {errors.price && <p className='text-error'>{errors.price.message}</p>}

                        <Button_green text={'Criar promoção'} btn_function={() => {}}/>
                    </form>
                </div>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
    );
}
