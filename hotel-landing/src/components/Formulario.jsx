import {useForm} from  'react-hook-form'

export default function Formulario () {
    return ( 
        
        <div className='h-full'>
        <div className='mr-auto ml-auto w-11/12 md:w-7/12 lg:w-3/12'>
            <form className='grid grid-cols-1 justify-center h-full'>
                <label htmlFor="" className='font-light pt-10'>Nombre</label>
                <div className='pt-1'>
                <input type="text"  className='font-light w-full border border-solid border-black grid h-10 p-2'/>
                </div>
                
                <label htmlFor="" className='font-light pt-2'>Primer Apellido</label>
                <div className='pt-1'>
                    <input type="text" className='font-light w-full border border-solid border-black grid h-10 p-2'/>
                </div>
                <label htmlFor="" className='font-light pt-2'>Correo Electronico</label>
                <div className='pt-1'>
                    <input type="text" className='font-light w-full border border-solid border-black grid h-10 p-2'/>
                </div>
                <div className='pt-1'>
                    <div className='grid grid-cols-2 pt-1 '>
                        <label htmlFor="" className='font-light'>Fecha de entrada</label>
                        <label htmlFor="" className='font-light'>Fecha de salida</label>
                    </div>
                    
                    <div className='grid grid-cols-2 '>
                        <input type="date" className='font-light h-10 w-8/12 border border-solid border-black p-2'/>
                        <input type="date" className='font-light h-10 w-8/12 border border-solid border-black p-2'/>
                    </div>
                    
                </div>
                

                <label htmlFor="" className='font-light pt-2'>Número de teléfono</label>
                <div className='pt-1'>
                    <input type="text" className='font-light w-full border border-solid border-black grid h-10 p-2'/>
                </div>
                
                <label htmlFor="" className='font-light pt-2'>Dirección</label>
                <div className='pt-1'>
                    <input type="text" className='font-light w-full border border-solid border-black grid h-10 p-2'/>
                </div>
                
                <label htmlFor="" className='font-light pt-2'>Habitación</label>
                <div className='pt-1'>
                    <select name="" id="" className='font-light h-10 w-full border border-solid border-black p-2'>
                        <option value="" className='font-light'>Habitación 1</option>
                        <option value="" className='font-light'>Habitación 2</option>
                        <option value="" className='font-light'>Habitación 3</option>
                    </select>
                </div>
                <div className='flex pt-4'>
                    <input type="checkbox" className='h-5 w-5'/>
                    <div className=''>
                        <label htmlFor="" className='font-light pl-2'>
                            Acepto los terminos y condiciones
                        </label>
                    </div>
                </div>
                <div className='pt-3 grid justify-items-center pb-4'>
                    <button className='font-light bg-yellow-800 w-32 h-10 text-white text-2xl'>Reserva</button>
                </div>
            </form>
        </div>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
        </style>
        </div>
    )
}