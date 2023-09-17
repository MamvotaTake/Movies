import styled from "styled-components";
import MoviesList from "../features/movies/MoviesList";

const Container = styled.div`
display: flex;
`
export default function Movies() {
  
  
  return (
    <>
      <Container>
        <MoviesList/>
      </Container>
    </>
  )
}
