import Cookies from 'js-cookie'
import { createContext, useContext, useState, useEffect } from "react";
import { logout, allRooms } from "../../api/requests";
import { login, verify } from '../../api/reqCredentials';
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
    const [isAuthenticated, setIsAuthenticated] = useState(null)
    const [error, setError] = useState("")
    const [rooms, setRooms] = useState([])
    const [loadData, setLoadData] = useState(null)
    const signin = async (user) => {
        try {
            console.log(user)
            const res = await login(user)
            console.log(res)
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
            const res = await logout()
            Cookies.remove('token');
            Cookies.remove('rol');
            console.log(res)
            setIsAuthenticated(false)
            window.location.href = "/*"
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {                                                   // TIMER PARA LIMPIAR LOS ERRORES
        if (error != "") {
            const timer = setTimeout(() => {
                setError("")
            }, 5000);
            return () => clearTimeout(timer)                           // Eliminamos después de ejecutar (evita consumo extra de recursos)
        }
    }, [error])
    useEffect(() => {
        const validate = async () => {
            const cookies = Cookies.get()
            // console.log(cookies.token)                                // Revisamos si tenemos cookies
            if (!cookies.token) {
                setAdminAuth(false)                                                                      // Si no hay token
                setIsAuthenticated(false)
                setUser(null)
                return;
            }
            // si existe token en las cookies
            try {
                const res = await verify(cookies.token);             // lo verificamos
                console.log(res)
                if (!res.data) setIsAuthenticated(false)                        // De no serverificado
                if (cookies.rol == "admin") setAdminAuth(true)

                setIsAuthenticated(true);                                       // SI pasa el test del backend..
                setUser(res.data);

            } catch (error) {
                console.log(error)
                setIsAuthenticated(false)                                       // si ocurre un error.
                setUser(null)
            }

        }
        validate(); // EJECUTA
    }, []);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const res = await allRooms()
                if (res.data.rooms.length > 0) {
                    setRooms(res.data.rooms)
                } else {
                    const defaultRoom = [{
                        title: "Dafault",
                        description: "Dafault description",
                        price: 123,
                        imagen: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kayak.com.mx%2Fnews%2Ftipo-de-hoteles-por-estrellas%2F&psig=AOvVaw2LZByP3Kta9_RS_B47QnkU&ust=1718640932929000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPCo3tvc4IYDFQAAAAAdAAAAABAE",
                        review:"",
                        promo: "",
                        modcon: "",
                        modcon1: "",
                        modcon2: "",
                        modcon3: "",
                    }];
                    setRooms(defaultRoom);
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchRooms();
    }, [])
    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const res = await allRooms()
                console.log(res.data.rooms.length)
                if (res.data.rooms.length > 0) {
                    setRooms(res.data.rooms)
                }
            } catch (error) {
                const defaultRoom = [{
                    title: "Dafault",
                    description: "Dafault description",
                    price: "123",
                    imagen: {
                        secure_url: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg"
                    },
                    review:"",
                    promo: "",
                    modcon: "",
                    modcon1: "",
                    modcon2: "",
                    modcon3: "",
                },
                {
                    title: "Dafault",
                    description: "Dafault description",
                    price: "123",
                    imagen: {
                        secure_url: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg"
                    },
                    review:"",
                    promo: "",
                    modcon: "",
                    modcon1: "",
                    modcon2: "",
                    modcon3: "",
                },
                {
                    title: "Dafault",
                    description: "Dafault description",
                    price: "123",
                    imagen: {
                        secure_url: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg"
                    },
                    review:"",
                    promo: "",
                    modcon: "",
                    modcon1: "",
                    modcon2: "",
                    modcon3: "",
                }];
                setRooms(defaultRoom);
                console.log(error)
            }
            
        }
        fetchRooms();
    }, [loadData])
    return (
        <AuthContext.Provider value={{ //Export 
            setShow,
            show,
            signin,
            LogOut,
            isAuthenticated,
            adminAuth,
            setUser,
            error,
            rooms,
            setLoadData
        }}>
            {children}
        </AuthContext.Provider>
    )
}