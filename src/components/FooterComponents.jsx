import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebook,FaGithub,FaLinkedin} from "react-icons/fa";
const FooterComponents = () => {
  return (
    <div className='footer__main py-5'>
        <Container>
            <Row>
                <Col className='footer__section m-auto text-white' md="6">
                    <h1 className='text-center'>Aktarujjaman</h1>
                    <div className='footer__icon--mainsection'>
                        <div className='fsocial__icon shadow-sm'><a href=''><FaFacebook/></a></div>
                        <div className='fsocial__icon shadow-sm ms-3'><a href='https://www.linkedin.com/feed/'><FaLinkedin /></a></div>
                        <div className='fsocial__icon shadow-sm ms-3'><a href='https://github.com/HimuHimu112002?tab=repositories'><FaGithub/></a></div>
                    </div>
                    <p className='text-center'>@copyright: Aktarujjaman</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
export default FooterComponents