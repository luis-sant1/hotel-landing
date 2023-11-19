import { createContext, useContext, useState, useEffect} from "react";
import { login } from "../../api/requests";

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
    const [user, setUser] = useState(null)
    const [adminAuth, setAdminAuth] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false) 
    const [error, setError] = useState("")

    const signin = async (user) => {
        try {
            console.log(user)
            const res = await login(user)
            const userRole = res.data.user.user.role[0].toString()
            console.log(userRole)
            if (userRole === 'admin') {
                setUser(res.data);
                setIsAuthenticated(true);
                return setAdminAuth(true)
            };

            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error.response.data.error)
             setError(error.response.data.error)
        }
    }
    const LogOut = async () => {
        try {
            const res = await axios.post(logout)
            console.log(res)
            setIsAuthenticated(false)
            window.location.href = "home"
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const validate = async (user) => {
            const cookies = Cookies.get()                                   // Revisamos si tenemos cookies
            if (!cookies.token) {
                setAdminAuth(false)                                                                      // Si no hay token
                setIsAuthenticated(false)
                setUser(null)
                return;
            }
            // si existe token en las cookies
            try {
                const res = await axios.get(verify, cookies.token);             // lo verificamos
                console.log(res)
                if (!res.data) setIsAuthenticated(false)                        // De no serverificado
                if (cookies.rol == "admin") setAdminAuth(true)                        

                setIsAuthenticated(true);                                       // SI pasa el test del backend..
                setUser(res.data);

            } catch (error) {
                setIsAuthenticated(false)                                       // si ocurre un error.
                setUser(null)
            }

        }
        validate(); // EJECUTA
    }, [])

    useEffect(() => {                                                   // TIMER PARA LIMPIAR LOS ERRORES
        if (error != "") {
            const timer = setTimeout(() => {
                setError("")
            }, 5000);
            return () => clearTimeout(timer)                           // Eliminamos después de ejecutar (evita consumo extra de recursos)
        }
    }, [error])
    return (
        <AuthContext.Provider value={{ //Export 
            setShow,
            show,
            signin,
            isAuthenticated,
            adminAuth,
            setUser, 
            error   
        }}>
            {children}
        </AuthContext.Provider>
    )
}