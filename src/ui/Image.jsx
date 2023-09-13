import styled, { css } from 'styled-components'

const sizes = {
  small: css`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    `,
  large: css`
    height: 35.41275rem;
    border-radius: .9rem;

    `
}

const Image = styled.img`
  flex-shrink: 0;
  ${props => sizes[props.size]};
`

Image.defaultProps = {
  size: 'small'
}

export default Image
