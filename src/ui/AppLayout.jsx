import { Outlet } from 'react-router-dom'
import Header from './Header'
import styled from 'styled-components'

const StyledAppLayout = styled.div`
  flex-direction: column;

  background: linear-gradient(150deg, #233458 13.36%, #111827 98.15%);
`

const Main = styled.main`
  display: flex;
  padding: 4rem 4.8rem 20.4rem;
  background: linear-gradient(15deg, #233458 30.36%, #111827 50.15%);
`

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  gap: 3.2rem;
`
export default function AppLayout () {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  )
}
