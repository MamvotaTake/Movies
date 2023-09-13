import styled, { css } from 'styled-components'

const sizes = {
  small: css`
    color: #878787;
    font-size: 0.8125rem;
    `,

  medium: css`
    width: 40.375rem;
    `,

  large: css`
        
    `
}

const Paragraph = styled.p`
  display: flex;
  color: #fff;
  padding: 2rem 0;
  font-size: 1.6rem;
  text-align: rigt;
  justify-content: center;
  font-weight: 400;
  ${props => sizes[props.size]};
`

Paragraph.defaultProps = {
  size: 'medium'
}

export default Paragraph
