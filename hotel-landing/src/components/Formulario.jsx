import {useForm} from  'react-hook-form'
export default function Formulario () {
    return ( 
        <form>
            <label htmlFor="">Nombre</label>
            <input type="text" />
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