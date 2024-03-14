import { useNavigate } from 'react-router-dom'
import './index.css'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Loader } from '../Loader';
import { useForm } from 'react-hook-form';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Contexts/UserContext';

const schema = yup.object({
    full_name: yup.string().required('Campo obrigatório'),
}).required();

export const Update_nome = () => {

    const [gatilho_loader, setGatilho_loader] = useState(false);

    const navigate = useNavigate();

    const { gatilho_update_name, update_name, setGatilho_update_name } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({resolver: yupResolver(schema)});

    const loader_navigate = (data: any) => {

        setGatilho_loader(true)
        update_name(data)

    }

    useEffect(() => {

        if(gatilho_update_name){

            navigate('/minha_conta');

        }

    }, [gatilho_update_name])

    return (

        <>

            <div className="div-inputs">
                <div className="row justify-content-center">
                    <div className="container">
                        <button className="btn-voltar d-flex justify-content-end px-2 py-1 mt-4" onClick={() => navigate('/minha_conta')}>Voltar</button>
                    </div>
                    <form action="" onSubmit={(data) => handleSubmit(loader_navigate)(data)}>
                        <div className="container mt-4">
                            <h6 className='m-0 text-start px-2'>Nome</h6>
                            <input type="text" {...register("full_name")} className="input_login w-100 mb-1" />
                            {errors.full_name && <p className='text-error'>{errors.full_name.message}</p>}

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