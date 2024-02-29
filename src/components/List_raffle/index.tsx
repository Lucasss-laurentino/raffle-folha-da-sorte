import { useContext, useEffect, useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { RaffleContext } from '../../Contexts/RaffleContext';
import React from 'react';
import { LoginContext } from '../../Contexts/LoginContext';

export const List_raffle = () => {

    const { raffles, deleteRaffle } = useContext(RaffleContext);

    const { user_logged } = useContext(LoginContext);

    return (
        
        <>

            <div className="div-list-raffle">
                <ul className="list-raffle">
                    {raffles?.map((raffle) => {
                        return (
                            <React.Fragment key={raffle._id}>
                                <li className="item-list-raffle my-2">
                                    <div className="card-raffle">
                                        {user_logged?.admin &&
                                            <div className="d-flex justify-content-end align-items-center">
                                                <button type='button' className="btn btn-sm m-0 px-3 pt-2 text-danger" onClick={() => deleteRaffle(raffle._id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
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
                                                <Link to={`/sorteio/${raffle._id}`} className='btn-see-raffle col-12'>Ver sorteio</Link>
                                            </div>
                                        </div>
                                    </div>   
                                </li>                            
                            </React.Fragment>
                        )
                    })}
                </ul>
            </div>

        </>
    
    )

}