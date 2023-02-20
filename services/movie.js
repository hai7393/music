import axios from 'axios';
const baseURL = 'https://api.themoviedb.org/3'
export const api = {
    call:() =>{
        return axios.create({
            baseURL,
            params:{
                api_key:'97fec3b200e130af67f0875b4fb27618',
                page : 1,
            }
        })

    }
}