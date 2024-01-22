import { SetStateAction, createContext, useState } from "react";

type FormEditContextType = {

    createOrLogin: string,
    setCreateOrLogin: React.Dispatch<SetStateAction<string>>,
    tagColor: string,
    setTagColor: React.Dispatch<SetStateAction<string>>,
    url: string,
    setUrl: React.Dispatch<SetStateAction<string>>,
}

export const FormEditContext = createContext<FormEditContextType>(null!)

export const FormEditProvider = ({children}: {children: JSX.Element}) => {
    
    const [createOrLogin, setCreateOrLogin] = useState('');

    const [tagColor, setTagColor] = useState('');

    const [url, setUrl] = useState('');

    return (
        <FormEditContext.Provider value={{createOrLogin, setCreateOrLogin, tagColor, setTagColor, url, setUrl}}>
            {children}
        </FormEditContext.Provider>
    )
}