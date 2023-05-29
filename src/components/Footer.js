import { Container,Row,Col} from 'react-bootstrap';

function Footer(){
    return(
        <div>
            <Container fluid className="footer">
                <Row>
                    <Col className="text-center">
                    <p>
                        Copyright 2023 - All right Reserved
                    </p>
                    </Col>
                </Row>
            </Container>

        </div>
        
);
}
export default Footer;   