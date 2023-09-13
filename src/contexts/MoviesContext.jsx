/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useReducer } from 'react'

const MoviesContext = createContext()
const KEY = '61d162be'

const initialState = {
  movies: [],
  isLoading: false,
  currentMovie: {},
  error: ''
}

function reducer (state, action) {
  switch (action.type) {
    case 'loading':
      return { ...state, isLoading: true }

    case 'movies/loaded':
      return {
        ...state,
        isLoading: false,
        movies: action.payload
      }

    default:
      return state
  }
}


function MoviesProvider ({ children }) {
  const [{ movies, isLoading, currentMovie }, dispatch] = useReducer(
    reducer,
    initialState
  )

  useEffect(function () {
    async function fetchMovies () {
      dispatch({ type: 'loading' })
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?page=10&s=take&apikey=${KEY}`
        )
        const data = await res.json()
        dispatch({ type: 'movies/loaded', payload: data.Search })
      } catch (error) {
        console.log(error)
      }
    }

    fetchMovies()
  }, [])




  return (
    <MoviesContext.Provider value={{ movies, isLoading, currentMovie }}>
      {children}
    </MoviesContext.Provider>
  )
}

function useMovies () {
  const context = useContext(MoviesContext)
  if (context === undefined) {
    throw new Error('MoviesContext was used outside the MoviesProvider')
  }
  return context
}

export { MoviesProvider, useMovies }
