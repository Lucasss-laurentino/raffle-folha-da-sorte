import { Button_green } from '../Button_green'
import './index.css'

export const Price_plan = () => {

    const redirect_create_raffle = () => {

        const token = localStorage.getItem('token');

        if (token != undefined && token?.length > 0) {

        }

    }

    return (

        <>
            <div className="container-fluid d-flex justify-content-center align-items-center">

                <div className="container-price">
                    <div className="container container-borda">
                        <div className="container pt-4 div-title-plan d-flex justify-content-center">
                            <h6 className='kkk'>R$</h6>
                            <h1 className='px-1 m-0'>19,90</h1>
                            <p className="m-0 text-secondary d-flex align-self-end text-rifa">/por rifa</p>
                        </div>
                        <div className="check-options">
                            <div className='d-flex align-items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4b6318" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                                </svg>
                                <p className="m-0 my-2 mx-2">Valor único por rifa</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4b6318" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                                </svg>
                                <p className="m-0 my-2 mx-2">Arrecadação ilimitada</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4b6318" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                                </svg>
                                <p className="m-0 my-2 mx-2">Sem taxas ou mensalidades</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4b6318" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                                </svg>
                                <p className="m-0 my-2 mx-2">Participantes ilimitados</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4b6318" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                                </svg>
                                <p className="m-0 my-2 mx-2">Edição ilimitada</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4b6318" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                                </svg>
                                <p className="m-0 my-2 mx-2">Acessos ilimitados</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="d-flex justify-content-center">
                <Button_green text='Crie sua rifa' btn_function={() => redirect_create_raffle()} />
            </div>

        </>

    )

}