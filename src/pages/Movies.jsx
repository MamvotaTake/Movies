import { useMovies } from '../contexts/MoviesContext'

export default function Movies () {
  const { movies } = useMovies()
  console.log(movies)
  return (
    
    <></>
  )
}
