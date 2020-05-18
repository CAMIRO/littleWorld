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
            <Card bg="primary" className="text-white" onClick={() => console.log('heey')} style={{ width: '100%' }}>
                <Card.Img variant="top" src={`${cardImgLink} cap`} />
                <Card.ImgOverlay className="column justify-content-end">
                    <Card.Title >{cardTitle}</Card.Title>
                </Card.ImgOverlay>

            </Card>
        </MyCol>
    )

}
const MyCol = styled(Col)`
margin-top: 30px;
`