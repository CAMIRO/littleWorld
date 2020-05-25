import React from 'react'
import styled from "styled-components";
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
interface ImageCardProps {
    cardTitle: string;
    cardImgLink: string;
    id: number;
}
export const ImageCard: React.FC<ImageCardProps> = ({ cardImgLink, cardTitle, id }) => {
    const history = useHistory()

    const handleOnClick = () => {
        const url = `/desserts/${id}`
        history.push(url)
    }

    return (
        <MyCol sm={3}>

            <MyCard className="text-white" onClick={handleOnClick} style={{ width: '100%' }}>
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
    border: none;
    :hover{
     cursor: pointer;   
     box-shadow: 0 5px 14px rgba(0, 0, 0, .4);
    }

`