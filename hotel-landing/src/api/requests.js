import axios from "axios";

const create = import.meta.env.VITE_FETCH_RESERVATION
const comment = import.meta.env.VITE_FETCH_COMMENTS
const currentClima = import.meta.env.VITE_FETCH_CURRENT
const iconURL = import.meta.env.VITE_FETCH_ICON
const loginUrl = import.meta.env.VITE_FETCH_LOGIN
const logoutUrl = import.meta.env.VITE_FETCH_LOGOUT

export const formReq = reservation =>  axios.post(create, reservation) // Función que recibe el url y la reservación.
export const comments = () => axios.get(comment)
export const current = () => axios.get(currentClima)
export const iconImg = (icon) => axios.get( iconURL + icon +'@2x.png')
export const login = (user) => axios.post(loginUrl, user)