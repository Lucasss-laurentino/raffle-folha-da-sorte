import { useContext } from 'react';
import { MenuContext } from '../../Contexts/MenuContext';
import './index.css';

export const Nav_bar = () => {

    const { menu, setMenu } = useContext(MenuContext);

    return (
    
        <>
            <div className="nav_bar">

                <div className="div_logo">
                    <img src="../../../img/logo4.png" className='logo_img' alt="" onClick={() => window.location.href = '/'}/>
                </div>

                <div className="icon_menu px-2">
                    <button className='btn_menu' onClick={() => setMenu(!menu)}>
                        {!menu ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list wid-icon-menu" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                        </svg>
                        }
                    </button>
                </div>

            </div>    

        </>
    
    )

}