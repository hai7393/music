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
    getMovieDetail({
        movieId,
        ...restParam
    } = {}) {
        return api.call().get(`/movie/${movieId}`, {
            params: {
                ...restParam
            }
        })
    },
    getVideoDetail({
        movieId,
        ...restParam
    } = {}) {
        return api.call().get(`/movie/${movieId}/videos`, {
            params: {
                ...restParam
            }
        })
    },
    
}
export default MovieService