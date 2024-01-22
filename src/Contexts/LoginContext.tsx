import { SetStateAction, createContext, useState } from "react";
import { http } from "../http";

type LoginType = {

    login: (data: any) => void,
    login_google: (dataDecoded: any) => void,
    logout: (setMenu: React.Dispatch<SetStateAction<boolean>>) => void,
    erro_login: string,
}

export const LoginContext = createContext<LoginType>(null!);

export const LoginProvider = ({children}: {children: JSX.Element}) => {
    
    const [erro_login, setErro_login] = useState('');

    const login = (data: any) => {

        http.post('/login', {data}).then((response) => {
        
            localStorage.setItem('token', response.data.token);
            
            window.location.href = '/'
            
        }).catch((response) => {
            setErro_login(response.response.data.message)
        })
    
    }

    const login_google = (dataDecoded: any) => {

        http.post('/login_google', {dataDecoded}).then((response) => {
            localStorage.setItem('token', response.data.token);

            window.location.href = '/'
        })

    }

    const logout = (setMenu: React.Dispatch<SetStateAction<boolean>>) => {
        localStorage.setItem('token', '');
        setMenu(false);
    }

    return (
        <LoginContext.Provider value={{logout, login_google, login, erro_login}}>
            {children}
        </LoginContext.Provider>
    )
}