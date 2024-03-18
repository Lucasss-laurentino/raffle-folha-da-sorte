import React, { SetStateAction, createContext, useContext, useState } from "react";
import { http } from "../http";
import User from "../types/User";
import { UserContext } from "./UserContext";

type LoginType = {

    login: (data: any) => void,
    login_google: (dataDecoded: any) => void,
    logout: (setMenu: React.Dispatch<SetStateAction<boolean>>) => void,
    erro_login: string,
    gatilho_login: boolean,
    setGatilho_login: React.Dispatch<SetStateAction<boolean>>,
    gatilho_logout: boolean,
    setGatilho_logout: React.Dispatch<SetStateAction<boolean>>,
    gatilho_loader_login: boolean,
    setGatilho_loader_login: React.Dispatch<SetStateAction<boolean>>,

}

export const LoginContext = createContext<LoginType>(null!);

export const LoginProvider = ({ children }: { children: JSX.Element }) => {

    const [erro_login, setErro_login] = useState('');

    const [gatilho_login, setGatilho_login] = useState(false);

    const [gatilho_logout, setGatilho_logout] = useState(true);

    const [gatilho_loader_login, setGatilho_loader_login] = useState(false);

    const { setUser } = useContext(UserContext);

    const login = (data: any) => {

        http.post('/login', { data }).then((response) => {
            
            localStorage.setItem('token', response.data.token);
            setGatilho_login(true);
            setUser(response.data.user);

        }).catch((response) => {
            
            setErro_login(response.response.data.message)
            setGatilho_loader_login(false)
        
        });

    }

    const login_google = (dataDecoded: any) => {

        http.post('/login_google', { dataDecoded }).then((response) => {

            localStorage.setItem('token', response.data.token);

            setGatilho_login(true);

        })

    }

    const logout = (setMenu: React.Dispatch<SetStateAction<boolean>>) => {      
        localStorage.setItem('token', '');
        setMenu(false);
        setGatilho_login(false)
        setGatilho_logout(false)
    }

    return (
        <LoginContext.Provider value={{ 
            logout, 
            login_google, 
            login, 
            erro_login, 
            gatilho_login, 
            setGatilho_login, 
            gatilho_logout, 
            setGatilho_logout, 
            gatilho_loader_login,
            setGatilho_loader_login    
        }}>
            {children}
        </LoginContext.Provider>
    )
}