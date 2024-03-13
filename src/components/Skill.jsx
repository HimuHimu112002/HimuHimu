import { Col, Container, Row } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'
const Skill = () => {
  return (
    <BrowserRouter>
        <Container id='skill' className='py-5'>
            <div className='skill__content--heading m-auto text-center py-4'>
                <h1>Skills</h1>
                <p>Here are some of my skills on which I have been working on for the past 1 years.</p>
            </div>
            <Row className='m-auto'>
                <Col className=' rounded m-auto ' md="6">
                    <Row className='feature m-auto text-center border py-4'>
                        <div className='features__hover'></div>
                        <h1 className='text-center'>Frontend</h1>
                        <Col className='m-auto' sm={6} md={10}>
                        <div className='know_items'>JAVASCRIPT</div>
                        </Col>

                        <Col className='m-auto' sm={6} md={10}>
                        <div className='know_items'>TYPESCRIPT</div>
                        </Col>

                        <Col className='m-auto' sm={6} md={10}>
                        <div className='know_items'>REACT.JS</div>
                        </Col>

                        <Col className='m-auto' sm={6} md={10}>
                        <div className='know_items'>NEXT.JS</div>
                        </Col>

                        <Col className='m-auto' sm={6} md={10}>
                        <div className='know_items'>BOOTSTRAP</div>
                        </Col>

                        <Col className='m-auto' sm={6} md={10}>
                        <div className='know_items'>TAILWIND-CSS</div>
                        </Col>
                    </Row>
                </Col>
                <Col className='rounded' md="6">
                    <Row className='m-auto text-center border feature py-4'>
                    <div className='features__hover'></div>
                        <h1 className='text-center'>Backend</h1>
                        <Col  className='m-auto' sm={6} md={10}>
                        <div className='know_items'>NODE.JS</div>
                        </Col>

                        <Col className='m-auto' sm={6} md={10}>
                        <div className='know_items'>EXPRESS.JS</div>
                        </Col>

                        <Col className='m-auto' sm={6} md={10}>
                        <div className='know_items'>REST-API</div>
                        </Col>

                        <Col className='m-auto' sm={6} md={10}>
                        <div className='know_items'>MONGODB</div>
                        </Col>

                        <Col className='m-auto' sm={6} md={10}>
                        <div className='know_items'>FIREBASE</div>
                        </Col>

                        <Col className='m-auto' sm={6} md={10}>
                        <div className='know_items'>PRISMA</div>
                        </Col>
                    </Row>
                </Col>
                <Col className='rounded m-auto mt-3' md="6">
                    <Row className='m-auto text-center border feature py-4'>
                    <div className='features__hover'></div>
                        <h1 className='text-center'>Other's</h1>
                        <Col  className='m-auto' sm={6} md={10}>
                        <div className='know_items'>GIT</div>
                        </Col>

                        <Col className='m-auto' sm={6} md={10}>
                        <div className='know_items'>GITHUB</div>
                        </Col>

                        <Col className='m-auto' sm={6} md={10}>
                        <div className='know_items'>NETLIFY</div>
                        </Col>

                        <Col className='m-auto' sm={6} md={10}>
                        <div className='know_items'>VS-CODE</div>
                        </Col>

                        <Col className='m-auto' sm={6} md={10}>
                        <div className='know_items'>POSTMAN</div>
                        </Col>

                        <Col className='m-auto' sm={6} md={10}>
                        <div className='know_items'>FIGMA</div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </BrowserRouter>
  )
}

export default Skill