import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import SearchMovie from '../features/movies/SearchMovie'
import Logo from './Logo'

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.9rem;
`

const StyledNavLink = styled(NavLink)`
    &:link,
    &:visited {
    display: flex;
    align-items: center;
    gap: 1.9rem;

    color: var(--color-grey-0);
    font-size: 1.4rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover{
    color: var(--color-grey-500);
    border-radius: var(--border-radius-sm);
  }
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }


  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`
export default function MainNav () {
  return (
    
    <>
        <Logo />
        <nav>
            <NavList>
            <li>
                <StyledNavLink to='/home'>Home</StyledNavLink>
            </li>
            <li>
                <StyledNavLink to='/movies'>Movies</StyledNavLink>
            </li>
            <li>
                <StyledNavLink to='/anime'>Anime</StyledNavLink>
            </li>
            <li>
                <SearchMovie />
            </li>
            </NavList>
    </nav>
    </>
  )
}
