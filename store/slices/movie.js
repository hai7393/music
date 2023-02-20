import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import MovieService from '../../services'

export const fetchListMovie = createAsyncThunk(
    'users/fetchListMovie',
    async (data, thunkAPI) => {
      const response = await MovieService.getMovie(data)
      return response.data
    }
  )

  const movieSlice = createSlice({
    name: 'movie',
    initialState: {
      listMovie: [],
    },
    reducers: {
      addItems: (state, action) => {
        state.items = [...state.items, ...action.payload];
      },
      setHasMore: (state, action) => {
        state.hasMore = action.payload;
      },
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
  export const {addItems,setHasMore} = movieSlice.actions
  
  export default movieSlice.reducer