import { useContext, useEffect, useState } from 'react';
import './index.css';
import { RaffleContext } from '../../Contexts/RaffleContext';
import { useParams } from 'react-router-dom';
import { Modal_create_promo } from "../Modal_create_promo"
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Data_raffle = () => {

    const { getRaffle, raffle, promotions, getPromotions, delete_promo } = useContext(RaffleContext)

    const { id } = useParams();

    const [show, setShow] = useState(false);

    const copy = () => {

        toast.success('Texto copiado', {
            position: "top-right",
            autoClose: 999,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        })

    }

    useEffect(() => {
        getRaffle(id);
        getPromotions(id)
    }, []);

    return (

        <>

            <ToastContainer limit={1}/>

            <Modal_create_promo show={show} setShow={setShow} raff_id={id} />

            <div className="container">
                <h3 className='text-center my-4'>{raffle?.title}</h3>
            </div>

            <div className="container my-5">
                <div className="click div-link">
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => copy()} width="16" height="16" fill="#738E38" className="bi bi-copy icon-copy" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                    </svg>
                    <p className='m-0 px-2 text-link'>{`http://localhost:3000/detalhes/${raffle?._id}`}</p>
                </div>
                <div className="container d-flex justify-content-center align-items-center">
                    <p className="m-0 text-secondary text-link text-center">Copie e envie o link da sua rifa</p>
                </div>
            </div>

            <div className="row w-100 justify-content-end">
                <div className="col-5 p-0 m-2 card-detalhes-rifa">
                    <div className="container mt-3">
                        <p className="text-detalhes-bilhete m-0">Bilhetes vendidos</p>
                    </div>
                    <div className="container">
                        <h3 className='text-center'>{raffle?.bilhetes_vendidos}</h3>
                    </div>
                </div>
                <div className="col-5 p-0 m-2 card-detalhes-rifa">
                    <div className="container mt-3">
                        <p className="text-detalhes-bilhete m-0">Bilhetes sobrando</p>
                    </div>
                    <div className="container">
                        <h3 className='text-center'>{raffle?.bilhetes_sobrando}</h3>
                    </div>
                </div>
            </div>

            <div className="row w-100 justify-content-end">
                <div className="col-5 p-0 m-2 card-detalhes-rifa">
                    <div className="container mt-3">
                        <p className="text-detalhes-bilhete m-0">Valor arrecadado</p>
                    </div>
                    <div className="container">
                        <h3 className='text-center'>R$ {raffle?.valor_arrecadado}</h3>
                    </div>
                </div>
                <div className="col-5 p-0 m-2 card-detalhes-rifa">
                    <div className="container mt-3">
                        <p className="text-detalhes-bilhete m-0">Compradores</p>
                    </div>
                    <div className="container">
                        <h3 className='text-center'>0</h3>
                    </div>
                </div>
            </div>

            <hr />

            <div className="container">
                <h3 className='text-center my-4'>Promoções</h3>
            </div>

            {promotions.map((promotion) => {
                return (
                    <div key={promotion._id} className="row w-100 justify-content-end">
                        <div className="row justify-content-center align-items-center text-center">
                            <div className="col-10 col-sm-5 card-data-raffle">
                                <div className="d-flex justify-content-end p-2 align-items-center text-danger" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16" onClick={() => delete_promo(promotion._id)}>
                                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                                    </svg>
                                </div>

                                <p className="text_promo_cotas p-1">Bilhetes <strong className='color_strong'>{promotion.ticket_quantity}</strong></p>
                                <p className="text_promo_cotas p-1 mb-3">Preço <strong className='color_strong'>{promotion.price_together}</strong></p>
                            </div>
                        </div>
                    </div>
                )
            })}
            {promotions.length < 4 &&
                <div className="row w-100 justify-content-end" onClick={() => setShow(true)}>
                    <div className="row justify-content-center align-items-center text-center">
                        <div className="col-10 col-sm-5 box_promo_cotas">
                            <p className="text_promo_cotas">
                                Criar Promoção
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="m-1 bi bi-plus-lg" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                </svg>
                            </p>
                        </div>
                    </div>
                </div>
            }
        </>

    )

}