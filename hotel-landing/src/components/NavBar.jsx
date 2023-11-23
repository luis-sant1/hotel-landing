import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "./context/AuthContext";
export default function NavBar() {
    
    const { setShow, show,rooms } = useAuth()
    const navigate = useNavigate();
    const toReservation = () => {
        navigate('/reservation-form')
        setShow(false)
    }

    const toHome = () => {
        navigate('/')
        setShow(true)
    }


    const [theme, setTheme] = useState(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          return "dark";
        }
    
        return "light";
      });
    
      useEffect(() => {
        if (theme === "dark") {
          document.querySelector("html").classList.add("dark");
        } else {
          document.querySelector("html").classList.remove("dark");
        }
      }, [theme]);
    
      const handleChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
      };


    const handleOption = (e) => {
        console.log(e.target)
        setShow(false)
        navigate(`/rooms-views/${e.target.value}`)
        
    }

    return (
        <div className="w-full h-14 bg-[rgba(230,230,230,1)] flex fixed z-10 dark:bg-gray-900 dark:text-white text-black">
            <div className="grid justify-self-start pl-8 pt-3 pb-3  ">
                <button
                    onClick={toHome}
                    className="font-light text-2xl">Perubiam.</button>
            </div>

            <div className="flex w-full justify-end pr-8 font-light text-2xl">
                {
                    show && (
                        <>
                            <Link to='#info' className="hidden md:flex p-3 font-light text-2xl">Acerca de</Link>
                            <Link to='#rooms' className="hidden md:flex p-3 font-light text-2xl">Habitaciones</Link>

                            <form action="" className="hidden md:flex md:pt-1 h-12 bg-[rgba(230,230,230,1)] dark:bg-gray-900 dark:text-black">">
                                <select   onChange={handleOption} name="" id="" className="font-light text-xl">
                                    <option className="font-light">Disponibles</option>
                                    {
                                        rooms?.map((x, i) => {
                                            return (
                                                <option key={i} value={x._id} className="font-light">
                                                    {x.title}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </form>
 <div className="hidden md:flex dark:bg-gray-900">
                                <button
                                className="bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 dark:bg-gray-900 dark:text-white dark:hover:bg-slate-900"
                                onClick={handleChangeTheme}
                                >
                                Cambiar Tema
                                </button>
                            </div>
                            <Link to='#beachs' className="hidden md:flex p-3 font-light text-2xl">Playas</Link>

                        </>
                    )
                }
                <div className="pt-2 pl-5">
                    <button
                        onClick={toReservation}
                        className='font-light bg-yellow-800 w-32 h-10 text-white text-2xl'>Reserva</button>
                </div>
            </div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
            </style>
        </div>

    )
}