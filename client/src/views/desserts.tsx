import React from 'react'
import styled from 'styled-components'

interface DessertsProps {

}

export const Desserts: React.FC<DessertsProps> = ({}) => {
    return (
        <Wrapper>
            <Content>
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