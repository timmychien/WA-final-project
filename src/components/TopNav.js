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
                    首頁
                    </Nav.Link>
                    <Nav.Link as={Link} to="/animal">
                    動物保護
                    </Nav.Link>
                    <Nav.Link as={Link} to="/environment">
                    環境保護
                    </Nav.Link>
                    <Nav.Link as={Link} to="/campaign">
                    近期活動
                    </Nav.Link>
                    <Nav.Link as={Link} to="/partner">
                    合作夥伴
                    </Nav.Link>
                    <Nav.Link as={Link} to="/register">
                    加入我們
                    </Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
}
export default TopNav;