import { useForm } from 'react-hook-form'
import { sendDataUrl } from '../api/requests'
import Swal from 'sweetalert2'
export default function CreateRooms() {
    const { register, handleSubmit, formState: {
        errors
    }} = useForm()
    
    const onSubmit = handleSubmit(async (values) => {
        const formData = new FormData();
        formData.append("file", values.file[0]);
        formData.append("title", values.title);
        formData.append("description", values.description);
        formData.append("price", values.price);
        formData.append("promo", values.promo);
        formData.append("modcon", values.modcon);
        formData.append("modcon1", values.modcon1);
        formData.append("modcon2", values.modcon2);
        formData.append("modcon3", values.modcon3);
        values = { ...values, file: values.file[0]};
        
        try {
            console.log(values)
            await sendDataUrl(formData);
            await Swal.fire({
                title: "Habitación creada con exito.",
                icon: "success",
                confirmButtonColor: "#9A5832"
            });
            window.location.href = '/*'
            
        } catch (error) {
            console.log(error)
            await Swal.fire({
                title: "Ha ocurrido un error al crear la habitación.",
                icon: "error",
                confirmButtonColor: "#9A5832"
            });
        }
    })

   

    return (

        <div className='h-full dark:bg-gray-800 pb-5 bg-white'>
            <div className='mr-auto ml-auto w-11/12 md:w-7/12 lg:w-3/12 '>

                <form enctype="multipart/form-data" className='grid grid-cols-1 justify-center h-full ' method="post" onSubmit={onSubmit}>
                    <label htmlFor=""className='font-light pt-10 mt-[40px] dark:text-white text-black'>Titulo de la habitación</label>
                    <div className='pt-1'>
                        <input type="text"
                             className='font-light w-full border border-solid border-black grid h-10 p-2 text-black' 
                            {...register('title', { required: true, minLength: 4, maxLength: 120, pattern: /^[a-zA-ZÀ-ÿ\s]{4,90}$/  })} />
                    </div>
                    {
                        errors.title && (
                            <div className='flex flex-nowrap mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                                <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                            </div>
                        )
                    }
                    <label htmlFor="" className='font-light pt-2 dark:text-white text-black'>Oferta especial de la habitación</label>
                    <div className='pt-1'>
                        <input type="text"
                             className='font-light w-full border border-solid border-black grid h-10 p-2 text-black' 
                            {...register('promo', { required: true, minLength: 4, maxLength: 200})} />

                        {
                            errors.promo && (
                                <div className='flex flex-nowrap mt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                    </svg>
                                    <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                                </div>
                            )
                        }
                    </div>


                    <label htmlFor="" className='font-light pt-2 dark:text-white text-black'>Descripción</label>
                    <div className='pt-1'>
                        <input type="text"
                            className='font-light w-full border border-solid border-black grid h-10 p-2 text-black'
                            {...register('description', {required: true, minLength: 4, maxLength: 240})} />

                        {
                            errors.description && (
                                <div className='flex flex-nowrap mt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                    </svg>
                                    <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                                </div>
                            )
                        }
                    </div>

                    <label htmlFor="" className='font-light pt-2 dark:text-white text-black'>Precio</label>
                    <div className='pt-1'>
                        <input type="text"
                           className='font-light w-full border border-solid border-black grid h-10 p-2 text-black'
                            {...register('price', {required: true, minLength: 2, maxLength: 4})} />

                    </div>
                    {
                        errors.price && (
                            <div className='flex flex-nowrap mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                                <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                            </div>
                        )
                    }

                    <label htmlFor="" className='font-light pt-2 dark:text-white text-black'>Comodidad 1</label>
                    <div className='pt-1'>
                        <input type="text"
                             className='font-light w-full border border-solid border-black grid h-10 p-2 text-black'
                            {...register('modcon1', {required: true, minLength: 4, maxLength: 90, pattern: /^[a-zA-ZÀ-ÿ\s]{4,90}$/ })} />

                        {
                            errors.modcons && (
                                <div className='flex flex-nowrap mt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                    </svg>
                                    <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                                </div>
                            )
                        }
                    </div>

                    <label htmlFor="" className='font-light pt-2 dark:text-white text-black'>Comodidad 2</label>
                    <div className='pt-1'>
                        <input type="text"

                             className='font-light w-full border border-solid border-black grid h-10 p-2 text-black'
                            {...register('modcon2', { required: true, minLength: 4, maxLength: 90})} />

                        {
                            errors.modcons && (
                                <div className='flex flex-nowrap mt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                    </svg>
                                    <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                                </div>
                            )
                        }
                    </div>

                    <label htmlFor="" className='font-light pt-2 dark:text-white text-black'>Comodidad 3</label>
                    <div className='pt-1'>
                        <input type="text"
                            className='font-light w-full border border-solid border-black grid h-10 p-2 text-black'
                            {...register('modcon3', { required: true, minLength: 4, maxLength: 90, pattern: /^[a-zA-ZÀ-ÿ\s]{4,90}$/})} />

                        {
                            errors.modcons && (
                                <div className='flex flex-nowrap mt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                    </svg>
                                    <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                                </div>
                            )
                        }
                    </div>

                    <label htmlFor="" className='font-light pt-2 dark:text-white text-black'>Comodidad 4</label>
                    <div className='pt-1'>
                        <input type="text"

                            className='font-light w-full border border-solid border-black grid h-10 p-2 text-black'
                            {...register('modcon', { required: true, minLength: 4, maxLength: 90, pattern: /^[a-zA-ZÀ-ÿ\s]{4,90}$/ })} />

                        {
                            errors.modcons && (
                                <div className='flex flex-nowrap mt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                    </svg>
                                    <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                                </div>
                            )
                        }
                    </div>


                    <label htmlFor="" className='font-light pt-2 dark:text-white text-black'>file de la habitación</label>
                    <div className="pt-2">


                        <input type="file" className="font-light dark:text-white text-black"
                            id = 'file'
                             {...register('file', {required: true}) }  
                             />
                             
                    </div>
                    {
                        errors.file && (
                            <div className='flex flex-nowrap mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-500 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                                <p className='text-red-500 mx-1'>Campo Obligatorio.</p>
                            </div>
                        )
                    }
                    <div className='pt-5 grid justify-items-center mb-4'>
                        <button type="submit" className='font-light bg-yellow-800 w-32 h-10 text-white text-2xl'>Crear</button>
                    </div>
                </form>
            </div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
            </style>
        </div>
    )
}