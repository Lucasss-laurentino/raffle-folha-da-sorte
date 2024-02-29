import { useState } from 'react';
import { Button_green } from '../Button_green';
import { Data_index_marketing } from '../Data_index_marketing';
import { Img_background_index } from '../Img_background_index';
import { Money_face } from '../Money_face';
import './index.css';
import { List_raffle } from '../List_raffle';

export const Outlet_index = () => {

    const show_sorteios = () => {
        setAnimateHidenOrShowListSorted('hiden-body')
        setAnimateOld('animate-old')
    }

    const [animateHidenOrShowListSorted, setAnimateHidenOrShowListSorted] = useState(''); 
    const [animateOld, setAnimateOld] = useState('d-none'); 

    return (
        
        <>
            <div className='div-caps-main'>
                <div className="div-text-main">
                    <h2>Crie sua Rifa online em poucos minutos</h2>
                    <p className="text-bottom-title">Potencialize suas rifas ! Crie e gerencie rifas de forma simples</p>
                </div>
            </div>
            <Button_green btn_function={show_sorteios} text={"Ver sorteios"}/>

            <div className={animateHidenOrShowListSorted}>
                <Img_background_index />

                <div className="container p-0">
                    <h3 className='text-center'>Por que escolher nossa plataforma ?</h3>
                </div>

                <Data_index_marketing />

                <Money_face />
            </div>

            <div className={animateOld}>

                <List_raffle />

            </div>

        </>
    
    )

}