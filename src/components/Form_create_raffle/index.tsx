import './index.css';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
    .object({
        title: yup.string().required('Campo obrigatório'),
        ticket: yup.string().required('Campo obrigatório'),
        price_unitary: yup.string().required('Campo obrigatório'),
        repeat_password: yup.string().required('Campo obrigatório'),
        ticket_quantity: yup.string().required('Campo obrigatório'),
        price_together: yup.string().required('Campo obrigatório'),

    })
    .required()


export const Form_create_raffle = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const createRaffle = (data: any) => {
        console.log(data + 'teste');
    }

    return (

        <>
            <form action="" className='' onSubmit={handleSubmit(createRaffle)}>

                <h1>Dados básicos</h1>
                <p className='color-text'>Insira os dados de como deseja seu sorteio abaixo:</p>

                <div className="form-control-login">
                    <span className='span_login'>Título</span>
                    <input
                        type="text"
                        className={errors.title ? 'input_error' : 'input_login'}
                        {...register("title")}
                    />
                    {errors.title && <p className='text-error'>{errors.title.message}</p>}

                </div>

                <div className="form-control-login">
                    <span className='span_login'>Bilhete</span>
                    <input
                        type="number"
                        className={errors.ticket ? 'input_error' : 'input_login'}
                        placeholder=''
                        {...register("ticket")}
                    />
                    {errors.ticket && <p className='text-error'>{errors.ticket.message}</p>}

                </div>

                <div className="form-control-login">
                    <span className='span_login'>Valor unitário</span>
                    <input
                        type="text"
                        className={errors.price_unitary ? 'input_error' : 'input_login'}
                        placeholder=''
                        {...register("price_unitary")}
                    />
                    {errors.price_unitary && <p className='text-error'>{errors.price_unitary.message}</p>}
                </div>

                <div className="form-control-login">
                    <span className='span_login'>Escolha uma imagem</span>
                    <input
                        className="input_login form-control-sm"
                        id="formFileSm"
                        type="file"
                    />
                </div>

                <hr />

                <h1>Promoção 1</h1>

                <div className="form-control-login">
                    <span className='span_login'>Quantia de cotas</span>
                    <input
                        type="text"
                        className={errors.ticket_quantity ? 'input_error' : 'input_login'}
                        placeholder=''
                        {...register("ticket_quantity")}
                    />
                    {errors.ticket_quantity && <p className='text-error'>{errors.ticket_quantity.message}</p>}

                </div>

                <div className="form-control-login">
                    <span className='span_login'>Valor das cotas em conjunto</span>
                    <input
                        type="text"
                        className={errors.price_together ? 'input_error' : 'input_login'}
                        placeholder=''
                        {...register("price_together")}
                    />
                    {errors.price_together && <p className='text-error'>{errors.price_together.message}</p>}
                </div>

                <h1>Promoção 2</h1>

                <div className="form-control-login">
                    <span className='span_login'>Quantia de cotas</span>
                    <input
                        type="text"
                        className={errors.ticket_quantity ? 'input_error' : 'input_login'}
                        placeholder=''
                        {...register("ticket_quantity")}
                    />
                    {errors.ticket_quantity && <p className='text-error'>{errors.ticket_quantity.message}</p>}

                </div>

                <div className="form-control-login">
                    <span className='span_login'>Valor das cotas em conjunto</span>
                    <input
                        type="text"
                        className={errors.price_together ? 'input_error' : 'input_login'}
                        placeholder=''
                        {...register("price_together")}
                    />
                    {errors.price_together && <p className='text-error'>{errors.price_together.message}</p>}
                </div>

                <h1>Promoção 3</h1>

                <div className="form-control-login">
                    <span className='span_login'>Quantia de cotas</span>
                    <input
                        type="text"
                        className={errors.ticket_quantity ? 'input_error' : 'input_login'}
                        placeholder=''
                        {...register("ticket_quantity")}
                    />
                    {errors.ticket_quantity && <p className='text-error'>{errors.ticket_quantity.message}</p>}

                </div>

                <div className="form-control-login">
                    <span className='span_login'>Valor das cotas em conjunto</span>
                    <input
                        type="text"
                        className={errors.price_together ? 'input_error' : 'input_login'}
                        placeholder=''
                        {...register("price_together")}
                    />
                    {errors.price_together && <p className='text-error'>{errors.price_together.message}</p>}
                </div>

                <h1>Promoção 4</h1>

                <div className="form-control-login">
                    <span className='span_login'>Quantia de cotas</span>
                    <input
                        type="text"
                        className={errors.ticket_quantity ? 'input_error' : 'input_login'}
                        placeholder=''
                        {...register("ticket_quantity")}
                    />
                    {errors.ticket_quantity && <p className='text-error'>{errors.ticket_quantity.message}</p>}

                </div>

                <div className="form-control-login">
                    <span className='span_login'>Valor das cotas em conjunto</span>
                    <input
                        type="text"
                        className={errors.price_together ? 'input_error' : 'input_login'}
                        placeholder=''
                        {...register("price_together")}
                    />
                    {errors.price_together && <p className='text-error'>{errors.price_together.message}</p>}
                </div>


                <button type='submit' className='btn_criar_conta'>Criar Sorteio</button>
            </form>
        </>

    )

}