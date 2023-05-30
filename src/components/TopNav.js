import { Container,Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
//import Clock from './Clock';
function TopNav(){
    return(
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand>
                <img
                    src="https://www.gov.taipei/Images/major_logo.png"
                    alt="Taipei City Government"
                />
                </Navbar.Brand>
                <Container>
                <Nav>
                    <Nav.Link as={Link} to="/">
                    領養媒合
                    </Nav.Link>
                    <Nav.Link as={Link} to="/post">
                    發布貼文
                    </Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
}
export default TopNav;