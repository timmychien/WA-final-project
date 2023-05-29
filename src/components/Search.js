import React, { useState,useEffect } from 'react';
import {Container, Form, Button,FormControl,Carousel,Card,Row,Col} from 'react-bootstrap';
import ReactDOM from 'react-dom/client';
import './Search.css';
import TopNav from './TopNav';
import Footer from './Footer';
import {HashRouter as Router} from 'react-router-dom';
function Search (){
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const animalCardData = [
    {image: 'https://cdn.shopify.com/s/files/1/0623/7670/6303/articles/9E8929FF-4A4E-4884-A76B-33F75F922FB1_1_201_a.jpg?v=1646481256&width=1100',
    name:'巧克力',
    animal: '狗',
    gender: '公',
    breed: '混種',
    color: '黑白',
    know_more_text: '我想要更暸解',
    content: '巧克力是一隻樂觀又活潑的混種狗，他有著一雙大大的棕色眼睛和一身柔軟的棕色毛髮，總是讓人忍不住想要撫摸他。巧克力需要更多的愛和關懷，於是現在的中途決定帶他去一個領養中心，讓更多人有機會認識這個可愛的小狗。'},
    {image: 'https://cdn.shopify.com/s/files/1/0623/7670/6303/articles/9E8929FF-4A4E-4884-A76B-33F75F922FB1_1_201_a.jpg?v=1646481256&width=1100',
    name: '巧克力',
    animal: '狗',
    gender: '公',
    breed: '混種',
    color: '黑白',
    know_more_text: '我想要更暸解',
    content: '巧克力是一隻樂觀又活潑的混種狗，他有著一雙大大的棕色眼睛和一身柔軟的棕色毛髮，總是讓人忍不住想要撫摸他。巧克力需要更多的愛和關懷，於是現在的中途決定帶他去一個領養中心，讓更多人有機會認識這個可愛的小狗。'},
    {image: 'https://cdn.shopify.com/s/files/1/0623/7670/6303/articles/9E8929FF-4A4E-4884-A76B-33F75F922FB1_1_201_a.jpg?v=1646481256&width=1100',
    name:'巧克力',
    animal: '狗',
    gender: '公',
    breed: '混種',
    color: '黑白',
    know_more_text: '我想要更暸解',
    content: '巧克力是一隻樂觀又活潑的混種狗，他有著一雙大大的棕色眼睛和一身柔軟的棕色毛髮，總是讓人忍不住想要撫摸他。巧克力需要更多的愛和關懷，於是現在的中途決定帶他去一個領養中心，讓更多人有機會認識這個可愛的小狗。'},
    {image: 'https://cdn.shopify.com/s/files/1/0623/7670/6303/articles/9E8929FF-4A4E-4884-A76B-33F75F922FB1_1_201_a.jpg?v=1646481256&width=1100',
    name: '巧克力',
    animal: '狗',
    gender: '公',
    breed: '混種',
    color: '黑白',
    know_more_text: '我想要更暸解',
    content: '巧克力是一隻樂觀又活潑的混種狗，他有著一雙大大的棕色眼睛和一身柔軟的棕色毛髮，總是讓人忍不住想要撫摸他。巧克力需要更多的愛和關懷，於是現在的中途決定帶他去一個領養中心，讓更多人有機會認識這個可愛的小狗。'}
  ];
  const renderCardDeck = () => {
    const cardDecks = [];
    for (let i = 0; i < animalCardData.length; i += 3) {
      const cardDeck = (
        <Row key={i}>
            <Col>
              <Container className="card-container">
                <Card>
                  <Card.Body className="card_content_layout">
                    <Card.Img className="image" src={animalCardData[i].image} alt="image"/>
                      <Card.Title className="name">{animalCardData[i].name}</Card.Title>
                        <Row className="r_row">
                          <div className="animal _text roboto-medium-black-16px" >
                            {animalCardData[i].animal}
                          </div>
                          <div className="animal _text roboto-medium-black-16px" >
                            {animalCardData[i].gender}
                          </div>
                          </Row>
                          <Row className="r_row">
                            <div className="r_row-item _text-1">{animalCardData[i].breed}</div>
                            <div className="r_row-item _text-1">{animalCardData[i].color}</div>
                          </Row>
                          <div className="content">{animalCardData[i].content}</div>
                            <div className="know_more">
                              <div className="know_more_text">{animalCardData[i].know_more_text}</div>
                            </div>
                  </Card.Body>
                </Card>
              </Container>
            </Col>
            {animalCardData[i+1]&&(<Col>
              <Container className="card-container">
                <Card>
                  <Card.Body className="card_content_layout">
                    <Card.Img className="image" src={animalCardData[i+1].image} alt="image"/>
                      <Card.Title className="name">{animalCardData[i+1].name}</Card.Title>
                        <Row className="r_row">
                          <div className="animal _text roboto-medium-black-16px" >
                            {animalCardData[i+1].animal}
                          </div>
                          <div className="animal _text roboto-medium-black-16px" >
                            {animalCardData[i+1].gender}
                          </div>
                          </Row>
                          <Row className="r_row">
                            <div className="r_row-item _text-1">{animalCardData[i+1].breed}</div>
                            <div className="r_row-item _text-1">{animalCardData[i+1].color}</div>
                          </Row>
                          <div className="content">{animalCardData[i+1].content}</div>
                            <div className="know_more">
                              <div className="know_more_text">{animalCardData[i+1].know_more_text}</div>
                            </div>
                  </Card.Body>
                </Card>
              </Container>
            </Col>)}
            {animalCardData[i+1]&&(<Col>
              <Container className="card-container">
                <Card>
                  <Card.Body className="card_content_layout">
                    <Card.Img className="image" src={animalCardData[i+2].image} alt="image"/>
                      <Card.Title className="name">{animalCardData[i+2].name}</Card.Title>
                        <Row className="r_row">
                          <div className="animal _text roboto-medium-black-16px" >
                            {animalCardData[i+2].animal}
                          </div>
                          <div className="animal _text roboto-medium-black-16px" >
                            {animalCardData[i+2].gender}
                          </div>
                          </Row>
                          <Row className="r_row">
                            <div className="r_row-item _text-1">{animalCardData[i+2].breed}</div>
                            <div className="r_row-item _text-1">{animalCardData[i+2].color}</div>
                          </Row>
                          <div className="content">{animalCardData[i+2].content}</div>
                            <div className="know_more">
                              <div className="know_more_text">{animalCardData[i+2].know_more_text}</div>
                            </div>
                  </Card.Body>
                </Card>
              </Container>
            </Col>)}
        </Row>
      );
      cardDecks.push(cardDeck);
    }
    return cardDecks;
  };
  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search logic with searchQuery and selectedOption
    console.log('Performing search for:', searchQuery);
    console.log('Selected option:', selectedOption);
  };
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  useEffect(() => {
  }, []);
  return (
    <div>
    <TopNav/>
    <Container>
        <h1>Search Page</h1>
        <Form onSubmit={handleSearch}>
          <Form.Group controlId="animal">
            <Form.Label>動物:</Form.Label>
            <Form.Control as="select" value={selectedOption} onChange={handleSelectChange}>
              <option value="">Search</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="breed">
            <Form.Label>品種:</Form.Label>
            <Form.Control as="select" value={selectedOption} onChange={handleSelectChange}>
              <option value="">Select</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="color">
            <Form.Label>花色:</Form.Label>
            <Form.Control as="select" value={selectedOption} onChange={handleSelectChange}>
              <option value="">Select</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="gender">
            <Form.Label>性別:</Form.Label>
            <Form.Control as="select" value={selectedOption} onChange={handleSelectChange}>
              <option value="">Select</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Form.Control>
          </Form.Group>
          <br/>
          <Button variant="primary" type="submit">Search</Button>
        </Form>
        <br/>
      </Container>
    <Carousel>
      {renderCardDeck().map((cardDeck, index) => (
        <Carousel.Item key={index}>{cardDeck}</Carousel.Item>
      ))}
    </Carousel>
    <Footer/>
    </div>
  );
};
let container = null;
  document.addEventListener('DOMContentLoaded', function(event) {
    if (!container) {
      container = document.getElementById('root');
      const root = ReactDOM.createRoot(container);
      root.render(
        <Router>
          <Search/>
        </Router>
      );
    }
  });
export default Search;