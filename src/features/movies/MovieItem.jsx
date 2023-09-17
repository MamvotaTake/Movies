import styled from 'styled-components'
import Button from '../../ui/Button'
// import Row from '../../ui/Row'
import { MdNetworkWifi, MdNetworkWifi1Bar, MdOutlineSlowMotionVideo } from 'react-icons/md'
// import { AiOutlineEye } from 'react-icons/ai'
import Modal from '../../ui/Modal'
import TrailerVideo from '../../ui/TrailerVideo'
import Image from '../../ui/Image'
import MovieDetails from './MovieDetails'

const Container = styled.div`
  width: 237px;
  height: 298px;
  flex-shrink: 0;
  border-radius: 20px;
  border-radius: var(--border-radius-sm);

`

const Movie = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const QuikView = styled.span`
  position: relative;
  background-color: var(--color-grey-900);
  color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  padding: 1.2rem;
  top: 50%;
  left: 30%;
  transform: translate(50%, -30%);

  &:hover{
    background-color: var(--color-grey-500);
  }
`

const FilmTileInfo = styled.div`
  position: relative;
  display: flex;
  bottom: 7.8%;
  left: 0.4%;
  border-radius: var(--border-radius-lg);
  gap: 2rem;
  justify-content: space-between;
  background-color: var(--color-grey-900);
  flex-wrap: nowrap;
  color: #c0c0c0;
  align-items: center;
  padding: 1rem 1rem;

`

const Rating = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & svg{
    background: ${props => props.$primary ? "#BF4F74" : "white"};
    color: var(--color-green-700);
  }
`

const Rank = styled.span`
  display: flex;
  width: 2rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
  background-color: var(--color-green-700);
  border-radius: var(--border-radius-lg);
`

export default function MovieItem ({ movie }) {
  return (
    <>
      <Container>
      <Movie>
        <Image size='large' src={movie?.image} alt='Ok' />
        <Modal>
          <Modal.Open opens='trailer'>
            <Button size='large'>
              <MdOutlineSlowMotionVideo />
              <span>Trailer</span>
            </Button>
          </Modal.Open>
          <Modal.Window name='trailer'>
            <TrailerVideo movie={ movie } />
          </Modal.Window>
        </Modal>
        </Movie>
        <Modal>
          <Modal.Open opens='trailer'>
            <QuikView>
              Quick View
            </QuikView>
          </Modal.Open>
          <Modal.Window name='trailer'>
            <MovieDetails movie={ movie } />
          </Modal.Window>
        </Modal>
        <FilmTileInfo>
          <span>{movie?.year}</span>
          <Rank>{movie?.rank}</Rank>
          <Rating>{movie?.rating > 5 ? <MdNetworkWifi /> : <MdNetworkWifi1Bar />} {movie?.rating}</Rating>
        </FilmTileInfo>
        
      </Container>
    </>
  )
}
