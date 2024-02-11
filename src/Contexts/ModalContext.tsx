import React, { SetStateAction, createContext, useState } from "react";

type ModalType = {

    modalShow: boolean,
    setModalShow: React.Dispatch<SetStateAction<boolean>>,

}

export const ModalContext = createContext<ModalType>(null!);

export const ModalProvider = ({children}: {children: JSX.Element}) => {

    const [modalShow, setModalShow] = useState(false);

    return (

        <ModalContext.Provider value={{modalShow, setModalShow}}>
            {children}
        </ModalContext.Provider>

    );

}