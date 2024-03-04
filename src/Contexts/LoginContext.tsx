import React, { SetStateAction, createContext, useState } from "react";
import { http } from "../http";
import User from "../types/User";

type LoginType = {

    login: (data: any) => void,
    login_google: (dataDecoded: any) => void,
    logout: (setMenu: React.Dispatch<SetStateAction<boolean>>) => void,
    erro_login: string,
    validate_token: (token: string) => void,
    user_logged: User | undefined,
    gatilho_login: boolean,
    setGatilho_login: React.Dispatch<SetStateAction<boolean>>,
}

export const LoginContext = createContext<LoginType>(null!);

export const LoginProvider = ({ children }: { children: JSX.Element }) => {

    const [erro_login, setErro_login] = useState('');

    const [user_logged, setUser_logged] = useState<User>();

    const [gatilho_login, setGatilho_login] = useState(false);

    const login = (data: any) => {

        http.post('/login', { data }).then((response) => {
            
            localStorage.setItem('token', response.data.token);

            setGatilho_login(true);

        }).catch((response) => {
            setErro_login(response.response.data.message)
        });

    }

    const login_google = (dataDecoded: any) => {

        http.post('/login_google', { dataDecoded }).then((response) => {

            localStorage.setItem('token', response.data.token);

            window.location.href = `/${true}`;

        })

    }

    const validate_token = (token: string) => {

        http.post('/validate_token', { token }).then((response) => {

            setUser_logged(response.data.user);

        }).catch((response) => {
            console.log(response)
        })

    }

    const logout = (setMenu: React.Dispatch<SetStateAction<boolean>>) => {
        localStorage.setItem('token', '');
        setMenu(false);
        setGatilho_login(false)
    }

    return (
        <LoginContext.Provider value={{ logout, login_google, login, erro_login, validate_token, user_logged, gatilho_login, setGatilho_login }}>
            {children}
        </LoginContext.Provider>
    )
}