import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { Card, Col, Row, CardGroup, Container } from 'react-bootstrap';
interface DessertsProps { }

export const Desserts: React.FC<DessertsProps> = ({ }) => {

  return (
    <Wrapper>
      <Content>
        <Container>
          <Row>
            <MyCol sm={4}>Column 1</MyCol>
            <MyCol sm={4}>Column 2</MyCol>
            <MyCol sm={4}>Column 2</MyCol>
            <MyCol sm={4}>Column 1</MyCol>
            <MyCol sm={4}>Column 2</MyCol>
            <MyCol sm={4}>Column 2</MyCol>
            <MyCol sm={4}>Column 1</MyCol>
            <MyCol sm={4}>Column 2</MyCol>
            <MyCol sm={4}>Column 2</MyCol>
            <MyCol sm={4}>Column 1</MyCol>
            <MyCol sm={4}>Column 2</MyCol>
            <MyCol sm={4}>Column 2</MyCol>
            <MyCol sm={4}>Column 1</MyCol>
            <MyCol sm={4}>Column 2</MyCol>
            <MyCol sm={4}>Column 2</MyCol>
            <MyCol sm={4}>Column 1</MyCol>
            <MyCol sm={4}>Column 2</MyCol>
            <MyCol sm={4}>Column 2</MyCol>
            <MyCol sm={4}>Column 1</MyCol>
            <MyCol sm={4}>Column 2</MyCol>
            <MyCol sm={4}>Column 2</MyCol>
            <MyCol sm={4}>Column 1</MyCol>
            <MyCol sm={4}>Column 2</MyCol>
            <MyCol sm={4}>Column 2</MyCol>
            <MyCol sm={4}>Column 1</MyCol>
            <MyCol sm={4}>Column 2</MyCol>
            <MyCol sm={4}>Column 2</MyCol>
            <MyCol sm={4}>Column 1</MyCol>
            <MyCol sm={4}>Column 2</MyCol>
            <MyCol sm={4}>Column 2</MyCol>
            <MyCol sm={4}>Column 1</MyCol>
            <MyCol sm={4}>Column 2</MyCol>
            <MyCol sm={4}>Column 2</MyCol>
            <MyCol sm={4}>Column 1</MyCol>
            <MyCol sm={4}>Column 2</MyCol>
            <MyCol sm={4}>Column 2</MyCol>
          </Row>
        </Container>
      </Content>


    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 5px;
`;
const Content = styled.div`
  width: 100%;
  overflow: auto;
  padding-bottom: 100px;
`;
const MyCol = styled(Col)`
   border: 1px solid red;
   
`