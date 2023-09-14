import styled from 'styled-components'
import Button from '../../ui/Button'
import { MdDownload, MdPlayCircle } from 'react-icons/md'
import Paragraph from '../../ui/Paragraph'
import Heading from '../../ui/Heading'
import Card from '../../ui/Card'
import Image from '../../ui/Image'
import Row from '../../ui/Row'
import { Link } from 'react-router-dom'
import Divider from '../../ui/Divider'
import { AiOutlineHeart, AiOutlineLike } from 'react-icons/ai'

const StyledMovieDescription = styled.div`
  width: auto;
  grid-area: 1 / 2 / 2 / 3;
`

// const HeaderH1 = styled.h1`
//   color: #fff;
//   font-size: 2.5rem;
//   font-style: normal;
//   font-weight: 700;
//   line-height: normal;
// `

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const ButtonContainer = styled.div`
  display: flex;
  padding: 2rem 0;
  gap: 2rem;
`

const DescriptionContainer = styled.div`
  display: flex;
  padding: 3rem 0;
  justify-content: space-between;
  gap: 10rem;
`
const Span = styled.span`
  font-size: 1rem;
  width: 8rem;
  padding: 0.2rem 0;
`

const LinkStyle = styled(Link)`
  display: flex;
  justify-content: flex-end;
  color: var(--color-brand-700);
  transition: all 2s;

  &:hover{
    color: var(--color-brand-500);
  }
`

const SocialMediaContainer = styled.div`
  display: flex;
  padding: 3rem 0;
  gap: 2rem;
`
const StyledList = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--color-grey-400);
  font-size: 16px;

  & span {
    color: var(--color-grey-0);
  }
`

export default function MovieDescription () {
  return (
    <StyledMovieDescription>
      <Heading as='h1'>One Piece Film : Red</Heading>
      <Container>
        <ButtonContainer>
          <Button size='medium'>
            <MdPlayCircle />
            <span>Watch</span>
          </Button>
          <Button size='medium' variation='transparent'>
            <MdDownload />
            <span>Download</span>
          </Button>
        </ButtonContainer>
        <DescriptionContainer>
          <div>
            <Heading as='h3'>Storyline</Heading>
            <Paragraph>
              Including interactive, real-world scenarios in your online
              training can help learners put what they learn into practice. Want
              to see an example of what that could look like? Check out this
              project or download the file to take a closer look.
            </Paragraph>
            <Row>
              <StyledList>
                Rating
                <span>8.9</span>
              </StyledList>

              <StyledList>
                Release year
                <span>2022</span>
              </StyledList>

              <StyledList>
                Genres
                <span>Adventure, Fantacy</span>
              </StyledList>

              <StyledList>
                Countries
                <span>Japan</span>
              </StyledList>

              <StyledList>
                Duration
                <span>2 hours +</span>
              </StyledList>
            </Row>
          </div>
          <div>
            <Heading as='h4'>Written By:</Heading>
            <Card>
              <Image
                size='small'
                src='https://s3-alpha-sig.figma.com/img/f55f/6e37/afd21e0adf22153b4dde919444830c92?Expires=1695600000&Signature=iRlnovwv2ffA9VbPzovytGud3j5OFNpcI8OqB3Y6WLUI0RKQOJTgqK-rw0nq3ewsSDkjceJVbIgMV2qjmoimcm3vDaUXnTSf38FCj1xs0blXoCh5-4Ksxhzaay3V~S2mK3s7EJFcCbc22X6anGF8M28hf000VLbe0FcJpBeRx4J4BedzMquciDxxCn9OcMdCkJ~zcI2hwDt8aZm7j9MToLhRQz5uGXidpd8chuIr~tt3aHnEsHEWL8s37HOmZxL1c6FXVs4OrncwqCTSTsFyErQDuD3PF0ecwI84AUO6VnYejdSTdcO7KXJLlT6m3-ApeBdKFrLQGWKGtc9YuL6INw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
              />
              <Row>
                <Heading as='h4'>Takesure Mamvota</Heading>
                <Span>Official Creator & manga artist</Span>
              </Row>
            </Card>
            <LinkStyle to='/home'>See all</LinkStyle>
          </div>
        </DescriptionContainer>
        <Divider />
        <SocialMediaContainer>
          <Button size='small' variation='transparent'>
            {/* <AiOutlineTwitter /> */}
            <AiOutlineHeart />
            <span>+1k</span>
          </Button>
          <Button size='small' variation='transparent'>
            {/* <AiOutlineFacebook /> */}
            <AiOutlineLike />
            <span>1.5k</span>
          </Button>
        </SocialMediaContainer>
      </Container>
    </StyledMovieDescription>
  )
}
