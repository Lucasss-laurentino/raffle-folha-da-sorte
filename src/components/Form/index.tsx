import { Link, Outlet } from 'react-router-dom';
import './index.css';
import { useContext } from 'react';
import { FormEditContext } from '../../Contexts/FormEditContext';

export const Form = () => {

    const { createOrLogin, tagColor, url } = useContext(FormEditContext);

    return (
        <>
            <>
                <div className="container form-container mt-3">
                <div className="login_header p-0">
                    <div className='div_form_login'>
                        <div className="container d-flex justify-content-start">
                            <div className="div_logo_login m-0 d-flex justify-content-start justify-content-sm-center justify-content-md-end" onClick={() => window.location.href = '/'}>
                                <img src="../../../img/logo_vazia.png" className='logo_img_form' alt="" />
                            </div>
                        </div>
                        <Outlet />                           
                    
                    </div>
                    <hr />

                    <div className='d-flex justify-content-center align-items-center'>
                        <Link to={url} className='text_form_login text-decoration-none text-dark text-center'>{createOrLogin}<strong className='color_strong'>{tagColor}</strong></Link>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-center align-items-center">
                        <p className='p-0 text-respons my-2 pb-3'>Protegido por reCAPTCHA <strong className='color_strong'>Privacidade</strong> <strong className="color_strong">Termos</strong></p>
                    </div>
                </div>
                </div>
            </>
        </>
    )
}