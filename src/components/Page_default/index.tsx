import { Footer } from "../Footer"
import { Nav_bar } from "../Nav_bar"
import { Outlet, useParams } from "react-router-dom"
import { Menu_lateral } from "../Menu_lateral/"
import { useContext, useEffect } from "react"
import { LoginContext } from "../../Contexts/LoginContext"
import { RaffleContext } from "../../Contexts/RaffleContext"
import { Modal_tickets } from "../Modal_tickets"
import { ModalContext } from "../../Contexts/ModalContext"
import {Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

export const Page_default = () => {

    const { validate_token, user_logged } = useContext(LoginContext);

    const { getRaffles } = useContext(RaffleContext);

    const { modalShow, setModalShow } = useContext(ModalContext);

    const { logado } = useParams();

    const { createRaffle } = useParams();

    useEffect(() => {

        const token = localStorage.getItem('token');

        if(token?.length){

            validate_token(token);

        }

        getRaffles();

    }, [])

    useEffect(() => {

        if(logado && !createRaffle){

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

        }

        if(createRaffle && logado){

            toast.success('Rifa criada!', {
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

        }           

    }, []);

    return (
        
        <>

        <ToastContainer limit={1}/>

        <Modal_tickets show={modalShow} setModalShow={setModalShow}/>  

        <header>
            <Nav_bar />

            <Menu_lateral />
        </header>
    
        <main>
            <Outlet />
        </main>

        <footer>
            <Footer />
        </footer>
        </>
    
    )
}