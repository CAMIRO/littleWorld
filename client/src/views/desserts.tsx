import React from 'react'
import styled from 'styled-components'
import { Carousel, Button } from 'react-bootstrap'

interface DessertsProps {

}

export const Desserts: React.FC<DessertsProps> = ({ }) => {
    return (
        <Wrapper>
            <Content>
                <Carousel>
                    <Carousel.Item>
                        <Button>hello</Button>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Button>hello2</Button>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Button>hello3</Button>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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