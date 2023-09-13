import styled from 'styled-components'
import { MdOutlineSlowMotionVideo } from 'react-icons/md'

import Button from '../../ui/Button'
import MovieStatus from './MovieStatus'
import Image from '../../ui/Image'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
`

// const Image = styled.img`
//   height: 35.41275rem;
//   flex-shrink: 0;
//   border-radius: .9rem;
// `

export default function MovieImage () {
  return (
    <Container>
      <Image size='large' src='https://s3-alpha-sig.figma.com/img/c585/ef2e/36a53af88611a8b8702d21550851d0e2?Expires=1695600000&Signature=YT~MRRVwQXNpiX4HzKPx1F~o4HqaYW7lfA0jz6euDkDMvH1R0nIOR-Q3HlOfMsd9KUkXrE2Yk9r3SiGQptTzKOQmFpgUiGgKsYDcxzf3EREPZBU70pj-rHRbas2qzqwfLlgogbGnDnpb4KTIdAIl7IaBkgIWAgmmswg9h36RsbEBxqk4rrO~rIJ4~KhrPlqAC-smjJXRBRpHtt6VuZkk0Spt6W-tk~jD7g8hvtj0vwc0m7hKl5Ztk96ifUGpLw-DDDhnJWl-qFVkNPMAXVR9ig0ku33I3ZNMxq9LqW6ejnq5UZZ1O5nZNivkwPajOUCxBpFxCMEsW~X~PKeRPK2PJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
      <Button size='large'>
        <MdOutlineSlowMotionVideo />
        <span>Trailer</span>
      </Button>
      <MovieStatus />
    </Container>
  )
}
