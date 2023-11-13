

export default function NavBar() {
    return(
        <div className="w-full h-14 bg-neutral-200 flex">
            <div className="grid justify-self-start pl-8 pt-3">
                <p className="font-light text-2xl">Perubiam.</p>
            </div>
            
            <div className="flex w-full justify-end pr-8 font-light text-2xl">
                <a href="" className="hidden md:flex p-3 font-light text-2xl">Acerca de</a>
                <a href="" className="hidden md:flex p-3 font-light text-2xl">Habitaciones</a>
                <a href="" className="hidden md:flex p-3 font-light text-2xl">Playas</a>
                <div className="pt-2 pl-5">
                    <button className='font-light bg-yellow-800 w-32 h-10 text-white text-2xl'>Reserva</button>
                </div>
            </div>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
            </style>
            </div>
        
    )
}