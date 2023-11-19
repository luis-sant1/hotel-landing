import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form'
import { AuthContext, useAuth } from "../components/context/AuthContext";

export default function Iniciarsesion({toPage, setPage}) {
    const { signin, error, isAuthenticated } = useAuth()
    const { register, handleSubmit, formState: {
        errors                                                  // Errores del formState
    } } = useForm();
    const onSubmit = handleSubmit(
        (user) => {
            signin(user)
        }
    )
 
    useEffect(() => {
        if (isAuthenticated) {
            setPage("home")
            toPage()
        }                                                            // Redireccionamos al usuario si isAuthenticated = true

    }, [isAuthenticated])
    
    return (
        <div className="">
            <form className="pt-[250px]" onSubmit={
                onSubmit
            }>
                <div className="">
                    <h1 className="">Inicia Sesión</h1>
                </div>

                <label htmlFor="" id="email" className="pl-1.5"><b>Correo Electronico</b></label>
                <input
                    type="text"
                    {...register('email', { required: true, minLength: 4, maxLength: 90, pattern: /^\S+@\S+\.\S+$/ })}
                    className="h-11 col-span-2 mb-4 p-1 border-gray-300 border-2 bg-slate-100 rounded-2xl ..."
                    id="email"
                />
                {
                    errors.email && (
                        <p className="text-sm pb-3 pl-1.5 w-72 ...">
                            Correo inválido.
                        </p>
                    )
                }

                <label htmlFor="" id="password" className=" pl-1.5"><b>Contraseña</b></label>
                <input
                    type="password"
                    {...register('password', { required: true, minLength: 4, maxLength: 90, pattern: /^.{6,24}$/ })}
                    className=""
                    id="password"
                />
                {
                    errors.password && (
                        <p className="text-sm pb-3 pl-1.5 w-72 ...">
                            Contraseña demasiado corta.
                        </p>
                    )
                }

                {
                    error != undefined ? error && <div className='w-98 p-4 my-2 text-sm text-white bg-red-500 text-center rounded-lg justify-center' >{error}</div> : <div className='w-98 p-4 my-2 text-sm text-white bg-red-500 text-center rounded-lg justify-center' >Datos invalidos</div>

                }
            

                <button type="submit" className="">
                    Iniciar Sesión
                </button>
                </form>
        </div>
    );
}

