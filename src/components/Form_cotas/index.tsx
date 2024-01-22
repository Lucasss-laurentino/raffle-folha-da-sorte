import './index.css';

export const Form_cotas = () => {

    return (

        <>
            <form action="" className='form-cotas'>
                <div className="form-control-login">
                    <span className='span_login'>Nome completo</span>
                    <input type="text" className='input_login' placeholder='Digite seu nome e sobrenome' />
                </div>
                <div className="form-control-login">
                    <span className='span_login'>Endereço de e-mail</span>
                    <input type="email" className='input_login' placeholder='Digite seu e-mail' />
                </div>
                <div className="form-control-login">
                    <span className='span_login'>Senha</span>
                    <input type="password" className='input_login' placeholder='Digite sua senha' />
                </div>
                <div className="form-control-login">
                    <span className='span_login'>Repita a senha</span>
                    <input type="password" className='input_login' placeholder='Repita sua senha' />
                </div>

                <div className="div_text_form_login">
                    <p className='text_form_login'>
                        Ao clicar no botão abaixo "Criar conta", você concorda com nossos <strong className='color_strong'>termos de uso</strong>
                        e a nossa <strong className='color_strong'>Politica de privacidade</strong> e confirma ter mais de 18 anos.
                    </p>
                </div>

                <button className='btn_criar_conta'>Criar conta</button>
            </form>

        </>

    )

}