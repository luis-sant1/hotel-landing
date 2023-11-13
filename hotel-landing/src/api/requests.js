import axios from "axios";

const create = import.meta.env.VITE_FETCH_RESERVATION

export const formReq = reservation =>  axios.post(create, reservation) // Función que recibe el url y la reservación.