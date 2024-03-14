import { useContext, useEffect } from 'react';
import './index.css';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';
import {Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Minha_conta = () => {

    const { 
    
        gatilho_update_email, 
        setGatilho_update_email, 
        setGatilho_update_password, 
        gatilho_update_password, 
        gatilho_update_name, 
        setGatilho_update_name,
        gatilho_update_tel,
        setGatilho_update_tel,
    
    } = useContext(UserContext);

    useEffect(() => {

        if(gatilho_update_email){

            toast.success('Você atualizou seu email !', {
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
        
            setGatilho_update_email(false);

        }

        if(gatilho_update_password){

            toast.success('Você atualizou sua senha !', {
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
        
            setGatilho_update_password(false);

        }

        if(gatilho_update_name){

            toast.success('Você atualizou seu nome !', {
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
        
            setGatilho_update_name(false);

        }

        if(gatilho_update_tel) {

            toast.success('Você atualizou o número de contato!', {
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
        
            setGatilho_update_tel(false);

        }

    })

    return (

        <>

            <ToastContainer limit={1}/>

            <div className="container mt-5">

                <div className="container d-flex justify-content-start align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                    </svg>

                    <h5 className='m-0 px-2'>Minha conta</h5>

                </div>

                <div className="container mt-4 div-edit-user">

                    <Outlet /> {/* componentes dentro de outlet, outlet_minha_conta e updates.. */}
                    
                </div>

            </div>

        </>

    )

}