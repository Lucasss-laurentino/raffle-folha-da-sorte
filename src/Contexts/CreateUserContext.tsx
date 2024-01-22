import { createContext } from "react";
import { http } from "../http";

type CreateUserType = {
    create_user: (data: any) => void,
}

export const CreateUserContext = createContext<CreateUserType>(null!);

export const CreateUserProvider = ({children}: {children: JSX.Element}) => {

    const create_user = (data: any) => {

        http.post('/create_user', {data}).then((response) => {
    
            localStorage.setItem('token', response.data.token);

            window.location.href = '/';
            
        })
    
    }

    return (

        <CreateUserContext.Provider value={{create_user}}>
            {children}
        </CreateUserContext.Provider>

    )
}