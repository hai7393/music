import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import MovieService from '../../services'

export const fetchListMovie = createAsyncThunk(
    'users/fetchListMovie',
    async (data, thunkAPI) => {
      const response = await MovieService.getMovie(data)
      return response.data
    }
  )
  export const fetchMovieDetailById = createAsyncThunk(
    'users/fetchMovieDetailById',
    async (movieId, thunkAPI) => {
      const response = await MovieService.getMovieDetail({ movieId: movieId.id })
      return response.data
    }
  )
  export const fetchVideoDetailById = createAsyncThunk(
    'users/fetchVideoDetailById',
    async (movieId, thunkAPI) => {
      const response = await MovieService.getVideoDetail({ movieId: movieId.id })
      return response.data
    }
  )

  const movieSlice = createSlice({
    name: 'movie',
    initialState: {
      listMovie: [],
    },
    reducers: {
      incrementPage:(state)=>{
        state.page+=1
      }
    },
    extraReducers: (builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder
        .addCase(fetchListMovie.fulfilled, (state, action) => {
          return {
            ...state,
            listMovie: action.payload
          }
        })
    },
  })
  
  // Action creators are generated for each case reducer function
  export const {incrementPage} = movieSlice.actions
  
  export default movieSlice.reducer