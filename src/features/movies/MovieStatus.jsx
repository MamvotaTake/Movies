import { MdBookmarkRemove, MdFavorite } from 'react-icons/md'
import { AiOutlineEye } from 'react-icons/ai'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const StatuContent = styled(Container)`
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: #fff;

    & svg {
        width: 2.4rem;
        height: 2.4rem;
        color: grey;
    }
`
export default function MovieStatus () {
  return (
    <Container>
      <StatuContent>
        <MdFavorite />
        <span>Favorite</span>
      </StatuContent>
      <StatuContent>
        <MdBookmarkRemove />
        <span>Watch later</span>
      </StatuContent>
      <StatuContent>
        <AiOutlineEye />
        <span>Watched</span>
      </StatuContent>
    </Container>
  )
}
