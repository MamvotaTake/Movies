import styled from 'styled-components'

const StyledInput = styled.input`
  padding: 1.3rem;
  width: 25rem;
  outline: none;
  border-radius: 1rem;
  background-color: var(--color-silver-700);
  transition: all 2s;
  

  ::placeholder{
    font-size: .85em;
    color: red;
  }

  &:focus{
    width: 28rem;
  }
`
export default function SearchMovie () {
  return (
    <form>
      <StyledInput
        placeholder='Search Movie..'
      />
    </form>
  )
}
