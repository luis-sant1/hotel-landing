import axios from "axios";

const create = import.meta.env.VITE_FETCH_RESERVATION
const comment = import.meta.env.VITE_FETCH_COMMENTS

export const formReq = reservation =>  axios.post(create, reservation) // Función que recibe el url y la reservación.
export const comments = () => axios.get(comment)