import MovieItem from './MovieItem'
import Spinner from '../../ui/Spinner'
import { useMovies } from '../../contexts/MoviesContext'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 5rem;
  row-gap: 10em;
  height: 100%;
  cursor: pointer;
`
export default function MoviesList () {
  const { isLoading, movies } = useMovies()

  if (isLoading) return <Spinner />
  return (
    <Container>
      {movies.map(movie => <MovieItem key={movie.rank} movie={movie} />)}
    </Container>
  )
}
