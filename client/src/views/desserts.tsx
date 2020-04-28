import React from 'react'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'

interface DessertsProps {

}

export const Desserts: React.FC<DessertsProps> = ({}) => {
    return (
        <Wrapper>
            <Content>
                <Button>hallo</Button>
                <h2>Desserts :</h2>
            </Content>
        </Wrapper>
    );
}
// TODO: Adjust the height in Wrapper div
const Wrapper = styled.div`
  padding: 20px;
  height: 3000px;
  overflow-y: scroll;
`
const Content = styled.div`
     height: 6500px;
` 