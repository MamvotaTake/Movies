import styled from 'styled-components'
import MovieImage from './MovieImage'
import MovieDescription from './MovieDescription'

const MovieDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr, 1fr);
  grid-column-gap: 10rem;
  grid-row-gap: 0px;
  grid-area: 1 / 1 / 2 / 2;
`
export default function MovieDetails () {
  return (
    <MovieDetailsContainer>
      <MovieImage />
      <MovieDescription />
    </MovieDetailsContainer>
  )
}
