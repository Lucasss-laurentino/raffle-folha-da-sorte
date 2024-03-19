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
import { LoginContext } from '../../Contexts/LoginContext';

export const Outlet_index = () => {

    const show_sorteios = () => {
        setAnimateHidenOrShowListSorted('hiden-body')
        setAnimateOld('animate-old')
    }

    const { gatilho_logado, setGatilho_logado } = useContext(CreateUserContext);

    const { gatilho_login } = useContext(LoginContext);

    const [animateHidenOrShowListSorted, setAnimateHidenOrShowListSorted] = useState(''); 
    const [animateOld, setAnimateOld] = useState('d-none'); 

    useEffect(() => {

        if(gatilho_logado || gatilho_login){        
            
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

    }, [])

    return (

        <>
            <ToastContainer limit={1}/>

            <div className='div-caps-main'>
                <div className="div-text-main col-10 col-sm-8">
                    <h2 className=''>Crie sua Rifa online em poucos minutos</h2>
                    <p className="text-bottom-title">Potencialize suas rifas ! Crie e gerencie rifas de forma simples</p>
                </div>
            </div>
            <Button_green btn_function={show_sorteios} text={"Ver sorteios"}/>

            <div className={animateHidenOrShowListSorted}>
                <Img_background_index />

                <div className="row w-100 div-green">
                    <div className="col-12">
                        <h2 className='mt-4 mb-2 text-center'>Tenha liberdade</h2>
                        <p className='m-0 text-center'>Todo o dinheiro arrecadado por suas campanhas vai diretamente pra você</p>
                    
                        <div className="d-flex justify-content-center align-items-center">
                            <button className='my-4 btn-div-green'>Quero criar minha rifa</button>
                        </div>                        
                    </div>
                </div>

                <div className="container p-0">
                    <h3 className='text-center porque'>Por que escolher nossa plataforma ?</h3>
                </div>

                <Data_index_marketing />

                <Button_green text='Crie sua rifa' btn_function={() => {}}/>
            </div>

            <div className={animateOld}>

                <List_raffle />

            </div>

        </>
    
    )

}