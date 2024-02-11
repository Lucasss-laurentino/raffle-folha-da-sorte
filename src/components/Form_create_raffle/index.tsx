import './index.css';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useContext, useState } from 'react';
import { RaffleContext } from '../../Contexts/RaffleContext';
import InputMask from "react-input-mask";

const schema = yup
    .object({
        title: yup.string().required('Campo obrigatório'),
        ticket_tot: yup.number().typeError('Campo numérico').integer().positive().required('Campo obrigatório'),
        price_unitary: yup.string().required('Campo obrigatório'),
        ticket_quantity_1: yup.string(),
        price_together_1: yup.string(),
        ticket_quantity_2: yup.string(),
        price_together_2: yup.string(),
        ticket_quantity_3: yup.string(),
        price_together_3: yup.string(),
        ticket_quantity_4: yup.string(),
        price_together_4: yup.string(),

    })
    .required()

export const Form_create_raffle = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const { createRaffle } = useContext(RaffleContext);

    const [image, setImage] = useState<File | null>();

    const [inputChecked, setInputChecked] = useState(false);

    const select_image = (event: React.ChangeEvent<HTMLInputElement>) => {

        if (event.target.files?.length) {
            setImage(event.target.files[0]);
        } else {
            setImage(null);
        }

    }

    const form_data = (data: any) => {

        createRaffle(data, image);

    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setInputChecked(!inputChecked);
        
    }

    return (

        <>
            <form className='' onSubmit={(data) => handleSubmit(form_data)(data)}>

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
                        className={errors.ticket_tot ? 'input_error' : 'input_login'}
                        placeholder=''
                        {...register("ticket_tot")}
                    />
                    {errors.ticket_tot && <p className='text-error'>{errors.ticket_tot.message}</p>}

                </div>

                <div className="form-control-login">
                    <span className='span_login'>Valor unitário</span>
                    <InputMask
                        mask={"R$ " + "99,99"}
                        placeholder='R$ 00,00 '
                        type="string"
                        className={errors.price_unitary ? 'input_error' : 'input_login'}
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
                        accept="image/png, image/jpeg"
                        onChange={select_image}
                    />
                </div>

                <div className="form-control-login">
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" checked={inputChecked} onChange={(e) => handleChange(e)}/>
                            <label className="form-check-label">Habilitar promoção ?</label>
                    </div>
                </div>

                <hr />
                {inputChecked &&
                <>
                <p className="m-0 text-secondary h6 mb-3">Adicione até 4 promoções</p>
                <h1>Promoção 1</h1>

                <div className="form-control-login">
                    <span className='span_login'>Quantia de cotas</span>
                    <input
                        type="text"
                        className={errors.ticket_quantity_1 ? 'input_error' : 'input_login'}
                        placeholder=''
                        {...register("ticket_quantity_1")}
                    />
                    {errors.ticket_quantity_1 && <p className='text-error'>{errors.ticket_quantity_1.message}</p>}

                </div>

                <div className="form-control-login">
                    <span className='span_login'>Valor das cotas em conjunto</span>
                    <InputMask
                        mask={"R$ " + "99,99"}
                        placeholder='R$ 00,00 '
                        type="text"
                        className={errors.price_together_1 ? 'input_error' : 'input_login'}
                        {...register("price_together_1")}
                    />
                    {errors.price_together_1 && <p className='text-error'>{errors.price_together_1.message}</p>}
                </div>

                <h1>Promoção 2</h1>

                <div className="form-control-login">
                    <span className='span_login'>Quantia de cotas</span>
                    <input
                        type="text"
                        className={errors.ticket_quantity_2 ? 'input_error' : 'input_login'}
                        placeholder=''
                        {...register("ticket_quantity_2")}
                    />
                    {errors.ticket_quantity_2 && <p className='text-error'>{errors.ticket_quantity_2.message}</p>}

                </div>

                <div className="form-control-login">
                    <span className='span_login'>Valor das cotas em conjunto</span>
                    <InputMask
                        mask={"R$ " + "99,99"}
                        placeholder='R$ 00,00 '
                        type="text"
                        className={errors.price_together_2 ? 'input_error' : 'input_login'}
                        {...register("price_together_2")}
                    />
                    {errors.price_together_2 && <p className='text-error'>{errors.price_together_2.message}</p>}
                </div>

                <h1>Promoção 3</h1>

                <div className="form-control-login">
                    <span className='span_login'>Quantia de cotas</span>
                    <input
                        type="text"
                        className={errors.ticket_quantity_3 ? 'input_error' : 'input_login'}
                        placeholder=''
                        {...register("ticket_quantity_3")}
                    />
                    {errors.ticket_quantity_3 && <p className='text-error'>{errors.ticket_quantity_3.message}</p>}

                </div>

                <div className="form-control-login">
                    <span className='span_login'>Valor das cotas em conjunto</span>
                    <InputMask
                        mask={"R$ " + "99,99"}
                        placeholder='R$ 00,00 '
                        type="text"
                        className={errors.price_together_3 ? 'input_error' : 'input_login'}
                        {...register("price_together_3")}
                    />
                    {errors.price_together_3 && <p className='text-error'>{errors.price_together_3.message}</p>}
                </div>

                <h1>Promoção 4</h1>

                <div className="form-control-login">
                    <span className='span_login'>Quantia de cotas</span>
                    <input
                        type="text"
                        className={errors.ticket_quantity_4 ? 'input_error' : 'input_login'}
                        placeholder=''
                        {...register("ticket_quantity_4")}
                    />
                    {errors.ticket_quantity_4 && <p className='text-error'>{errors.ticket_quantity_4.message}</p>}

                </div>

                <div className="form-control-login">
                    <span className='span_login'>Valor das cotas em conjunto</span>
                    <InputMask
                        mask={"R$ " + "99,99"}
                        placeholder='R$ 00,00 '
                        type="text"
                        className={errors.price_together_4 ? 'input_error' : 'input_login'}
                        {...register("price_together_4")}
                    />
                    {errors.price_together_4 && <p className='text-error'>{errors.price_together_4.message}</p>}
                </div>
                </>
                }
                <button type='submit' className='btn_criar_conta'>Criar Sorteio</button>

            </form>
        </>

    )

}