import { Link } from "react-router-dom"
import { current, iconImg } from '../api/requests'
import { useEffect, useState } from "react"
export default function CurrentClimate() {
    const [data, setData] = useState([])
    useEffect(() => {
        current().then(res => {
            setData(res.data)
        })
    }, [])
    return (
        <div className="m-7 relative text-white h-[85%] grid grid-cols-2 grid-rows-1 gap-0 bg-brown justify-items-center relative ">
            <h1 className="text-3xl font-bold bg-brown h-min absolute mt-4">CLIMA ACTUAL</h1>
            <div className="inset-x-0 inset-y-0 m-auto text-center">
                
                <h1 className="text-5xl font-bold bg-brown h-full col-start-1 col-end-2">{data?.main?.temp}°</h1>
                <h2 className="text-3xl">{data?.weather?.[0]?.main}</h2>
                <p className="text-xs">{data?.weather?.[0]?.description}</p>
            </div>
            <div className="inset-x-0 inset-y-0 m-auto">
               <img src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`} alt="" 
               className="w-full"/>
            </div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
            </style>
        </div>
    )
} 