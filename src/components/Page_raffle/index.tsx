import './index.css';
import { Button_green } from '../Button_green';
import { useContext, useEffect, useState } from 'react';
import { RaffleContext } from '../../Contexts/RaffleContext';
import { useParams } from 'react-router-dom';
import React from 'react';

export const Page_raffle = () => {

    const { id } = useParams();
    const { getRaffle, promotions, raffle, generate_pix, getPromotions } = useContext(RaffleContext);

    const [quantityCotas, setQuantityCotas] = useState(0);
    const [promo_active, setPromo_active] = useState(false);
    const [promo_active_id, setPromo_active_id] = useState('');    
    const [old_price, setOld_price] = useState<any>();
    const [old_quantity, setOld_quantity] = useState<number>(0);
    const [tot, setTot] = useState('');

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

            <div className="capa_page">
                <img src={raffle?.image} className='img_capa_page' alt="" />
            </div>

            <div className="div_title_raffle">
                <h3>{raffle?.title}</h3>
            </div>

            <div className="price_cota">
                <div className="title_price">
                    <h6>POR APENAS</h6>
                </div>
                <div className="price">
                    <h2>{raffle?.price_unitary}</h2>
                </div>
            </div>

            {promotions.length > 0 &&
                <>
                <hr />

                <div className="container d-flex justify-content-center align-items-center">

                    <div className="promo">

                        <h1>PROMOÇÕES</h1>

                        <h6>Aproveite o desconto!</h6>

                        {promotions.map((promotion) => {

                            return (
                                <React.Fragment key={promotion._id}>
                                    <div className="row justify-content-center align-items-center text-center">
                                        <div className={promo_active && promo_active_id === promotion._id ? "col-10 col-sm-5 box_promo_cotas_active" : "col-10 col-sm-5 box_promo_cotas"} onClick={() => {
                                            calc_cotas_promo(promotion?.ticket_quantity, promotion?.price_together, promotion._id)
                                        }}>
                                            <p className="text_promo_cotas">{promotion?.ticket_quantity} cotas <strong className={promo_active && promo_active_id === promotion._id ? 'text-white' : 'color_strong'}>{promotion?.price_together}</strong></p>
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

                    <h1>COTAS</h1>

                    <h6>Quanto mais produtos comprar, maiores são as chances de ganhar!</h6>

                    <div className="row justify-content-center align-items-center text-center">

                        <div className="col-5 box_promo_cotas" onClick={() => {
                            calc_cotas_quantity(5, raffle?.price_unitary)
                        }}>

                            <p className="text_promo_cotas"><strong className='color_strong'>+5</strong> Selecionar</p>

                        </div>

                        <div className="col-5 box_promo_cotas" onClick={() => {
                            calc_cotas_quantity(10, raffle?.price_unitary)
                        }}>

                            <p className="text_promo_cotas"><strong className='color_strong'>+10</strong> Selecionar</p>

                        </div>

                        <div className="col-5 box_promo_cotas" onClick={() => {
                            calc_cotas_quantity(15, raffle?.price_unitary)
                        }}>

                            <p className="text_promo_cotas"><strong className='color_strong'>+15</strong> Selecionar</p>

                        </div>

                        <div className="col-5 box_promo_cotas" onClick={() => {
                            calc_cotas_quantity(20, raffle?.price_unitary)
                        }}>

                            <p className="text_promo_cotas"><strong className='color_strong'>+20</strong> Selecionar</p>

                        </div>

                    </div>

                </div>

            </div>

            <div className="container d-flex justify-content-center align-items-center mt-3">

                <div className="promo text-center">

                    <h5>Lista do carrinho</h5>

                    <p className='m-0'>Total: R$ <strong className='color_strong'>{tot}</strong></p>

                    <p className='m-0'>Total cotas: <strong className='color_strong'>{quantityCotas}</strong></p>

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
                    <Button_green text={'Quero participar'} btn_function={() => generate_pix(tot, id)} />
                </div>

            </div>

        </>

    )

}