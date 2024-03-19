import { Link } from 'react-router-dom';
import './index.css';
import { useContext, useEffect } from 'react';
import { RaffleContext } from '../../Contexts/RaffleContext';
import React from 'react';
import { UserContext } from '../../Contexts/UserContext';
import {Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Minhas_rifas = () => {

    const { myRaffles, getMyRaffles, deleteRaffle, gatilho_raffle, setGatilho_raffle } = useContext(RaffleContext);
    const { user } = useContext(UserContext);

    useEffect(() => {
        getMyRaffles();
    }, [])

    useEffect(() => {

        if(gatilho_raffle){

            toast.success('Rifa criada !', {
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

            setGatilho_raffle(false);

        }

    }, [gatilho_raffle]);

    return (

        <>
            <ToastContainer limit={1}/>

            <div className="container">
                <div className="container my-3 div-title-campanha">
                    <h1>Minhas Rifas</h1>
                </div>
                <div className="row justify-content-center my-4">
                    <div className="col-10 d-flex justify-content-center align-items-center">
                        <Link to='/create_raffle' className='btn-criar-campanha text-center text-decoration-none'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="m-1 bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                            </svg>
                            Criar rifa
                        </Link>

                    </div>
                </div>

                <div className="div-list-raffle">
                    {myRaffles != undefined && myRaffles?.length > 0 ?
                    <ul className="list-raffle">
                        {myRaffles?.map((raffle) => {
                            return (
                                <React.Fragment key={raffle._id}>
                                    <li className="item-list-raffle my-2">
                                        <div className="card-raffle">
                                            {user?.admin ?
                                                <div className="d-flex justify-content-end align-items-center">
                                                    <button type='button' className="btn btn-sm m-0 px-3 pt-2 text-danger" onClick={() => deleteRaffle(raffle._id)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                : user?.id == raffle.user_id &&
                                                <div className="d-flex justify-content-end align-items-center">
                                                    <button type='button' className="btn btn-sm m-0 px-3 pt-3 text-danger" onClick={() => deleteRaffle(raffle._id)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            }
                                            <div className="header-card-raffle">
                                                <img src={raffle.image} alt="" />
                                            </div>
                                            <div className="body-card-raffle">
                                                <div className="header-body-card-raffle">
                                                    <p className='col-12 p-1'>{raffle.title}</p>
                                                    <Link to={`/detalhes/${raffle._id}`} className='btn btn-sm col-6 text-decoration-underline'>Detalhes</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </React.Fragment>
                            )
                        })}
                    </ul>
                    : 
                    <div className="container d-flex justify-content-center align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-folder-x" viewBox="0 0 16 16">
                            <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181L15.546 8H14.54l.265-2.91A1 1 0 0 0 13.81 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91H9v1H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zm6.339-1.577A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z"/>
                            <path d="M11.854 10.146a.5.5 0 0 0-.707.708L12.293 12l-1.146 1.146a.5.5 0 0 0 .707.708L13 12.707l1.146 1.147a.5.5 0 0 0 .708-.708L13.707 12l1.147-1.146a.5.5 0 0 0-.707-.708L13 11.293z"/>
                        </svg>
                        <p className='my-2 px-1'>Nenhuma rifa cadastrada</p>
                    </div>
                    }
                </div>


            </div>
        </>

    )

}

