import React from 'react'
import styled from "styled-components";
import { Card, Col } from 'react-bootstrap';
interface ImageCardProps { }
export const ImageCard: React.FC<ImageCardProps> = ({ }) => {

    return (
        <MyCol sm={3}>
            <Card onClick={() => console.log('heey')} style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://picsum.photos/150/150?text=First cap" />
                <Card.ImgOverlay className="column justify-content-end">
                    <Card.Title>Card title</Card.Title>
                </Card.ImgOverlay>

            </Card>
        </MyCol>
    )

}
const MyCol = styled(Col)`
margin-top: 30px;
`