import { useNavigate } from 'react-router-dom'
import './index.css'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Loader } from '../Loader';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Contexts/UserContext';

const schema = yup.object({
    senha_nova: yup.string().min(6, 'Senha muito curta').required('Campo obrigatório'),
    repetir_senha_nova: yup.string().min(6, 'Senha muito curta').oneOf([yup.ref('senha_nova')], 'As senhas precisam ser iguais').required('Campo obrigatório'), 
}).required();


export const Update_password = () => {

    const navigate = useNavigate();

    const [gatilho_loader, setGatilho_loader] = useState(false);

    const { update_password, gatilho_update_password } = useContext(UserContext);

    const loader_navigate = (data: any) => {

        setGatilho_loader(true)

        update_password(data);

    }

    useEffect(() => {

        if(gatilho_update_password){
            navigate('/minha_conta')
        }


    }, [gatilho_update_password])

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
                            <h6 className='m-0 text-start px-2'>Nova senha</h6>
                            <input type="password" {...register("senha_nova")} className="input_login w-100 mb-1" />
                            {errors.senha_nova && <p className='text-error'>{errors.senha_nova.message}</p>}

                        </div>
                        <div className="container mt-4">
                            <h6 className='m-0 text-start px-2'>Repita a senha nova</h6>
                            <input type="password" {...register("repetir_senha_nova")} className="input_login w-100 mb-1    " />
                            {errors.repetir_senha_nova && <p className='text-error'>{errors.repetir_senha_nova.message}</p>}

                        </div>

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