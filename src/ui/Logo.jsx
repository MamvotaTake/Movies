import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLogo = styled.div`
  color: #fff;
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export default function Logo () {
  return (
    <StyledLogo>
      <Link to='/' className='tracking-widest'>
        Movies.io
      </Link>
    </StyledLogo>
  )
}
