import './index.css';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useContext, useEffect, useState } from 'react';
import { RaffleContext } from '../../Contexts/RaffleContext';
import InputMask from "react-input-mask";
import { Loader } from '../Loader';
import { useNavigate } from 'react-router-dom';
import { ModalTaxas } from '../ModalTaxas';
import { UserContext } from '../../Contexts/UserContext';

const schema = yup
    .object({
        title: yup.string().required('Campo obrigatório'),
        ticket_tot: yup.number().required('Campo obrigatório').positive('precisa ser um numero').integer('Precisa ser um número'),
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

    const { gatilho_raffle, erroCreateRaffle } = useContext(RaffleContext);

    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const navigate = useNavigate();

    const { user } = useContext(UserContext);

    const { createRaffle, raffles } = useContext(RaffleContext);

    const [image, setImage] = useState<File | null>();

    const [inputChecked, setInputChecked] = useState(false);

    const [svgRemoving, setSvgRemoving] = useState(false);

    const [errorImage, setErrorImage] = useState('');

    const [show, setShow] = useState(false);

    const [price_string, setPrice_string] = useState('0.00');

    const [taxa, setTaxa] = useState(0);

    const select_image = (event: React.ChangeEvent<HTMLInputElement>) => {

        if (event.target.files?.length) {
            setImage(event.target.files[0]);
            setErrorImage('')
        } else {
            setImage(null);
        }

    }

    const form_data = (data: any) => {

        createRaffle(data, image);
        setSvgRemoving(true)

    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setInputChecked(!inputChecked);
        
    }

    useEffect(() => {

        if(gatilho_raffle){

            navigate('/minhas_rifas');

        }

    }, [gatilho_raffle])

    useEffect(() => {

        setSvgRemoving(false)

    }, [raffles])

    useEffect(() => {

        let string = watch('price_unitary');

        if(string != null && string != undefined && string != ''){

            let string_price = string.split(' ');
            let price_number = string_price[1].replace(',', '.')
            let tot_string = watch('ticket_tot');

            if(tot_string != null && Number(price_number)) {

                let calc = Number(price_number) * Number(tot_string);

                setPrice_string((Number(price_number) * Number(tot_string)).toFixed(2))
                setTaxa((10 * calc) / 100)
            }
        }

    }, [watch('price_unitary'), watch('ticket_tot')])

    return (

        <>
        
            <ModalTaxas show={show} onHide={() => setShow(false)} />

            {user ?
            <form className='' onSubmit={(data) => handleSubmit(form_data)(data)}>

                <h1>Criar Sorteio</h1>
                <p className='color-text text-form-raffle'>Insira os dados de como deseja seu sorteio abaixo:</p>

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
                    <span className='span_login'>Quantidade de bilhete</span>
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

                <div className={errorImage != '' ? "form-control-file-danger" : "form-control-file"}>
                    <span className='span_login mt-3'>Escolha uma imagem</span>
                    <p className="m-1 text-file">Dimensões ideais 1000x1000</p>
                    <label htmlFor="formFileSm" className='input-file'>Procurar Imagem</label>
                    <input
                        className="d-none"
                        id="formFileSm"
                        type="file"
                        accept="image/png, image/jpeg"
                        onChange={select_image}
                    />
                    {errorImage && <p className='text-error'>{errorImage}</p>}
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
                    <span className='span_login'>Quantidade de bilhetes</span>
                    <input
                        type="text"
                        className={errors.ticket_quantity_1 ? 'input_error' : 'input_login'}
                        placeholder=''
                        {...register("ticket_quantity_1")}
                    />
                    {errors.ticket_quantity_1 && <p className='text-error'>{errors.ticket_quantity_1.message}</p>}

                </div>

                <div className="form-control-login">
                    <span className='span_login'>Valor dos bilhetes em conjunto</span>
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
                    <span className='span_login'>Quantidade de bilhetes</span>
                    <input
                        type="text"
                        className={errors.ticket_quantity_2 ? 'input_error' : 'input_login'}
                        placeholder=''
                        {...register("ticket_quantity_2")}
                    />
                    {errors.ticket_quantity_2 && <p className='text-error'>{errors.ticket_quantity_2.message}</p>}

                </div>

                <div className="form-control-login">
                    <span className='span_login'>Valor dos bilhetes em conjunto</span>
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
                    <span className='span_login'>Quantidade de bilhetes</span>
                    <input
                        type="text"
                        className={errors.ticket_quantity_3 ? 'input_error' : 'input_login'}
                        placeholder=''
                        {...register("ticket_quantity_3")}
                    />
                    {errors.ticket_quantity_3 && <p className='text-error'>{errors.ticket_quantity_3.message}</p>}

                </div>

                <div className="form-control-login">
                    <span className='span_login'>Valor dos bilhetes em conjunto</span>
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
                    <span className='span_login'>Quantia de bilhetes</span>
                    <input
                        type="text"
                        className={errors.ticket_quantity_4 ? 'input_error' : 'input_login'}
                        placeholder=''
                        {...register("ticket_quantity_4")}
                    />
                    {errors.ticket_quantity_4 && <p className='text-error'>{errors.ticket_quantity_4.message}</p>}

                </div>

                <div className="form-control-login">
                    <span className='span_login'>Valor dos bilhetes em conjunto</span>
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
                <div className="row w-100 d-flex py-2 justify-content-between align-items-center">
                    <div className='col-7 p-0'>
                        <h6 className='title-taxa m-0'>Taxas de publicação</h6>
                    </div>
                    <div className="col-4 p-0">
                        <p className="m-0 text-link text-center">10%</p>
                    </div>
                </div>

                <hr />

                <div className="row w-100 d-flex py-3 justify-content-between align-items-center">
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="m-0 w-text">Taxa de publicação</p>
                        <p className="m-0 text-danger w-text">-R$ {taxa}</p>
                    </div>
                    <div className="d-flex py-3 justify-content-between align-items-center">
                        <p className="m-0 w-text">Arrecadação estimada</p>
                        <p className="m-0 text-success w-text">+R$ {price_string}</p>
                    </div>
                </div>

                {erroCreateRaffle && <p className='text-error'>{erroCreateRaffle}</p>}


                {!svgRemoving ?
                
                <button type={image ? 'submit' : 'button'} onClick={() => {
                    
                    !image && setErrorImage('Campo obrigatório') 

                }} className='btn_criar_conta'>Criar</button>
                
                : 

                <Loader />
                
                }
            </form>
            :
            <Loader />
            }

        </>

    )

}