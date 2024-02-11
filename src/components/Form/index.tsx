import { Link, Outlet } from 'react-router-dom';
import './index.css';
import { useContext } from 'react';
import { FormEditContext } from '../../Contexts/FormEditContext';

export const Form = () => {

    const { createOrLogin, tagColor, url } = useContext(FormEditContext);

    return (
        <>
            <>
                <div className="login_header">
                    <div className="div_logo_login" onClick={() => window.location.href = '/'}>
                        <img src="../../../img/logo_vazia.png" className='logo_img' alt="" />
                    </div>
                </div>
                <div className="login_body">
                    <div className='div_form_login'>
                            <Outlet />                           
                    </div>
                    <hr />

                    <div className='d-flex justify-content-center align-items-center'>
                        <Link to={url} className='text_form_login text-decoration-none text-dark text-center'>{createOrLogin}<strong className='color_strong'>{tagColor}</strong></Link>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-center align-items-center">
                        <p className='p-0 latest_text'>Protegido por reCAPTCHA <strong className='color_strong'>Privacidade</strong> <strong className="color_strong">Termos</strong></p>
                    </div>
                </div>
            </>
        </>
    )
}