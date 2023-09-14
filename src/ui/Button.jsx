import styled, { css } from 'styled-components'

// const StyledButton = styled.button`
//   display: flex;
//   padding: 1.625rem 1.625rem 1.625rem 1.125rem;
//   justify-content: center;
//   align-items: center;
//   gap: 0.5625rem;
//   flex-shrink: 0;
//   border-radius: 1.8125rem;
//   background: rgba(255, 255, 255, 0.06);
//   color: #ffff;

//   &:hover {
//     background: ${props => (props.$active ? '#ffffff3d' : '#f4aa')};
//   }
// `

const sizes = {
  small: css`
    width: 121px;
    height: 57px;
    font-size: 1.2rem;
    padding: 1.3rem 0.8rem;
    border-radius: 1.75rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    width: 15rem;
    height: 5rem;
    border-radius: 2.75rem;
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `
}

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
  transparent: css`
    color: var(--color-red-100);
    background-color: var(--color-grey-700);
    

    &:hover {
      background-color: var(--color-grey-900);
    }
  `
}

const Button = styled.button`
  display: flex;
  padding: 1.625rem 1.625rem 1.625rem 1.125rem;
  justify-content: center;
  align-items: center;
  gap: 0.5625rem;
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  ${props => sizes[props.size]};
  ${props => variations[props.variation]};

  & svg {
    width: 3rem;
    height: 2rem;
  }
`
Button.defaultProps = {
  size: 'medium',
  variation: 'primary'
}
export default Button
