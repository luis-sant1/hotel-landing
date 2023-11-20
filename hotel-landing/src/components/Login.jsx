import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form'
import {  useAuth } from "../components/context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Iniciarsesion({ toPage, setPage }) {
    const navigate = useNavigate()
    const { signin, error, isAuthenticated } = useAuth()
    const { register, handleSubmit, formState: {
        errors                                                  // Errores del formState
    } } = useForm();

    const onSubmit = handleSubmit(
        async (user) => {
            await signin(user)
        }
    )

    return (
        <div className='h-full '>
            <div className="mr-auto ml-auto w-11/12 md:w-7/12 lg:w-3/12 ">
                <form className="grid grid-cols-1 justify-center h-full " onSubmit={
                    onSubmit
                }>
                    <div className="pt-24">
                        <h1 className="text-center font-light text-3xl md:text-4xl">Inicia Sesión de Administrador</h1>
                    </div>

                    <label htmlFor="" id="email" className="font-light pt-10 "><b>Correo Electronico</b></label>
                    <input
                        type="text"
                        {...register('email', { required: true, minLength: 4, maxLength: 90, pattern: /^\S+@\S+\.\S+$/ })}
                        className="font-light w-full border border-solid border-black grid h-10 p-2"
                        id="email"
                    />
                    {
                        errors.email && (

                            <div className="flex flex-nowrap mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                                <p className="text-red-500 mx-1">
                                    Correo inválido.
                                </p>
                            </div>
                        )
                    }

                    <label htmlFor="" id="password" className=" font-light pt-2"><b>Contraseña</b></label>
                    <input
                        type="password"
                        {...register('password', { required: true, minLength: 4, maxLength: 90, pattern: /^.{6,24}$/ })}
                        className="font-light w-full border border-solid border-black grid h-10 p-2"
                        id="password"
                    />
                    {
                        errors.password && (
                            <div className="flex flex-nowrap mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                                <p className="text-red-500 mx-1">
                                    Contraseña demasiado corta.
                                </p>
                            </div>

                        )
                    }

                    {
                        error != undefined ? error && <div className='w-98 p-4 my-2 text-sm text-white bg-red-500 text-center rounded-lg justify-center' >{error}</div> : <div className='w-98 p-4 my-2 text-sm text-white bg-red-500 text-center rounded-lg justify-center' >Datos invalidos</div>

                    }

                    <div className='pt-10 grid justify-items-center mb-4'>
                        <button type="submit" className="font-light bg-yellow-800 w-32 h-10 text-white text-2xl">
                            Iniciar Sesión
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

