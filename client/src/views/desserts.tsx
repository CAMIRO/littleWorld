import React from "react";
import styled from "styled-components";
import { ImageCard } from '../components/ImgCard';
import { Row, Container, Card } from 'react-bootstrap';

const ImageCardArr = [
  { id: 1, title: 'title 1', img: 'https://picsum.photos/150/150?text=First' },
  { id: 2, title: 'title 2', img: 'https://picsum.photos/150/150?text=First' },
  { id: 3, title: 'title 3', img: 'https://picsum.photos/150/150?text=First' },
  { id: 4, title: 'title 4', img: 'https://picsum.photos/150/150?text=First' },

]

interface DessertsProps { }

export const Desserts: React.FC<DessertsProps> = ({ }) => {

  const CardComponent = () => (

    ImageCardArr.map((card) =>
      <ImageCard cardImgLink={card.img} key={card.id} cardTitle={card.title} />
    )
  )
  return (
    <Wrapper>
      <Content>
        <Container fluid >
          <Row >
            {CardComponent()}
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
