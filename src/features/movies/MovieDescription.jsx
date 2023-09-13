import styled from 'styled-components'
import Button from '../../ui/Button'
import { MdDownload, MdPlayCircle } from 'react-icons/md'
import Paragraph from '../../ui/Paragraph'
import Heading from '../../ui/Heading'
import Card from '../../ui/Card'
import Image from '../../ui/Image'
import Row from '../../ui/Row'

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
  padding: 5rem 0;
  grid-gap: 25rem;
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              culpa perspiciatis reiciendis officia quisquam sunt sit ea
              perferendis minus error nisi, officiis aperiam vitae vel rerum
              doloremque necessitatibus ipsa quia dolore voluptatibus eveniet
              numquam cum tempore! Quam, dignissimos ab. Qui temporibus
              quibusdam hic dicta ipsum odio amet suscipit doloribus molestias!
            </Paragraph>
          </div>
          <div>
            <Heading as='h3'>Written By</Heading>
            <Card>
              <Row type="horizontal">
                <Image
                  size='small'
                  src='https://s3-alpha-sig.figma.com/img/f55f/6e37/afd21e0adf22153b4dde919444830c92?Expires=1695600000&Signature=iRlnovwv2ffA9VbPzovytGud3j5OFNpcI8OqB3Y6WLUI0RKQOJTgqK-rw0nq3ewsSDkjceJVbIgMV2qjmoimcm3vDaUXnTSf38FCj1xs0blXoCh5-4Ksxhzaay3V~S2mK3s7EJFcCbc22X6anGF8M28hf000VLbe0FcJpBeRx4J4BedzMquciDxxCn9OcMdCkJ~zcI2hwDt8aZm7j9MToLhRQz5uGXidpd8chuIr~tt3aHnEsHEWL8s37HOmZxL1c6FXVs4OrncwqCTSTsFyErQDuD3PF0ecwI84AUO6VnYejdSTdcO7KXJLlT6m3-ApeBdKFrLQGWKGtc9YuL6INw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                />
                <Row>
                  <Heading as='h4'>Takesure Mamvota</Heading>
                  <Paragraph size='small'>
                    Official Creator & manga artist
                  </Paragraph>
                </Row>
              </Row>
            </Card>
          </div>
        </DescriptionContainer>
      </Container>
    </StyledMovieDescription>
  )
}
