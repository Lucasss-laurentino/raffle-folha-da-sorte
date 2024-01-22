import './index.css';
import { Link } from 'react-router-dom';

export const List_raffle = () => {

    return (
        
        <>

            <div className="div-list-raffle">
                <ul className="list-raffle">
                    <li className="item-list-raffle">
                        <div className="card-raffle">
                            <div className="header-card-raffle">
                                <img src="../../../img/money.png" alt="" />
                            </div>
                            <div className="body-card-raffle">
                                <div className="header-body-card-raffle">
                                    <p>10.000,00 no pix..</p>
                                    <Link to='/sorteio/1' className='btn-see-raffle'>Ver sorteio</Link>
                                </div>
                            </div>
                        </div>   
                    </li>
                   
                </ul>
            </div>

        </>
    
    )

}