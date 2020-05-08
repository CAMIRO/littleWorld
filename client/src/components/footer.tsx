import React from 'react'
import styled from 'styled-components'

export const Footer: React.FC = () => {

    const date = new Date();
    const currentYear = date.getFullYear();
    return (
        <Wrapper>
            <Item>
                ItemOne
            </Item>
            <Credits>
                Little World - {currentYear}
            </Credits>
        </Wrapper>
    )
}

const Wrapper = styled.div`
flex: 1;
background-color: #68c3c8;
min-height: -webkit-fill-available;
`

const Item = styled.div`
flex-grow: 1;
border: 1px solid blue;
min-height: 60px;
`

const Credits = styled.div`
flex-grow: 3;
text-align: center;
font-size: 13px;

`