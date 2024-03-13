import { Button, Col, Container, Row } from 'react-bootstrap'
import { FaFacebook,FaGithub,FaLinkedin} from "react-icons/fa";
import { BrowserRouter } from 'react-router-dom';
const Banner = () => {
  return (
    <BrowserRouter>
        <Container className='my-5' id='banner'>
            <Row>
                <Col className='banner__left--content m-auto' sm="12" md="6">
                    <h1>Hi, I am
                    Aktarujjaman</h1>

                    <h4>I am a MERN Stack Developer </h4>
                    
                    <p> As a MERN STACK Developer, I am like design and develop web application. I use my knowledge and expertise to create modern applications that are both efficient and elegant.</p>

                    <a href='https://drive.google.com/file/d/1MiR3LL2NNCNsxwMPvh1lp_-MQT_EQUH6/view?usp=drive_link'><Button className='banner__left--butotn' >Check Resume</Button></a>
                    <div className='social__icon--mainsection'>
                        <div className='social__icon shadow-sm'><a href='https://www.facebook.com/mdhimu.humu?mibextid=ZbWKwL'><FaFacebook/></a></div>
                        <div className='social__icon shadow-sm ms-3'><a href='https://www.linkedin.com/feed/'><FaLinkedin /></a></div>
                        <div className='social__icon shadow-sm ms-3'><a href='https://github.com/HimuHimu112002?tab=repositories'><FaGithub/></a></div>
                    </div>
                </Col>
                <Col className='m-auto text-center' sm="12" md="6">
                    <div className='profile__image--cercel'>
                        <img className='img-fluid' src='image/profile.png' alt='profile'/>
                    </div>
                </Col>
            </Row>
        </Container>
    </BrowserRouter>
  )
}

export default Banner