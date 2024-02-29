import './index.css';
import { Button_green } from '../Button_green';
import { useContext, useEffect, useState } from 'react';
import { RaffleContext } from '../../Contexts/RaffleContext';
import { useParams } from 'react-router-dom';
import React from 'react';
import QRCode from "react-qr-code";
import { PixContext } from '../../Contexts/PixContext';
import { Modal_cpf } from '../Modal_cpf';

export const Page_raffle = () => {

    const { id } = useParams();
    const { getRaffle, promotions, raffle, generate_pix, getPromotions } = useContext(RaffleContext);
    const { qrCode, valor, copiaECola } = useContext(PixContext);
    const [quantityCotas, setQuantityCotas] = useState(0);
    const [promo_active, setPromo_active] = useState(false);
    const [promo_active_id, setPromo_active_id] = useState('');    
    const [old_price, setOld_price] = useState<any>();
    const [old_quantity, setOld_quantity] = useState<number>(0);
    const [tot, setTot] = useState('');
    const [modal_cpf, setModal_cpf] = useState(false);

    const [openPopUpPix, setOpenPopUpPix] = useState(false);

    const price = raffle?.price_unitary && raffle.price_unitary
    const explode = price != undefined && price.split(" ");
    const decimal = explode && explode[1];
    const price_number = decimal && decimal.replace(",", ".");

    useEffect(() => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        getRaffle(id);

        getPromotions(id);


    }, []);

    useEffect(() => {

        if(qrCode.length > 0) {

            setOpenPopUpPix(true)

        } else {

            setOpenPopUpPix(false)

        }

    }, [qrCode]);

    const calc_cotas_promo = (quantity_cotas_selected: string | undefined, price_to_gether: string | undefined, promotion_id: string) => {

        const explode = price_to_gether?.split(" ");
        const decimal = explode?.length && explode[1];
        const price_together = decimal && decimal.replace(",", ".");

        setOld_quantity(Number(quantity_cotas_selected));

        setOld_price(price_together);

        if (Number(price_together) == old_price) { // pra entrar nessa função o usuario precisa clicar pela segunda vez na mesma promoção

            // retirando do total e da quantidade de cotas da promoção cancelada
            setPromo_active(false);
            setPromo_active_id('');
            setTot((Number(tot) - old_price).toFixed(2));
            setQuantityCotas(quantityCotas - Number(quantity_cotas_selected));

            setOld_price(null);
            setOld_quantity(0);


        } else {

            if (promo_active) {

                setTot((Number(tot) - old_price + Number(price_together)).toFixed(2));
                setPromo_active(true);
                setPromo_active_id(promotion_id)
                setQuantityCotas(quantityCotas - old_quantity + Number(quantity_cotas_selected));

            } else if (!promo_active && price_to_gether?.length) {

                setTot((Number(tot) + Number(price_together)).toFixed(2));

                setPromo_active(true);
                setPromo_active_id(promotion_id)

                setQuantityCotas(quantityCotas + Number(quantity_cotas_selected));

            }

        }

    }

    const calc_cotas_quantity = (quantity_cotas_selected: number, price_unitary: string | undefined) => {

        if (quantity_cotas_selected !== undefined && price_unitary !== undefined) {

            setQuantityCotas(quantityCotas + Number(quantity_cotas_selected));

            let separe_numder_of_string = price_unitary.split(" ")
            let decimal = separe_numder_of_string[1]
            let replace = decimal.replace(",", ".");

            setTot((Number(tot) + (Number(quantity_cotas_selected) * Number(replace))).toFixed(2));

        }

    }

    const oneLass = () => {

        if (promo_active) {

            const calc = quantityCotas - old_quantity

            if (calc === 0) {

                setTot((Number(tot) - old_price).toFixed(2));
                setOld_price(null);
                setOld_quantity(0);
                setQuantityCotas(calc);
                setPromo_active(false);

            } else {

                setQuantityCotas(quantityCotas - 1);
                quantityCotas > 0 && setTot((Number(tot) - Number(price_number)).toFixed(2));

            }

        } else {

            quantityCotas > 0 && setQuantityCotas(quantityCotas - 1);
            quantityCotas > 0 && setTot((Number(tot) - Number(price_number)).toFixed(2));

        }

    }

    const oneMore = () => {

        if (raffle?.ticket_tot) {

            quantityCotas < raffle.ticket_tot && setQuantityCotas(quantityCotas + 1);
            quantityCotas >= 0 && setTot((Number(tot) + Number(price_number)).toFixed(2));

        }

    }

    return (
        <>

            <Modal_cpf  tot={tot} id={id} modal_cpf={modal_cpf} setModal_cpf={setModal_cpf} />

            <div className="capa_page">
                <img src={raffle?.image} className='img_capa_page' alt="" />
            </div>

            <div className="div_title_raffle">
                <h4>{raffle?.title}</h4>
            </div>

            <div className="price_cota">
                <div className="title_price">
                    <h6>POR APENAS</h6>
                </div>
                <div className="price">
                    <h6>{raffle?.price_unitary}</h6>
                </div>
            </div>

            {promotions.length > 0 &&
                <>
                <hr />

                <div className="container d-flex justify-content-center align-items-center">

                    <div className="promo">

                        <p className='promo-title'> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-megaphone mx-2" viewBox="0 0 16 16">
                                <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 75 75 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0m-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233q.27.015.537.036c2.568.189 5.093.744 7.463 1.993zm-9 6.215v-4.13a95 95 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A61 61 0 0 1 4 10.065m-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68 68 0 0 0-1.722-.082z"/>
                            </svg>
                        PROMOÇÕES
                        
                        </p>

                        <h6>Aproveite o desconto!</h6>

                        {promotions.map((promotion) => {

                            return (
                                <React.Fragment key={promotion._id}>
                                    <div className="row justify-content-center align-items-center text-center">
                                        <div className={promo_active && promo_active_id === promotion._id ? "col-6 col-sm-5 box_promo_cotas_active" : "col-6 col-sm-5 box_promo_cotas"} onClick={() => {
                                            calc_cotas_promo(promotion?.ticket_quantity, promotion?.price_together, promotion._id)
                                        }}>
                                            <p className="text_promo_cotas">{promotion?.ticket_quantity} por <strong className={promo_active && promo_active_id === promotion._id ? 'text-white' : 'color_strong'}>{promotion?.price_together}</strong></p>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
                </>
            }

            <hr />

            <div className="container d-flex justify-content-center align-items-center">

                <div className="promo">

                    <p className='promo-title'> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-ticket mx-2" viewBox="0 0 16 16">
                            <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5z"/>
                        </svg>
                        BILHETES    
                    </p>

                    <div className="row justify-content-center align-items-center text-center">

                        <div className="col-2 box_promo_cotas" onClick={() => {
                            calc_cotas_quantity(5, raffle?.price_unitary)
                        }}>

                            <p className="text_promo_cotas"><strong className='color_strong'>+5</strong></p>

                        </div>

                        <div className="col-2 box_promo_cotas" onClick={() => {
                            calc_cotas_quantity(10, raffle?.price_unitary)
                        }}>

                            <p className="text_promo_cotas"><strong className='color_strong'>+10</strong></p>

                        </div>

                        <div className="col-2 box_promo_cotas" onClick={() => {
                            calc_cotas_quantity(15, raffle?.price_unitary)
                        }}>

                            <p className="text_promo_cotas"><strong className='color_strong'>+15</strong></p>

                        </div>

                        <div className="col-2 box_promo_cotas" onClick={() => {
                            calc_cotas_quantity(20, raffle?.price_unitary)
                        }}>

                            <p className="text_promo_cotas"><strong className='color_strong'>+20</strong></p>

                        </div>

                    </div>

                </div>

            </div>

            <div className="container d-flex justify-content-center align-items-center mt-3">

                <div className="promo text-center">

                    <p className='promo-title mb-2'>
                    
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-card-checklist mx-2" viewBox="0 0 16 16">
                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                            <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
                        </svg>

                        Lista do carrinho
                        
                    </p>

                    <p className='m-0'>Total: R$ <strong className='color_strong'>{tot}</strong></p>

                    <p className='m-0'>Total de bilhetes: <strong className='color_strong'>{quantityCotas}</strong></p>

                </div>

            </div>

            <div className="container d-flex justify-content-center align-items-center mt-3">

                <div className="promo container d-flex justify-content-around align-items-center">

                    <div className="btn_qntt_cotas" onClick={() => {
                        oneLass()
                    }}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">

                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />

                        </svg>

                    </div>
                    <div className=""> {quantityCotas} </div>

                    <div className="btn_qntt_cotas" onClick={() => {
                        oneMore();
                    }}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">

                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />

                        </svg>

                    </div>

                </div>

            </div>

            <div className="container d-flex justify-content-center align-items-center mt-3">

                <div className="promo text-center">
                    <Button_green text={'Quero participar'} btn_function={/*() => generate_pix(tot, id)*/ () => setModal_cpf(true)} />
                </div>
            </div>

            
            {/* qr code  */}
            {qrCode.length > 0 &&
            <div className={openPopUpPix ? 'container-fluid qr-code' : 'pix-hiden'}>
                
                <div className="container d-flex justify-content-end align-items-center">
                    <svg onClick={() => {
                        setOpenPopUpPix(false);
                    }} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </div>
                <div className="div-qr-code">
                    <QRCode value={qrCode} />
                </div>

                <div className="container text-white py-2 d-flex justify-content-center">
                    R$ {valor}
                </div>

                <div className="container d-flex justify-content-center align-items-center">
                    <p className='p-copia-e-cola d-flex justify-content-center align-items-center'>
                        {copiaECola}
                    </p>
                </div>

                <div className="container d-flex justify-content-center align-items-center">
                    <button className='btn-copiar'>Copiar</button>
                </div>
            </div> 
            }

        </>

    )

}