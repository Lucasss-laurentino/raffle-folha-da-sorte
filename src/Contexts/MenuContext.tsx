import { createContext, useState } from "react";

type MenuType = {

    menu: boolean,
    setMenu: React.Dispatch<React.SetStateAction<boolean>>,
}

export const MenuContext = createContext<MenuType>(null!);

export const MenuProvider = ({children}: {children: JSX.Element}) => {
    

    const [menu, setMenu] = useState(false);

    return (
        <MenuContext.Provider value={{menu, setMenu}}>
            {children}
        </MenuContext.Provider>
    );
}