import {useForm} from  'react-hook-form'
export default function Formulario () {
    return ( 
        <form className='bg-red-500'>
            <label htmlFor="">Nombre</label>
            <input type="text" className='w-10 pr-10' />
            <label htmlFor="">Primer Apellido</label>
            <input type="text" />
            <label htmlFor="">Correo Electronico</label>
            <input type="text" />
            <label htmlFor="">Fecha de entrada</label>
            <input type="date" />
            <label htmlFor="">Fecha de salida</label>
            <input type="date" />
            <label htmlFor="">Número de teléfono</label>
            <input type="text" />
            <label htmlFor="">Dirección</label>
            <input type="text" />
            <label htmlFor="">Fecha de salida</label>
            <select name="" id="">
                <option value="">Habitación 1</option>
                <option value="">Habitación 2</option>
                <option value="">Habitación 3</option>
            </select>
        </form>
    )
}