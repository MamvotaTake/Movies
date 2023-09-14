import styled from 'styled-components'
import MainNav from './MainNav'
import Divider from './Divider'

const StyledHeader = styled.nav`
  display: flex;
  align-items: center;
  color: #fff;
  padding: 2rem 4.8rem 1.4rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  gap: 2.3rem;
`

export default function Header () {
  return (
    <>
      <StyledHeader>
        <MainNav />
      </StyledHeader>
      <Divider/>
    </>
  )
}
