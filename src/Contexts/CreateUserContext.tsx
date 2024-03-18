import { SetStateAction, createContext, useState } from "react";
import { http } from "../http";

type CreateUserType = {
    create_user: (data: any, tel: string) => void,
    gatilho_logado: boolean,
    setGatilho_logado: React.Dispatch<SetStateAction<boolean>>,

    gatilho_loader: boolean,
    setGatilho_loader: React.Dispatch<SetStateAction<boolean>>,
    erroCreateUser: string,
    erroUserExist: string,
    setErroUserExist: React.Dispatch<SetStateAction<string>>,

}

export const CreateUserContext = createContext<CreateUserType>(null!);

export const CreateUserProvider = ({children}: {children: JSX.Element}) => {

    const [gatilho_logado, setGatilho_logado] = useState(false);

    const [gatilho_loader, setGatilho_loader] = useState(false);

    const [erroCreateUser, setErroCreateUser] = useState('')

    const [erroUserExist, setErroUserExist] = useState('')

    const create_user = (data: any, tel: string) => {

        if(Number(tel)){

            http.post('/create_user', {data, tel}).then((response) => {
                
                localStorage.setItem('token', response.data.token);
    
                setGatilho_logado(true)
                
            }).catch((response) => {

                setErroUserExist(response.response.data.erro)
                setGatilho_loader(false)

            })


        } else {

            setErroCreateUser('Número de telefone inválido')
            setGatilho_loader(false);

        }
    
    }

    return (

        <CreateUserContext.Provider value={{create_user, gatilho_logado, setGatilho_logado, gatilho_loader, setGatilho_loader, erroCreateUser, erroUserExist, setErroUserExist}}>
            {children}
        </CreateUserContext.Provider>

    )
}