import { useState, useEffect, useContext } from 'react';
import { Button_green } from '../Button_green';
import { Data_index_marketing } from '../Data_index_marketing';
import { Img_background_index } from '../Img_background_index';
import './index.css';
import { List_raffle } from '../List_raffle';
import { Price_plan } from '../Price_plan';
import {Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CreateUserContext } from '../../Contexts/CreateUserContext';

export const Outlet_index = () => {

    const show_sorteios = () => {
        setAnimateHidenOrShowListSorted('hiden-body')
        setAnimateOld('animate-old')
    }

    const { gatilho_logado, setGatilho_logado } = useContext(CreateUserContext);

    const [animateHidenOrShowListSorted, setAnimateHidenOrShowListSorted] = useState(''); 
    const [animateOld, setAnimateOld] = useState('d-none'); 

    useEffect(() => {

        if(gatilho_logado){        
            toast.success('Você está logado !', {
                position: "bottom-right",
                autoClose: 1300,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });    
        
            setGatilho_logado(false);
        }

    }, [localStorage.getItem('token')])

    return (

        <>
            <ToastContainer limit={1}/>

            <div className='div-caps-main'>
                <div className="div-text-main">
                    <h2>Crie sua Rifa online em poucos minutos</h2>
                    <p className="text-bottom-title">Potencialize suas rifas ! Crie e gerencie rifas de forma simples</p>
                </div>
            </div>
            <Button_green btn_function={show_sorteios} text={"Ver sorteios"}/>

            <div className={animateHidenOrShowListSorted}>
                <Img_background_index />

                <div className="container-fluid p-0 div-green">
                    <h2 className='mt-4 mb-2 text-center'>Tenha liberdade</h2>
                    <p className='m-0 text-center'>Todo o dinheiro arrecadado por suas campanhas vai diretamente pra você</p>
                
                    <div className="d-flex justify-content-center align-items-center">
                        <button className='my-4 btn-div-green'>Quero criar minha rifa</button>
                    </div>
                </div>

                <div className="container p-0">
                    <h3 className='text-center'>Por que escolher nossa plataforma ?</h3>
                </div>

                <Data_index_marketing />

                <Price_plan/>
            </div>

            <div className={animateOld}>

                <List_raffle />

            </div>

        </>
    
    )

}