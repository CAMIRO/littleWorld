import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { Facebook, Instagram } from 'react-feather';
export const Footer: React.FC = () => {

    const date = new Date();
    const currentYear = date.getFullYear();
    return (
        <MyContainer fluid>
            <MyRow className="justify-content-md-center align-items-center" >
                <MyCol sm={8}>For custom order requests, questions, or just to get in touch please email <Atag href="mailto: littleworld0326@gmail.com">littleworld0326@gmail.com</Atag></MyCol>

                <MyCol sm={4} >
                    <Row className="justify-content-around align-items-center" >
                        <SocialBut onClick={() => console.log('heeey')}>
                            <Facebook color="#FFF" size={22} />
                        </SocialBut>
                        <Instagram color="#FFF" size={22} />
                    </Row>
                </MyCol>
            </MyRow>
            <MyRow className="justify-content-md-center" >
                <Credits>Little World - {currentYear}</Credits>
            </MyRow>
        </MyContainer>
    )
}

const MyContainer = styled(Container)`
background-color: #68c3c8;
`

const MyRow = styled(Row)`

font-size: 0.8rem;
&:first-child  {
    min-height: 68px; 
    border-bottom: 0.1px solid #009494;
}
`
const MyCol = styled(Col)`
    text-align: left;
    padding-left: 40px;
    
`
const Credits = styled(Col)`
    text-align: center;
    font-size: 0.7rem;
    padding: 10px 0;
`
const Atag = styled.a`
color: #EC7637;
&:hover {
text-decoration: none;
color: #FFF;    
}
`
const SocialBut = styled.div`
 background-color: 'red';

`