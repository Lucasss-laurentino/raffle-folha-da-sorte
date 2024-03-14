import { SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { http } from "../http";
import { LoginContext } from "./LoginContext";
import User from "../types/User";

type UserType = {

    user: User | undefined,
    setUser:  React.Dispatch<SetStateAction<User | undefined>>,
    getUser: () => void,
    update_email: (data: any) => void,
    gatilho_update_email: boolean,
    setGatilho_update_email: React.Dispatch<SetStateAction<boolean>>,
    gatilho_update_password: boolean,
    setGatilho_update_password: React.Dispatch<SetStateAction<boolean>>,
    update_password: (data: any) => void,
    update_name: (data: any) => void,
    gatilho_update_name: boolean,
    setGatilho_update_name: React.Dispatch<SetStateAction<boolean>>,
    update_tel: (data: any) => void,
    gatilho_update_tel: boolean,
    setGatilho_update_tel: React.Dispatch<SetStateAction<boolean>>,

}

export const UserContext = createContext<UserType>(null!);

export const UserProvider = ({children}: {children: JSX.Element}) => {

    const [gatilho_update_email, setGatilho_update_email] = useState(false);

    const [user, setUser] = useState<User | undefined>();

    const [gatilho_update_password, setGatilho_update_password] = useState(false);

    const [gatilho_update_name, setGatilho_update_name] = useState(false);

    const [gatilho_update_tel, setGatilho_update_tel] = useState(false);

    const getUser = () => {

        http.post('/getUser').then((response) => {

            setUser(response.data.user);
        
        }).catch((response) => {

            console.log(response.data);

        })

    }

    const update_email = (data: any) => {
        
        http.post('/setEmail', {data}).then((response) => {
            setUser(response.data.user_);
            setGatilho_update_email(true);
        })
    
    
    }

    const update_password = (data: any) => {

        http.post('/setPassword', {data, user}).then((response) => {
            setUser(response.data.user_);
            setGatilho_update_password(true);
        })
    
    
    }

    const update_name = (data: any) => {

        http.post('/setName', {data}).then((response) => {

            setUser(response.data.user_);
            setGatilho_update_name(true);
            
        })
    
    }

    const update_tel = (data: any) => {

        http.post('/setTel', {data, user}).then((response) => {

            setUser(response.data.user_);
            setGatilho_update_tel(true);

        })

    }

    return (

        <UserContext.Provider value={{
            user,
            setUser,
            getUser,
            update_email, 
            gatilho_update_email, 
            setGatilho_update_email,
            update_password,
            gatilho_update_password,
            setGatilho_update_password,
            gatilho_update_name,
            setGatilho_update_name,
            update_name,
            update_tel,
            gatilho_update_tel,
            setGatilho_update_tel,
        }}>
            {children}
        </UserContext.Provider>

    )

}