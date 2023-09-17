import styled from 'styled-components'
import { MdOutlineSlowMotionVideo } from 'react-icons/md'

import Button from '../../ui/Button'
import MovieStatus from './MovieStatus'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
`

export default function MovieImage ({movie}) {
  return (
    <>
      <Container>
        <img  src={movie.image} />
        <Button size='large' variation="transparent">
          <MdOutlineSlowMotionVideo />
          <span>Trailer</span>
        </Button>
        <MovieStatus />
      </Container>
    </>
  )
}
