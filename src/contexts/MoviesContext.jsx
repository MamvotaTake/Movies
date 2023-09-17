/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useReducer } from 'react'

const MoviesContext = createContext()
// const KEY = '61d162be'

const BASE_URL = 'http://localhost:8000'

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
      throw new Error('Unknown action type')
  }
}

function MoviesProvider ({ children }) {
  const [{ movies, isLoading, currentMovie }, dispatch] = useReducer(
    reducer,
    initialState
  )

  useEffect(function () {
    async function fetchMovies () {
      /* const url = 'https://imdb-top-100-movies.p.rapidapi.com/'
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '51432845bdmshd3167b5106e8a52p1b0f47jsn0b0c4a437346',
          'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
      } */

      dispatch({ type: 'loading' })
      try {
        const res = await fetch(`${BASE_URL}/movies`)
        const data = await res.json()
        dispatch({ type: 'movies/loaded', payload: data })
      } catch (error) {
        console.log(error)
      }
    }

    fetchMovies()
  }, [])

  /* const getMovie = useCallback(
    async function getMovie (id) {
      if (String(id) === currentMovie.id) return
      const url = `https://imdb-top-100-movies.p.rapidapi.com/${id}`
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '51432845bdmshd3167b5106e8a52p1b0f47jsn0b0c4a437346',
          'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
      }

      dispatch({ type: 'loading' })
      try {
        const response = await fetch(url, options)
        const data = await response.json()
        dispatch({ type: 'movies/loaded', payload: data })
      } catch (error) {
        console.log(error)
      }
    },
    [currentMovie.id]
  ) */

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
