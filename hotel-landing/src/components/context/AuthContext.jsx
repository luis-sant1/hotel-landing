import { createContext, useContext, useState} from "react";

export const AuthContext = createContext();
export const useAuth = () => {                           // Usa el contexto 
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth needs a context")
    }
    return context;
}


export const AuthProvider = ({ children }) => {
    const [show, setShow] = useState(true)
    return (
        <AuthContext.Provider value={{ //Export 
            setShow,
            show
        }}>
            {children}
        </AuthContext.Provider>
    )
}