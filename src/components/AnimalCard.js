import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import './AnimalCard.css'
function AnimalCard() {
    const animalCardData = {
        image: 'https://cdn.shopify.com/s/files/1/0623/7670/6303/articles/9E8929FF-4A4E-4884-A76B-33F75F922FB1_1_201_a.jpg?v=1646481256&width=1100',
        name: '巧克力',
        animal: '狗',
        gender: '公',
        breed: '混種',
        color: '黑白',
        know_more_text: '我想要更暸解',
        content: '巧克力是一隻樂觀又活潑的混種狗，他有著一雙大大的棕色眼睛和一身柔軟的棕色毛髮，總是讓人忍不住想要撫摸他。巧克力需要更多的愛和關懷，於是現在的中途決定帶他去一個領養中心，讓更多人有機會認識這個可愛的小狗。',
    
    };
    return (
        <div>
            <Container className="container-center-horizontal">
                <div className="desktop-4 screen">
                    <Col>
                        <Container className="card-container">
                            <Card>
                                <Card.Body className="card_content_layout">
                                    <Card.Img className="image" src={animalCardData.image} alt="image"/>
                                    <Card.Title className="name">{animalCardData.name}</Card.Title>
                                    <Row className="r_row">
                                        <div className="animal _text roboto-medium-black-16px" >
                                            {animalCardData.animal}
                                        </div>

                                        <div className="animal _text roboto-medium-black-16px" >
                                            {animalCardData.gender}
                                        </div>
                                    </Row>
                                    <Row className="r_row">
                                        <div className="r_row-item _text-1">{animalCardData.breed}</div>
                                        <div className="r_row-item _text-1">{animalCardData.color}</div>
                                    </Row>
                                    <div className="content">{animalCardData.content}</div>
                                    <div className="know_more">
                                        <div className="know_more_text">{animalCardData.know_more_text}</div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                </div>
            </Container>
        </div>
    );
}
export default AnimalCard;
