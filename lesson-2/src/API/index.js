import axios from "axios";



const instanse = axios({
    baseURL: 'https://kinopoiskapiunofficial.tech/',
    headers: {
        'X-API-KEY': 'ea26c2d5-f68c-4a75-81e7-5e76c39a2828',
        'Content-Type': 'application/json',
    },
})


export const getAllKinoposk = {
    getAllKino() {
        return instanse.get('api/v2.2/films').then(res => res.data)
    }
}
