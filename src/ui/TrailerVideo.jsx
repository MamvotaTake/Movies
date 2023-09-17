import styled from 'styled-components'

const TrailerContainer = styled.iframe`
    background-color: none;
    width: 100rem;
    height: 50rem;
`
export default function TrailerVideo ({ movie }) {
  return (
    <div>
      {movie.trailer ? <TrailerContainer
        title={movie.title}
        autoPlay
        src={movie.trailer}
      /> : <p>No trailer</p>}
    </div>
  )
}
