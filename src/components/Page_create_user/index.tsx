import { useContext, useEffect, useState } from 'react'
import './index.css'
import { FormEditContext } from '../../Contexts/FormEditContext'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { CreateUserContext } from '../../Contexts/CreateUserContext'
import { Loader } from '../Loader'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import { MenuContext } from '../../Contexts/MenuContext'
import InputMask from "react-input-mask";


const schema = yup
  .object({
    full_name: yup.string().required('Campo obrigatório'),
    email: yup.string().email('Email inválido').required('Campo obrigatório'),
    password: yup.string().min(6, 'Senha muito curta').required('Campo obrigatório'),
    repeat_password: yup.string().min(6, 'Senha muito curta').oneOf([yup.ref('password')], 'As senhas precisam ser iguais').required('Campo obrigatório'),
    celular: yup.string().min(13, 'Preencha o campo corretamente').max(13, 'Preencha o campo corretamente').required('Campo obrigatório'),
  })
  .required()

export const Page_create_user = () => {

    const navigate = useNavigate();

    const { setCreateOrLogin, setTagColor, setUrl } = useContext(FormEditContext);

    const { create_user, gatilho_logado, gatilho_loader, setGatilho_loader, erroCreateUser , erroUserExist, setErroUserExist} = useContext(CreateUserContext)

    const { setMenu } = useContext(MenuContext)

    const create_user_loader = (data: any) => {

        const sem_parenteses_1 = data.celular.split('(')
        const sem_parenteses_2 = sem_parenteses_1[1].split(')')
        const tel_string = sem_parenteses_2.join('');
        const tel = tel_string.split(' ').join('')


        setGatilho_loader(true)

        create_user(data, tel)
        
        
    }

    useEffect(() => {

        if(gatilho_logado){
            navigate('/');
        }

    }, [gatilho_logado])

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({resolver: yupResolver(schema)});

    useEffect(() => {
        setCreateOrLogin('Já tem uma conta ? ');
        setTagColor(' Login');
        setUrl('/login')
        setMenu(false)
    });

    return (

        <>
            <form action="" className='' onSubmit={(data) => handleSubmit(create_user_loader)(data)}>

                <div className="div_title_login">
                    <h2>Criar conta</h2>
                </div>

                <div className="form-control-login">
                    <span className='span_login'>Nome completo</span>
                    <input
                        type="text"
                        className={errors.full_name ? 'input_error' : 'input_login'}
                        placeholder={errors.full_name? '' : 'Digite seu nome e sobrenome'}
                        {...register("full_name")}
                    />
                     {errors.full_name && <p className='text-error'>{errors.full_name.message}</p>}
                </div>
                <div className="form-control-login">
                    <span className='span_login'>Endereço de e-mail</span>
                    <input
                        type="email"
                        className={errors.email ? 'input_error' : 'input_login'}
                        placeholder={errors.email ? '' : 'Digite seu email'}
                        {...register("email")}
                    />
                    {errors.email && <p className='text-error'>{errors.email.message}</p>}

                </div>
                <div className="form-control-login">
                    <span className='span_login'>Número de celular</span>
                    <InputMask
                        mask={"(99)999999999"}
                        type="text"
                        className={errors.celular ? 'input_error' : 'input_login'}
                        placeholder={errors.celular ? '' : 'Digite seu email'}
                        {...register("celular")}
                        onChange={() => {
                            setErroUserExist('')
                        }}
                    />

                    {errors.celular && <p className='text-error'>{errors.celular.message}</p>}
                    {erroCreateUser != '' && <p className='text-error'>{erroCreateUser}</p>}

                </div>

                <div className="form-control-login">
                    <span className='span_login'>Senha</span>
                    <input
                        type="password"
                        className={errors.password ? 'input_error' : 'input_login'}
                        placeholder={errors.password ? '' : 'Digite sua senha'}
                        {...register("password")}
                        />
                        {errors.password && <p className='text-error'>{errors.password.message}</p>}

                </div>
                <div className="form-control-login">
                    <span className='span_login'>Repita a senha</span>
                    <input
                        type="password"
                        className={errors.repeat_password ? 'input_error' : 'input_login'}
                        placeholder={errors.repeat_password ? '' : 'Confirme sua senha'}
                        {...register("repeat_password")}
                    />
                    {errors.repeat_password && <p className='text-error'>{errors.repeat_password.message}</p>}
                </div>

                {erroUserExist && <p className='text-error'>{erroUserExist}</p>}

                <div className="div_text_form_login">
                    <p className='text_form_login'>
                        Ao clicar no botão abaixo "Criar conta", você concorda com nossos <strong className='color_strong'>termos de uso</strong>
                        e a nossa <strong className='color_strong'>Politica de privacidade</strong> e confirma ter mais de 18 anos.
                    </p>
                </div>

                {!gatilho_loader ?
                <button type='submit' className='btn_criar_conta'>Criar conta</button>
                :
                <Loader />
                }
            </form>
        </>

    )
}