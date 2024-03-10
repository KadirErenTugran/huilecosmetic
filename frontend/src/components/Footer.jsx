import { Container, Row , Col } from 'react-bootstrap';

const Footer =() =>{
    let date=new Date();
    const currentYear=Intl.DateTimeFormat('default',{month:'long', year:'numeric',}).format(date);
    return(
    <footer className=' text-dark'>
        <Container>
            <Row>
                <Col className='text-center'>
                    <p>Huile Cosmetic &copy; {currentYear} </p>
                </Col>
            </Row>
        </Container>
    </footer>
    )



}
export default Footer;