export default function Info() {
    return(
        <div className="bg-neutral-200 w-full h-full pt-20 pb-10 md:flex" id="info">
            <div className="w-11/12 mr-auto ml-auto" >
                <div><h1 className="text-5xl font-light md:text-6xl lg:pl-5 lg:text-6xl"  >Acerca de nosotros</h1></div>
                <div className="pt-12 md:flex ">
                    <div className="border-b border-bottom-width: 1px; border-black border-solid pl-5 md:w-1/2 md:border-b-0 md:border-r md:pt-10 md:pr-10 lg:pl-14">
                        <p className="text-lg font-light pb-5 lg:text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, sunt repellendus? Nisi et molestias fugiat alias beatae voluptatem officiis facilis autem quam explicabo quo ratione asperiores unde ad, itaque aspernatur quas maiores odio rem excepturi aliquid? Quo ex maxime id.</p>
                        <p className="text-lg font-light pb-7 lg:text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo nesciunt quia qui tempora voluptatem, porro voluptate voluptatum saepe incidunt enim aut nulla quibusdam eum praesentium?</p>
                    </div>
                    <div className="pt-7 md:w-1/2 md:pt-10 md:pl-10 lg:pl-14">
                        <h1 className="text-3xl font-light pb-5 pl-5 lg:text-4xl">Horarios</h1>
                        <ul className="list-disc pl-16">
                            <li className="font-light text-lg lg:text-xl">Check-in: 1PM</li>
                            <li className="font-light text-lg lg:text-xl">Check-in: 12PM</li>
                            <li className="font-light text-lg lg:text-xl">Piscina: 10AM-10PM</li>
                            <li className="font-light text-lg lg:text-xl">Restaurant: 8AM-11PM</li>
                            <li className="font-light text-lg lg:text-xl">Barra de bebidas: 8AM-11PM</li>
                        </ul>
                        <h1 className="text-3xl font-light pb-5 pt-5 pl-5 lg:text-4xl">Contáctanos</h1>
                        <ul className="list-disc pl-16">
                            <li className="font-light text-lg lg:text-xl">Número de teléfono: 0418-4567-890</li>
                            <li className="font-light text-lg lg:text-xl">Instagram: @prubiam1_hotelsuits</li>
                            <li className="font-light text-lg lg:text-xl">Correo electrónico: perubiamhotelsuits@gmail.com</li>
                            <li className="font-light text-lg lg:text-xl">Subreddit: /perubiam1</li>
                        </ul>
                    </div>
                </div>
            </div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
            </style>
        </div>
    )
}