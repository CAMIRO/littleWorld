import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { Col, Card } from 'react-bootstrap';
interface DessertsProps { }

export const Desserts: React.FC<DessertsProps> = ({ }) => {

  return (
    <Wrapper>

      <Content>
        <Col
          lg={3}
          md={4}
          sm={6}>
          <Card className="product">
            <div className="product-img-wrapper">
              <a href="#">
                <img

                  className="img-responsive product-img"
                  src="https://picsum.photos/210/160?text=First slide&bg=373940"
                />
              </a>
            </div>

            <h4
              className="ellipsis"

            >
              <a href="#">
                produc name
              </a>
            </h4>

            <h5
              className="ellipsis product-brand-name"
              title='brand name'>
              {`by brna name`}
            </h5>

            <div className="pull-right h4 product-price">
              {`$2.00000`}
            </div>
          </Card>
        </Col>

      </Content>

    </Wrapper>
  );
};
// TODO: Adjust the height in Wrapper div
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 40px;
`;
const Content = styled.div`
  width: 100%;
  overflow: auto;
  padding-bottom: 50px;
`;

const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
