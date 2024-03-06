import { Footer } from "../Footer"
import { Nav_bar } from "../Nav_bar"
import { Outlet, useNavigate } from "react-router-dom"
import { Menu_lateral } from "../Menu_lateral/"
import { useContext, useEffect } from "react"
import { LoginContext } from "../../Contexts/LoginContext"
import { RaffleContext } from "../../Contexts/RaffleContext"
import { Modal_tickets } from "../Modal_tickets"
import { ModalContext } from "../../Contexts/ModalContext"
import './index.css';

export const Page_default = () => {

    const { validate_token } = useContext(LoginContext);

    const { getRaffles } = useContext(RaffleContext);

    const { modalShow, setModalShow } = useContext(ModalContext);

    const navigate = useNavigate();

    useEffect(() => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        const token = localStorage.getItem('token');

        if(token?.length){

            validate_token(token);

        }

        getRaffles();

    }, [])

    useEffect(() => {

        if(localStorage.getItem('token') === '') {

            navigate('/')

        }

    }, [localStorage.getItem('token')])

    return (
        
        <>

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