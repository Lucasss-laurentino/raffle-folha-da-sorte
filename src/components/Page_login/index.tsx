import { useContext, useEffect, useState } from 'react';
import './index.css';
import { FormEditContext } from '../../Contexts/FormEditContext';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google' ;
import { jwtDecode } from 'jwt-decode';
import { LoginContext } from '../../Contexts/LoginContext';
import { MenuContext } from '../../Contexts/MenuContext';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Loader } from '../Loader';

const schema = yup
  .object({
    email: yup.string().email('Email inválido').required('Campo obrigatório'),
    password: yup.string().min(6, 'Senha muito curta').required('Campo obrigatório'),
  })
  .required()

export const Page_login = () => {

    const { gatilho_login } = useContext(LoginContext);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({resolver: yupResolver(schema)});

    const { setCreateOrLogin, setTagColor, setUrl } = useContext(FormEditContext);
    const { setMenu } = useContext(MenuContext);
    const { login, login_google, erro_login} = useContext(LoginContext);

    const [gatilho_loader_login, setGatilho_loader_login] = useState(false);

    const login_gatilho = (data: any) => {

        setGatilho_loader_login(true);

        login(data);

    }

    useEffect(() => {
        setCreateOrLogin('Ainda não tem uma conta ?');
        setTagColor('Registre-se')
        setUrl('/createUser')
        setMenu(false)
    })

    useEffect(() => {

        if(gatilho_login){
            navigate('/');
        }
    
    }, [gatilho_login])

    return (

        <>
   
            <form action="" className='' onSubmit={data => handleSubmit(login_gatilho)(data)}>

                <div className="div_title_login">
                    <h2>Bem-vindo de volta!</h2>
                    <p className='color-text'>Insira suas informações abaixo para entrar na sua conta</p>
                </div>

                <div className="form-control-login">
                    <span className='span_login'>Endereço de e-mail</span>
                    <input 
                        type="text" 
                        className={errors.password ? 'input_error' : erro_login ? 'input_error' : 'input_login'}
                        placeholder={errors.email ? '' : 'Digite seu email'}
                        {...register("email")}
                    />
                    {errors.email && <p className='text-error'>{errors.email.message}</p>}

                </div>
                <div className="form-control-login">
                    <span className='span_login'>Senha</span>
                    <input 
                        type="password" 
                        className={errors.password ? 'input_error' : erro_login ? 'input_error' : 'input_login'}
                        placeholder={errors.password ? '' : 'Digite sua senha'}
                        {...register("password")}
                    />
                    {errors.password && <p className='text-error'>{errors.password.message}</p>}
                    {erro_login &&
                    <div className="d-flex text-danger justify-content-center align-items-center wid my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-octagon" viewBox="0 0 16 16">
                            <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z"/>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                        <p className='m-0 px-1'>{erro_login}</p>
                    </div>
                    }
                    <div className="d-flex justify-content-end align-items-center wid">
                        <p className="m-0 color-text">Esqueceu sua senha ?</p>
                    </div>
                    
                    {!gatilho_loader_login ?
                    <button className='btn_criar_conta' type='submit'>Entrar</button>
                    :
                    <Loader />
                    }
                    <div className='teste-teste'>
                        <GoogleOAuthProvider clientId="311654823213-h1vuqnoiecbgkme0olin2eap6rrdlnn4.apps.googleusercontent.com">
                            
                            <GoogleLogin
                                width={"100%"}                    
                                onSuccess={ credentialResponse => {
                                    if(credentialResponse.credential){
                                        const dataDecoded = jwtDecode<any>(credentialResponse.credential);

                                        login_google(dataDecoded)
                                    }
                                }}

                                onError={() => {

                                }}
                            />
                        </GoogleOAuthProvider>
                    </div>

                </div>
            </form>
        </>

    )

}