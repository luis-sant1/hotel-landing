import { useNavigate } from "react-router-dom"
export default function RoomsButtons(props) {
    const navigate = useNavigate()
    const handleEdit = () => {
        navigate( `/edit-rooms/${props.id}`)
    }
    return(
        <div className="pt-20 pb-5">
            <p className="font-light text-3xl text-center pb-5 mb:text-4xl">Editar o eliminar esta habitación</p>
            <div className="flex justify-center">
                <div className='pt-5 grid justify-items-center mb-4 pr-1 md:pr-0 md:w-1/6'>
                    <button onClick={handleEdit}type="" className='font-light bg-yellow-800 w-32 h-10 text-white text-2xl'>Editar</button>
                </div>
                <div className='pt-5 grid justify-items-center mb-4 pl-1 md:pl-0 md:w-1/6'>
                    <button type="" className='font-light bg-yellow-800 w-32 h-10 text-white text-2xl'>Eliminar</button>
                </div>
            </div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
            </style>
        </div>
    )
}