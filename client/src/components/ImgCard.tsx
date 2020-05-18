import React from 'react'
import styled from "styled-components";
import { Card, Col } from 'react-bootstrap';
interface ImageCardProps {
    cardTitle: string;
    cardImgLink: string;
}
export const ImageCard: React.FC<ImageCardProps> = ({ cardImgLink, cardTitle }) => {

    return (
        <MyCol sm={3}>
            <MyCard bg="primary" className="text-white" onClick={() => console.log('heey')} style={{ width: '100%' }}>
                <Card.Img variant="top" src={`${cardImgLink} cap`} />
                <Card.ImgOverlay className="column justify-content-end">
                    <Card.Title >{cardTitle}</Card.Title>
                </Card.ImgOverlay>

            </MyCard>
        </MyCol>
    )

}
const MyCol = styled(Col)`
    margin-top: 30px;
`
const MyCard = styled(Card)`
    :hover{
     cursor: pointer;   
     box-shadow: 0 5px 14px rgba(0, 0, 0, .2);
    }

`