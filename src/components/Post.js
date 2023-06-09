import {useState,React} from 'react';
import {Buffer} from 'buffer';
import './Post.css';
import { Form, Button, Container, Row, Col,Image} from 'react-bootstrap';
import ReactDOM from 'react-dom/client';
import TopNav from './TopNav';
import Footer from './Footer';
import {HashRouter as Router} from 'react-router-dom';
import { create } from 'ipfs-http-client'
const projectId = '2MOmFb8jLyjYDMhiVqOmEMmOpfn';
const projectSecret = 'ac2f110b95e4e6ff06469b5062e1d2ea';
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  apiPath: '/api/v0',
  headers: {
    authorization: auth,
  }
})
function Post() {
  const [animalname, setAnimalName] = useState('');
  //const [file,setFile]=useState(null);
  const [image, setImage] = useState('');
  const [animal,setAnimal]=useState('');
  const [breed, setBreed] = useState('');
  const [gender, setGender] = useState('');
  const [color,setColor]=useState('');
  const [content,setContent]=useState('');
  const retrieveFile = async(e) => {
    const file = e.target.files[0]
    if(file){
      try {
        const added = await client.add(file);
        const url = `https://webapp.infura-ipfs.io/ipfs/${added.path}`;
        console.log(url)
        setImage(url);
        console.log(image)     
      } catch (error) {
        console.log(error.message);
      }
    }else{
      console.log('upload failed')
    }
    e.preventDefault();  
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const AnimalName = formData.get("animalname");
    const Image = formData.get("image");
    const Animal = formData.get("animal");
    const Breed = formData.get("breed");
    const Gender = formData.get("gender");
    const Color = formData.get("color");
    const Content = formData.get("content");
    console.log(formData)
    if (AnimalName === '' || Image === '' || Animal === '' || Breed === '' || Gender === '' || Color === '') {
      window.alert('您尚未完成表單！');
    } else {
      const res = window.confirm('請確認資料是否輸入正確');
      if (res === true) {
        try {
          console.log(animalname,image,animal,breed,gender,color,content)
          const response=await fetch('http://localhost:8000/post', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
              username: "田勝傑",
              email: "tsj8787@gmail.com",
              animalname: animalname,
              path: image,
              animal: parseInt(animal),
              breed: breed,
              gender: parseInt(gender),
              color: color,
              content: content,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },            
          })
          if(response.ok){
            console.log(response)
            console.log('post request successful')
            window.alert('申請成功，表單已送出！')
            window.location.href = '/';
          }else{
            console.log('post request failed')
          }
        } catch (err) {
          console.log(err.message);
        }
      }
    }
  };  

  return (
    <div>
        <TopNav/>
        <Container fluid className="mt-2">
        <br/>
        <h2>發布認領文</h2><p>*為必填</p>
        <br/>
          <Row>
            <Col>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="w-100">
                <Form.Label htmlFor="name">名字*:</Form.Label>
                <Form.Control type="value" placeholder="請輸入名字" id="animalname" name="animalname" onChange={(e)=>setAnimalName(e.target.value)}/>
                <Form.Label htmlFor="image">圖片*:</Form.Label>
                <Form.Control type="file" id="image" name="image" onChange={retrieveFile}/>
                <img className="preview" src={image}></img><br/>
                <Form.Label htmlFor="animal">動物種類*:</Form.Label>
                <Form.Select value={animal} onChange={(e)=>setAnimal(e.target.value)}>
                    <option value="">請選擇</option>
                    <option value="1">狗</option>
                    <option value="2">貓</option>
                    <option value="3">其他</option>
                </Form.Select>
                <Form.Label htmlFor="breed">品種*:</Form.Label>
                <Form.Control type="value" placeholder="請輸入品種" id="breed" name="breed" onChange={(e)=>setBreed(e.target.value)}/>
                <Form.Label htmlFor="animal">性別*:</Form.Label>
                <Form.Select value={gender} onChange={(e)=>setGender(e.target.value)}>
                    <option value="">請選擇</option>
                    <option value="1">公</option>
                    <option value="2">母</option>
                </Form.Select>
                <Form.Label htmlFor="tel">花色*:</Form.Label>
                <Form.Control type="value" placeholder="請輸入花色" id="color" name="color" onChange={(e)=>setColor(e.target.value)}/>
                <Form.Label htmlFor="cotent">簡介:</Form.Label>
                <Form.Control as="textarea" rows="5" placeholder="介紹" id="content" name="content" onChange={(e)=>setContent(e.target.value)}/>
                </Form.Group>
                <br/>
                <Button type="submit" variant="outline-secondary">
                  提交
                </Button>
              </Form>
            </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}
let container = null;
document.addEventListener('DOMContentLoaded', function(event) {
    if (!container) {
      container = document.getElementById('root');
      const root = ReactDOM.createRoot(container);
      root.render(
        <Router>
          <Post/>
        </Router>
      );
    }
  });
export default Post;