import { SetStateAction, createContext, useState } from "react";

type PixType = {

    qrCode: string,
    valor: string,
    copiaECola: string,
    expiracao: string,
    setQrCode: React.Dispatch<SetStateAction<string>>,
    setValor:  React.Dispatch<SetStateAction<string>>,
    setCopiaECola: React.Dispatch<SetStateAction<string>>,
    setExpiracao: React.Dispatch<SetStateAction<string>>,
}

export const PixContext = createContext<PixType>(null!);

export const PixProvider = ({children}: {children: JSX.Element}) => {
    
    const [qrCode, setQrCode] = useState('');
    const [valor, setValor] = useState('');
    const [copiaECola, setCopiaECola] = useState('');
    const [expiracao, setExpiracao] = useState('');
    
    return(
        <PixContext.Provider value={{
            qrCode,
            valor,
            copiaECola,
            expiracao,
            setQrCode,
            setValor,
            setCopiaECola,
            setExpiracao
        }} >
            {children}
        </PixContext.Provider>
    )


}