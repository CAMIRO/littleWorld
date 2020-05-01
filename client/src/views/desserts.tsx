import React from 'react'
import styled from 'styled-components'
import { Carousel, Button } from 'react-bootstrap'
import ReactGA from 'react-ga'

interface DessertsProps {

}

export const Desserts: React.FC<DessertsProps> = ({ }) => {

    const mainCTAButton = (id: number) => {

        const clickHandler = () => {
            ReactGA.event({
                category: 'Button',
                action: `mainCTA clicked id: ${id}`
            })
        }

        return (
            <Button onClick={clickHandler}>CTA</Button>
        )
    }
    return (
        <Wrapper>
            <Content>
                <Carousel>
                    <Carousel.Item>
                        <CarouselWrapper>
                            {mainCTAButton(1)}
                        </CarouselWrapper>

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CarouselWrapper>
                            {mainCTAButton(2)}
                        </CarouselWrapper>
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <CarouselWrapper>
                            {mainCTAButton(3)}
                        </CarouselWrapper>
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <h2>Desserts :</h2>
            </Content>
        </Wrapper>
    );
}
// TODO: Adjust the height in Wrapper div
const Wrapper = styled.div`
  padding: 20px;
  width: inherit;
  overflow-y: scroll;
`
const Content = styled.div`
     height: 6500px;
`
const CarouselWrapper = styled.div`
display: flex;
align-items: center;
  justify-content: center;
`
