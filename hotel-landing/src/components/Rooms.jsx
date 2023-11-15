import { Link } from "react-router-dom";

export default function Rooms (){
    return(
        <div className="m-0 w-full h-full group  flex text-center ">
            <img 
            className="h-[80vh] group-hover:blur-[2px] relative"
            src="https://thehoughtonhotel.com/wp-content/uploads/2023/04/LUXURY-APART-HOTEL-STUDIO-600x600.jpg" alt="" />
            <div className="absolute z-10 hidden group-hover:block m-auto left-0 right-0  top-[40%] text-white " >
                <h2 className="text-xl font-light">Habitación para 6 personas</h2>
                <Link to='#'
                className=""><span className="text-lg relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">Ver mas</span></Link>
                <p className="font-light">¡El mejor lugar para vacacionar! <span className="font-bold">10%</span> de descuento.</p>
            </div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
            </style>
        </div>
    )
}