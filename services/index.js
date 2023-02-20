import { api } from "./movie"
const MovieService = {
    getMovie({
        ...restParam
    } = {}) {
        return api.call().get('/movie/top_rated', {
            params: {
                ...restParam
            }
        })
    },
    
}
export default MovieService