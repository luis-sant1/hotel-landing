// Este componente es para editar las habitaciones que salen en el landing, aun falta llamar a la data de la base de datos para que esta parte se auto rellene, deje los errores y las validaciones del formulario validadas por si las necesitas mas adelante, pero si no las nacesitas las borro y listo.
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { editRoom } from '../api/requests'
export default function EditRooms() {
    const {id} = useParams()
    console.log(id)
    const { register, handleSubmit } = useForm()
    const onSubmit = handleSubmit(async (values) => {
        const formData = new FormData();
        formData.append("imagen", values.imagen[0]);
        formData.append("title", values.title);
        formData.append("description", values.description);
        formData.append("price", values.price);
        formData.append("promo", values.promo);
        formData.append("modcon", values.modcon);
        formData.append("modcon1", values.modcon1);
        formData.append("modcon2", values.modcon2);
        formData.append("modcon3", values.modcon3);
        values = { ...values, imagen: values.imagen[0]};

        try {
            const res = await editRoom(id, formData)
            console.log(res)
        } catch (error) {
            return console.log(error)
        }
    })
    
    return (

        <div className='h-full '>
            <div className='mr-auto ml-auto w-11/12 md:w-7/12 lg:w-3/12 '>
                <form  className='grid grid-cols-1 justify-center h-full ' onSubmit={onSubmit}>
                    <label htmlFor="" className='font-light pt-10 mt-[40px]'>title de la habitación</label>
                    <div className='pt-1'>
                        <input type="text"
                            // {...register('titel', { required: true, minLength: 4, maxLength: 90, pattern: /^[a-zA-ZÀ-ÿ\s]{4,90}$/ })}
                            className='font-light w-full border border-solid border-black grid h-10 p-2'
                            // name= "title"
                            // onChange = {handleChange}
                            // value={data.title}
                            {...register('title', { required: true })} />

                    </div>
                    {/* {
                        errors.title && (
                            <div className='flex flex-nowrap mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                                <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                            </div>
                        )
                    } */}
                    <label htmlFor="" className='font-light pt-2'>Oferta especial de la habitación</label>
                    <div className='pt-1'>
                        <input type="text"
                            // {...register('promo', { required: true, minLength: 4, maxLength: 90, pattern: /^[a-zA-ZÀ-ÿ\s]{4,90}$/ })}
                            className='font-light w-full border border-solid border-black grid h-10 p-2'
                            // name= "promo"
                            // onChange = {handleChange}
                            // value={data.promo} 
                            {...register('promo', { required: true })} />
                        {/* {
                            errors.promo && (
                                <div className='flex flex-nowrap mt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                    </svg>
                                    <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                                </div>
                            )
                        } */}
                    </div>

                    <label htmlFor="" className='font-light pt-2'>Descripción</label>
                    <div className='pt-1'>
                        <input type="text"
                            // {...register('description', { required: true, minLength: 4, maxLength: 90, pattern: /^[a-zA-ZÀ-ÿ\s]{4,90}$/ })}
                            className='font-light w-full border border-solid border-black grid h-10 p-2'
                            // name= "description"
                            // onChange = {handleChange}
                            // value={data.description}
                            {...register('description', { required: true })} />
                        {/* {
                            errors.description && (
                                <div className='flex flex-nowrap mt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                    </svg>
                                    <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                                </div>
                            )
                        } */}
                    </div>

                    <label htmlFor="" className='font-light pt-2'>price</label>
                    <div className='pt-1'>
                        <input type="text"
                            // {...register('price', { required: true, minLength: 2, maxLength: 4, })}
                            className='font-light w-full border border-solid border-black grid h-10 p-2'
                            // name= "price"
                            // onChange = {handleChange}
                            // value={data.price}
                            {...register('price', { required: true })} />
                    </div>
                    {/* {
                        errors.price && (
                            <div className='flex flex-nowrap mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                                <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                            </div>
                        )
                    } */}

                    <label htmlFor="" className='font-light pt-2'>Comodidad 1</label>
                    <div className='pt-1'>
                        <input type="text"
                            // {...register('modcons', { required: true, minLength: 4, maxLength: 90, pattern: /^[a-zA-ZÀ-ÿ\s]{4,90}$/ })}
                            className='font-light w-full border border-solid border-black grid h-10 p-2'
                            // name= "modcons"
                            // onChange = {handleChange}
                            // value={data.modcons}
                            {...register('modcon1', { required: true })} />
                        {/* {
                            errors.modcons && (
                                <div className='flex flex-nowrap mt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                    </svg>
                                    <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                                </div>
                            )
                        } */}
                    </div>

                    <label htmlFor="" className='font-light pt-2'>Comodidad 2</label>
                    <div className='pt-1'>
                        <input type="text"
                            // {...register('modcons', { required: true, minLength: 4, maxLength: 90, pattern: /^[a-zA-ZÀ-ÿ\s]{4,90}$/ })}
                            className='font-light w-full border border-solid border-black grid h-10 p-2'
                            // name= "modcons"
                            // onChange = {handleChange}
                            // value={data.modcons}
                            {...register('modcon2', { required: true })} />
                        {/* {
                            errors.modcons && (
                                <div className='flex flex-nowrap mt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                    </svg>
                                    <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                                </div>
                            )
                        } */}
                    </div>

                    <label htmlFor="" className='font-light pt-2'>Comodidad 3</label>
                    <div className='pt-1'>
                        <input type="text"
                            // {...register('modcons', { required: true, minLength: 4, maxLength: 90, pattern: /^[a-zA-ZÀ-ÿ\s]{4,90}$/ })}
                            className='font-light w-full border border-solid border-black grid h-10 p-2'
                            // name= "modcons"
                            // onChange = {handleChange}
                            // value={data.modcons}
                            {...register('modcon3', { required: true })} />
                        {/* {
                            errors.modcons && (
                                <div className='flex flex-nowrap mt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                    </svg>
                                    <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                                </div>
                            )
                        } */}
                    </div>

                    <label htmlFor="" className='font-light pt-2'>Comodidad 4</label>
                    <div className='pt-1'>
                        <input type="text"
                            // {...register('modcons', { required: true, minLength: 4, maxLength: 90, pattern: /^[a-zA-ZÀ-ÿ\s]{4,90}$/ })}
                            className='font-light w-full border border-solid border-black grid h-10 p-2'
                            // name= "modcons"
                            // onChange = {handleChange}
                            // value={data.modcons}
                            {...register('modcon', { required: true })} />
                        {/* {
                            errors.modcons && (
                                <div className='flex flex-nowrap mt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                    </svg>
                                    <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                                </div>
                            )
                        } */}
                    </div>


                    <label htmlFor="" className='font-light pt-2'>Imagen de la habitación</label>
                    <div className="pt-2">
                        <input type="file" className="fo
                    nt-light"
                            // name= "modcons"
                            // onChange = {handleImg}
                            // value={data.imagen}
                            id='imagen'
                            {...register('imagen')}
                        />
                    </div>

                    <div className='pt-5 grid justify-items-center mb-4'>
                        <button type="submit" className='font-light bg-yellow-800 w-32 h-10 text-white text-2xl'>Editar</button>
                    </div>
                </form>
            </div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
            </style>
        </div>
    )
}