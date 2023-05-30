import React, { useState,useEffect } from 'react';
import {Container, Form, Button,Carousel,Card,Row,Col} from 'react-bootstrap';
import ReactDOM from 'react-dom/client';
import './Search.css';
import TopNav from './TopNav';
import Footer from './Footer';
import {HashRouter as Router} from 'react-router-dom';
function Search (){

  const [filterValues,setFilterValues]=useState({
    animal:'',
    breed:'',
    color:'',
    gender:''
  })
  const [infos,setInfos]=useState([]);
  const [filteredData,setFilteredData]=useState([]);
  const [noMatchMessage, setNoMatchMessage] = useState('');
    const getInfo = async() =>{
        try{
            const response = await fetch('http://localhost:8000/search?animal=0&breed=&gender=0&color=');
            if(response.ok){
                const data=await response.json();
                setInfos(data.result);
                
            }else{
                console.error('Error:',response.status);
            }
        }catch(error){
            console.error('Error',error);
        }
  }
  //let infolist=Array.from(infos);
  const getColumnValues = (columnName) => {
    // Extract unique values of a specific column
    const columnValuesSet = new Set(infos.map((item) => item[columnName]));
    const columnUniqueValues = Array.from(columnValuesSet);
    return columnUniqueValues;
  };
  const colorValues = getColumnValues('color');
  const breedValues = getColumnValues('breed');
  const handleFilter = () => {
    let filteredItems = infos.filter((item) => {
      // Replace 'column1', 'column2', 'column3' with your actual column names
      let matchesAnimal = item.animal.toString() === filterValues.animal;
      let matchesBreed = item.breed.includes(filterValues.breed);
      let matchesColor = item.color.includes(filterValues.color);
      let matchesGender = item.gender.toString() === filterValues.gender;
      if(filterValues.animal===''){
        matchesAnimal=true;
      }
      if(filterValues.breed===''){
        matchesBreed=true;
      }
      if(filterValues.color===''){
        matchesColor=true;
      }
      if(filterValues.gender===''){
        matchesGender=true;
      }
      return matchesAnimal&matchesBreed && matchesColor&&matchesGender;
    });
      if (filteredItems.length===0){
        filteredItems=['non-match']
        setNoMatchMessage('抱歉，找不到相符的結果');
      }else{
        setFilteredData(filteredItems)
      }
      console.log(filteredItems)
      
    //setFilteredData(filteredItems);
  };
  const know_more_text='我要認養';
  const handleAdopt=(e)=>{
    e.preventDefault();
    // Retrieve the values from the form
    const email =e.target.email.value;
    const pid = e.target.pid.value;
    try{
      fetch('http://localhost:8000/accept', { 
          method: 'POST', 
          mode: "cors", 
          body: JSON.stringify({
            emial:email,
            pid:pid
         }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }// body data type must match "Content-Type" header
      }).then(
        (response) => response.json()
      )
      .catch((err) => {
        console.log(err.message);
      })
      .then(window.alert('您已認領成功！'))
      .then(window.location.href = '/')
  }catch(err){
      console.log(err.message);
  }
  }
  const renderCardDeck = () => {
    const cardDecks = [];
    let infolist = filteredData.length ===0 ? infos : filteredData;
    //const updatedInfolist = infos;
    if (infolist.length===1&&infolist[0]!=='non-match'){
      const cardDeck = (
        <Row key={0}>
          <Col>
            <Container className="card-container">
              <Card>
                <Card.Body className="card_content_layout">
                  <Card.Img className="image" src={infolist[0].path} alt="image"/>
                    <Card.Title className="name">{infolist[0].animalname}</Card.Title>
                      <Row className="r_row">
                        <div className="animal _text roboto-medium-black-16px">
                          {infolist[0].animal === 1 ? '狗' : infolist[0].animal === 2 ? '貓' : '其他'}
                        </div>
                        <div className="animal _text roboto-medium-black-16px" >
                          {infolist[0].gender===1?'公':'母'}
                        </div>
                        </Row>
                        <Row className="r_row">
                          <div className="r_row-item _text-1">{infolist[0].breed}</div>
                          <div className="r_row-item _text-1">{infolist[0].color}</div>
                        </Row>
                        <div className="content">{infolist[0].content}</div>
                        <Form onSubmit={handleAdopt}>
                          <Form.Control type="hidden" name="email" value="chien871101@gmail.com" />
                          <Form.Control type="hidden" name="pid" value={infolist[0].pid} />
                          <Button type="submit" variant="primary" className="know_more">
                            <div className="know_more_text">{know_more_text}</div>
                          </Button>
                        </Form>
                </Card.Body>
              </Card>
            </Container>
          </Col>
      </Row>
    );
    cardDecks.push(cardDeck);
    }
    else{
      for (let i = 0; i < infolist.length; i += 2) {
        const cardDeck = (
            <Row key={i}>
              {infolist[i] &&(
              <Col>
                <Container className="card-container">
                  <Card>
                    <Card.Body className="card_content_layout">
                      <Card.Img className="image" src={infolist[i].path} alt="image"/>
                        <Card.Title className="name">{infolist[i].animalname}</Card.Title>
                          <Row className="r_row">
                            <div className="animal _text roboto-medium-black-16px">
                              {infolist[i].animal === 1 ? '狗' : infos[i].animal === 2 ? '貓' : '其他'}
                            </div>
                            <div className="animal _text roboto-medium-black-16px" >
                              {infolist[i].gender===1?'公':'母'}
                            </div>
                            </Row>
                            <Row className="r_row">
                              <div className="r_row-item _text-1">{infolist[i].breed}</div>
                              <div className="r_row-item _text-1">{infolist[i].color}</div>
                            </Row>
                            <div className="content">{infolist[i].content}</div>
                            <Form onSubmit={handleAdopt}>
                              <Form.Control type="hidden" name="email" value="chien871101@gmail.com"/>
                              <Form.Control type="hidden" name="pid" value={infolist[0].pid} />
                              <Button type="submit" variant="primary" className="know_more">
                                  <div className="know_more_text">{know_more_text}</div>
                              </Button>
                            </Form>
                    </Card.Body>
                  </Card>
                </Container>
              </Col>
              )}
              {infolist[i+1] &&(
              <Col>
                <Container className="card-container">
                  <Card>
                    <Card.Body className="card_content_layout">
                      <Card.Img className="image" src={infolist[i+1].path} alt="image"/>
                        <Card.Title className="name">{infolist[i+1].animalname}</Card.Title>
                          <Row className="r_row">
                            <div className="animal _text roboto-medium-black-16px" >
                              {infolist[i+1].animal === 1 ? '狗' : infos[i+1].animal === 2 ? '貓' : '其他'}
                            </div>
                            <div className="animal _text roboto-medium-black-16px" >
                              {infolist[i+1].gender===1?'公':'母'}
                            </div>
                            </Row>
                            <Row className="r_row">
                              <div className="r_row-item _text-1">{infolist[i+1].breed}</div>
                              <div className="r_row-item _text-1">{infolist[i+1].color}</div>
                            </Row>
                            <div className="content">{infolist[i+1].content}</div>
                            <Form onSubmit={handleAdopt}>
                              <Form.Control type="hidden" name="email" value="chien871101@gmail.com" />
                              <Form.Control type="hidden" name="pid" value={infolist[0].pid} />
                              <Button type="submit" variant="primary" className="know_more">
                                  <div className="know_more_text">{know_more_text}</div>
                              </Button>
                            </Form>
                    </Card.Body>
                  </Card>
                </Container>
              </Col>
              )}
          </Row>
        );
        cardDecks.push(cardDeck);
      }
    }
    return cardDecks;
  };
  useEffect(()=>{
    getInfo();
  },[]);
  return (
    <div>
    <TopNav/>
    <Container>
        <h1>領養媒合</h1>
        <Form>
          <Form.Group controlId="animal">
            <Form.Label>動物:</Form.Label>
            <Form.Select value={filterValues.animal} onChange={(e)=>setFilterValues({...filterValues,animal:e.target.value})}>
              <option value="">選擇</option>
              <option value="1">狗</option>
              <option value="2">貓</option>
              <option value="3">其他</option>
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="breed">
            <Form.Label>品種:</Form.Label>
            <Form.Select value={filterValues.breed} onChange={(e)=>setFilterValues({...filterValues,breed:e.target.value})}>
              <option value="">選擇</option>
              {breedValues.map((val) => (<option value={val}>{val}</option>))}
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="color">
            <Form.Label>花色:</Form.Label>
            <Form.Select value={filterValues.color} onChange={(e)=>setFilterValues({...filterValues,color:e.target.value})}>
              <option value="">選擇</option>
              {colorValues.map((val) =>(<option value={val}>{val}</option>))}
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="gender">
            <Form.Label>性別:</Form.Label>
            <Form.Select value={filterValues.gender} onChange={(e)=>setFilterValues({...filterValues,gender:e.target.value})}>
              <option value="">選擇</option>
              <option value="1">公</option>
              <option value="2">母</option>
            </Form.Select>
          </Form.Group>
          <br/>
          <Button onClick={()=>handleFilter(infos)}>篩選</Button>
          <br/>
          <span>{noMatchMessage}</span>
        </Form>
        <span></span>
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