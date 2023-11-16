import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "./context/AuthContext";
export default function NavBar() {
    const {setShow, show} = useAuth()
    const navigate = useNavigate();
    const toReservation = () => {
        navigate('/reservation-form')
        setShow(false)
    }

    const toHome = () => {
        navigate('/')
        setShow(true)
    }

    return (
        <div className="w-full h-14 bg-[rgba(230,230,230,1)] flex fixed z-10">
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