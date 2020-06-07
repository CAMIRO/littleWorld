import React from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { Row, Container, Col, Carousel } from 'react-bootstrap';
interface DetailDessert {
}
export const DetailDessert: React.FC<DetailDessert> = () => {
    console.log('dasdasdaad')
    let { dessertId } = useParams();
    return (
        <Wrapper>
            <Content>
                <Container fluid >
                    <Row >
                        <MyCol sm={6}>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://picsum.photos/800/400?text=First slide&bg=373940"
                                        alt="First slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://picsum.photos/800/400?text=First slide&bg=373940"
                                        alt="First slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>second slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://picsum.photos/800/400?text=First slide&bg=373940"
                                        alt="First slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </MyCol>
                        <MyCol>
                            Dessert Id: {dessertId} Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.
                        </MyCol>
                    </Row>
                </Container>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const Content = styled.div`
  width: 100%;
  overflow: auto;
  padding-bottom: 100px;
`;
const MyCol = styled(Col)`
    margin-top: 30px;
`


