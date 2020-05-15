import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { Card, Col, Row, CardGroup, Container } from 'react-bootstrap';
interface DessertsProps { }

export const Desserts: React.FC<DessertsProps> = ({ }) => {

  return (
    <Wrapper>
      <Content>
        <Container fluid >
          <Row >
            <MyCol sm={3}>
              <Card onClick={() => console.log('heey')} style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://picsum.photos/50/50?text=First cap" />
                <Card.ImgOverlay className="column justify-content-end">
                  <Card.Title>Card title</Card.Title>
                </Card.ImgOverlay>

              </Card>
            </MyCol>
            <MyCol sm={3}>
              <Card onClick={() => console.log('heey')} style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://picsum.photos/50/50?text=First cap" />
                <Card.ImgOverlay className="column justify-content-end">
                  <Card.Title>Card title</Card.Title>
                </Card.ImgOverlay>

              </Card>
            </MyCol>
            <MyCol sm={3}>
              <Card onClick={() => console.log('heey')} style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://picsum.photos/50/50?text=First cap" />
                <Card.ImgOverlay className="column justify-content-end">
                  <Card.Title>Card title</Card.Title>
                </Card.ImgOverlay>

              </Card>
            </MyCol>
            <MyCol sm={3}>
              <Card onClick={() => console.log('heey')} style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://picsum.photos/50/50?text=First cap" />
                <Card.ImgOverlay className="column justify-content-end">
                  <Card.Title>Card title</Card.Title>
                </Card.ImgOverlay>

              </Card>
            </MyCol>
            <MyCol sm={3}>
              <Card onClick={() => console.log('heey')} style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://picsum.photos/50/50?text=First cap" />
                <Card.ImgOverlay className="column justify-content-end">
                  <Card.Title>Card title</Card.Title>
                </Card.ImgOverlay>

              </Card>
            </MyCol>
            <MyCol sm={3}>
              <Card onClick={() => console.log('heey')} style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://picsum.photos/50/50?text=First cap" />
                <Card.ImgOverlay className="column justify-content-end">
                  <Card.Title>Card title</Card.Title>
                </Card.ImgOverlay>

              </Card>
            </MyCol>
          </Row>
        </Container>
      </Content>


    </Wrapper >
  );
};
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