import { createContext, useState } from "react";

//Crea contexto
export const UserContext = createContext();

export const UserProvider = ({children}) => {
    //Estado que almacena el token (inicialmente true para simular quye está logueado)
    const [token, setToken] = useState(true);


    //Método para cerrar sesión
    const logout = () => {
        setToken(false);
    };

    return (
        <UserContext.Provider value={{token, logout}}>
            {children}
        </UserContext.Provider>
    );
}