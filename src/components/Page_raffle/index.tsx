import { Form_cotas } from '../Form_cotas';
import './index.css';
import { Button_green } from '../Button_green';
import { useEffect } from 'react';


export const Page_raffle = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    return (
            <>

            <div className="capa_page">
                <img src="../../../img/money.png" className='img_capa_page' alt="" />
            </div>

            <div className="div_title_raffle">
                <h3>10.000,00 no pix</h3>
            </div>

            <div className="price_cota">
                <div className="title_price">
                    <h6>POR APENAS</h6>
                </div> 
                <div className="price">
                    <h2>R$ 0,40</h2>
                </div>
            </div>

            <hr />

            <div className="container d-flex justify-content-center align-items-center">
                
                <div className="promo">
                    
                    <h1>PROMOÇÕES</h1>
                    
                    <h6>Aproveite o desconto!</h6>
                    
                    <div className="row justify-content-center align-items-center text-center">
                        <div className="col-5 box_promo_cotas">
                            <p className="text_promo_cotas">50 cotas R$ <strong className='color_strong'>24,50</strong></p>
                        </div>
                        <div className="col-5 box_promo_cotas">
                            <p className="text_promo_cotas">100 cotas R$ <strong className='color_strong'>49,00</strong></p>
                        </div>
                        <div className="col-5 box_promo_cotas">
                            <p className="text_promo_cotas">150 cotas R$ <strong className='color_strong'>73,50</strong></p>
                        </div>
                        <div className="col-5 box_promo_cotas">
                            <p className="text_promo_cotas">200 cotas R$ <strong className='color_strong'>98,00</strong></p>
                        </div>
                    </div>

                </div>
            
            </div>

            <hr />

            <div className="container d-flex justify-content-center align-items-center">

                <div className="promo">

                    <h1>COTAS</h1>

                    <h6>Quanto mais produtos comprar, maiores são as chances de ganhar!</h6>

                    <div className="row justify-content-center align-items-center text-center">

                        <div className="col-5 box_promo_cotas">

                            <p className="text_promo_cotas"><strong className='color_strong'>+5</strong> Selecionar</p>

                        </div>

                        <div className="col-5 box_promo_cotas">

                            <p className="text_promo_cotas"><strong className='color_strong'>+10</strong> Selecionar</p>

                        </div>

                        <div className="col-5 box_promo_cotas">

                            <p className="text_promo_cotas"><strong className='color_strong'>+15</strong> Selecionar</p>

                        </div>

                        <div className="col-5 box_promo_cotas">

                            <p className="text_promo_cotas"><strong className='color_strong'>+20</strong> Selecionar</p>

                        </div>

                    </div>

                </div>

            </div>

            <div className="container d-flex justify-content-center align-items-center mt-3">

                <div className="promo text-center">
                                        
                    <h5>Lista do carrinho</h5>

                    <p className='m-0'>Total: <strong className='color_strong'> 0,00</strong></p>

                    <p className='m-0'>Total cotas: <strong className='color_strong'>0</strong></p>

                </div>            

            </div>                

            <div className="container d-flex justify-content-center align-items-center mt-3">

                <div className="promo container d-flex justify-content-around align-items-center">

                    <div className="btn_qntt_cotas">

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
        
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
        
                        </svg>

                    </div>
                    <div className=""> 0 </div>
                
                    <div className="btn_qntt_cotas"> 

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                
                        </svg>

                    </div>

                </div>            

            </div>      
            <div className="container d-flex justify-content-center align-items-center mt-3">

                <div className="promo text-center">
                    <Button_green text={'Quero participar'} btn_function={() => console.log('teste')}/>
                </div>            

            </div>                        

        </>
    
    )

}