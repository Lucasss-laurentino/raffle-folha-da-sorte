import { useNavigate } from 'react-router-dom';
import { Button_green } from '../Button_green';
import './index.css';
import InputMask  from 'react-input-mask'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Contexts/UserContext';
import { Loader } from '../Loader';

const schema = yup.object({
    tel: yup.string().min(14).max(14).required('Campo obrigatório'),
}).required();

export const Update_celular = () => {

    const navigate = useNavigate();

    const { update_tel, gatilho_update_tel, erroTel, setErroTel, gatilho_loader, setGatilho_loader } = useContext(UserContext);

    useEffect(() => {

        if(gatilho_update_tel){
            
            setGatilho_loader(false)
            navigate('/minha_conta')
        }

    }, [gatilho_update_tel])


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({resolver: yupResolver(schema)});

    const loader_navigate = (data: any) => {

        setGatilho_loader(true)
        update_tel(data);

    }

    return (

        <>
            <div className="div-inputs">
                <div className="row justify-content-center">
                    <div className="container">
                        <button className="btn-voltar d-flex justify-content-end px-2 py-1 mt-4" onClick={() => navigate('/minha_conta')}>Voltar</button>
                    </div>
                    <form action="" onSubmit={(data) => handleSubmit(loader_navigate)(data)}>
                        <div className="container mt-4">
                            <h6 className='m-0 text-start px-2'>Número</h6>
                            <InputMask mask={'(99) 999999999'} {...register('tel')} type="text" onChange={(() => {
                                setErroTel('')
                            })} className="input_login w-100 mb-1" />
                            {errors.tel && <p className='text-error'>{errors.tel.message}</p>}
                        </div>
                        <div className="mb-4">
                            {erroTel != '' && <p className='text-error'>{erroTel}</p>}
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