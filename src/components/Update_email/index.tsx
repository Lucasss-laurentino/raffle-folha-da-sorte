import { useNavigate } from 'react-router-dom'
import './index.css'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Contexts/UserContext';
import { Loader } from '../Loader';

const schema = yup.object({
    email_atual: yup.string().email('Email inválido').required('Campo obrigatório'),
    email_novo: yup.string().email('Email inválido').required('Campo obrigatório'),
    repetir_email_novo: yup.string().email('Email inválido').oneOf([yup.ref('email_novo')], 'O email precisa ser igual').required('Campo obrigatório'),
}).required();

export const Update_email = () => {

    const navigate = useNavigate();

    const { update_email, gatilho_update_email, erro, setErro, gatilho_loader, setGatilho_loader } = useContext(UserContext);

    useEffect(() => {

        if(gatilho_update_email){
            setGatilho_loader(false)
            navigate('/minha_conta')
        }

    }, [gatilho_update_email])


    const loader_navigate = (data: any) => {

        setGatilho_loader(true)

        update_email(data);

    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({resolver: yupResolver(schema)});

    return (

        <>
            <div className="div-inputs">
                <div className="row justify-content-center">
                    <div className="container">
                        <button className="btn-voltar d-flex justify-content-end px-2 py-1 mt-4" onClick={() => navigate('/minha_conta')}>Voltar</button>
                    </div>
                    <form action="" onSubmit={(data) => handleSubmit(loader_navigate)(data)}>
                        <div className="container mt-4">
                            <h6 className='m-0 text-start px-2'>Informe o email atual</h6>
                            <input type="text"  className="input_login w-100 mb-1" {...register('email_atual')} />
                            {errors.email_atual && <p className='text-error'>{errors.email_atual.message}</p>}

                        </div>
                        <div className="container mt-4">
                            <h6 className='m-0 text-start px-2'>Informe o email novo</h6>
                            <input type="text"
                             className="input_login w-100 mb-1" 
                             {...register('email_novo')} 
                             onChange={() => {
                                setErro('')
                             }}
                            />
                            {errors.email_novo && <p className='text-error'>{errors.email_novo.message}</p>}

                        </div>
                        <div className="container mt-4">
                            <h6 className='m-0 text-start px-2'>Repita o email novo</h6>
                            <input type="text" className="input_login w-100 mb-1" {...register('repetir_email_novo')} />
                            {errors.repetir_email_novo && <p className='text-error'>{errors.repetir_email_novo.message}</p>}

                        </div>

                        {erro != '' && <p className='text-error'>{erro}</p>}

                        <div className="mb-4">
                            <div className="div-button-green">
                                {!gatilho_loader ?
                                <button className='btn-green' type='submit'>Atualizar</button>                            
                                :
                                <Loader />
                                }
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        
        </>

    )

}