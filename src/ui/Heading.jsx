import styled, { css } from 'styled-components'

const test = css`text-align: center`

const Heading = styled.h1`
    color: #fff;
  ${props =>
    props.as === 'h1' &&
    css`
    font-size: 3rem;
    font-weight: 600;
  `}
  ${props =>
    props.as === 'h2' &&
    css`
    font-size: 2rem;
    font-weight: 600;
  `}
  ${props =>
    props.as === 'h3' &&
    css`
    font-size: 2rem;
    font-weight: 700;
  `}
  ${props =>
    props.as === 'h4' &&
    css`
    font-size: 1rem;
    font-weight: 700;
  `}
  line-height: 1.4
  
  /* ${test}; */
`

export default Heading
