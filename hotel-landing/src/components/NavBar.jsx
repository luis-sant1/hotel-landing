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
    console.log(rooms)
    const handleOption = (e) => {
        console.log(e.target)
        setShow(false)
        navigate(`/rooms-views/${e.target.value}`)
        
    }
    console.log(show)
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
                            <form action="" className="hidden md:flex md:pt-1 h-12 bg-[rgba(230,230,230,1)]">
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

                                    {/* <option value="3 Personas"  className="font-light">Habitación para 3</option>
                                    <option value="4 Personas"  className="font-light">Habitación para 4</option>
                                    <option value="5 Personas"  className="font-light">Habitación para 5</option>
                                    <option value="6 Personas"  className="font-light">Habitación para 6</option> */}
                                </select>
                            </form>
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