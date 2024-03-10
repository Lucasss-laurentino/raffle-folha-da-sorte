import { useNavigate } from 'react-router-dom'
import { Button_green } from '../Button_green'
import './index.css'

export const Update_email = () => {

    const navigate = useNavigate();

    return (

        <>
            <div className="div-inputs">
                <div className="row justify-content-center">
                    <div className="container">
                        <button className="btn-voltar d-flex justify-content-end px-2 py-1 mt-4" onClick={() => navigate('/minha_conta')}>Voltar</button>
                    </div>
                    <form action="">
                        <div className="container mt-4">
                            <h6 className='m-0 text-start px-2'>Informe o email atual</h6>
                            <input type="text" className="input_login w-100 mb-1" />
                        </div>
                        <div className="container mt-4">
                            <h6 className='m-0 text-start px-2'>Informe o email novo</h6>
                            <input type="text" className="input_login w-100 mb-1" />
                        </div>
                        <div className="container mt-4">
                            <h6 className='m-0 text-start px-2'>Repita o email novo</h6>
                            <input type="text" className="input_login w-100 mb-1    " />
                        </div>

                        <div className="mb-4">
                            <Button_green text='Atualizar' btn_function={() => console.log('teste')}  />
                        </div>

                    </form>
                </div>
            </div>
        
        </>

    )

}