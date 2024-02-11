import { SetStateAction, createContext, useState } from "react";

type ModalPromoType = {
    show: boolean,
    setShow: React.Dispatch<SetStateAction<boolean>>,
}

export const ModalPromoContext = createContext<ModalPromoType>(null!);

export const ModalPromoProvider = ({children}: {children: JSX.Element}) => {
    
    const [show, setShow] = useState(false);

    return(
        <ModalPromoContext.Provider value={{show, setShow}}>
            {children}
        </ModalPromoContext.Provider>
    )
}