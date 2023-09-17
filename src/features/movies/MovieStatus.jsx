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
    gap: 1.3rem;
    color: #fff;

    & span{
      font-size: 1rem;
    }

    & svg {
        width: 2rem;
        height: 2rem;
        color: grey;
    }
`
export default function MovieStatus () {
  return (
    <Container>
      <StatuContent>
        <MdFavorite />
        {/* <span>Favorite</span> */}
      </StatuContent>
      <StatuContent>
        <MdBookmarkRemove />
        {/* <span>Watch later</span> */}
      </StatuContent>
      <StatuContent>
        <AiOutlineEye />
        {/* <span>Watched</span> */}
      </StatuContent>
    </Container>
  )
}
