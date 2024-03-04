import { SetStateAction, createContext, useState } from "react";
import { http } from "../http";

type CreateUserType = {
    create_user: (data: any) => void,
    gatilho_logado: boolean,
    setGatilho_logado: React.Dispatch<SetStateAction<boolean>>,
}

export const CreateUserContext = createContext<CreateUserType>(null!);

export const CreateUserProvider = ({children}: {children: JSX.Element}) => {

    const [gatilho_logado, setGatilho_logado] = useState(false);

    const create_user = (data: any) => {

        http.post('/create_user', {data}).then((response) => {

            localStorage.setItem('token', response.data.token);

            setGatilho_logado(true)
        })
    
    }

    return (

        <CreateUserContext.Provider value={{create_user, gatilho_logado, setGatilho_logado}}>
            {children}
        </CreateUserContext.Provider>

    )
}