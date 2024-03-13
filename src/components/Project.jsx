import { Card, Col, Container, Row } from 'react-bootstrap'
import { IoMdLink } from "react-icons/io";
import { BrowserRouter } from 'react-router-dom';
const Project = () => {
  return (
    <BrowserRouter>
        <Container id='project' className='my-4'>
            <Row>
                <div className='skill__content--heading m-auto text-center py-4'>
                    <h1>Project</h1>
                    <p>I have worked on a wide range of projects. Here are some of my projects.</p>
                </div>
                <Col className='project__card--item mb-2 m-auto' sm='10' lg="4">
                    <Card style={{ width: 'auto' }}>
                        <Card.Img variant="top" src="image/chatting.png" />
                        <Card.Body>
                            <Card.Title>Realtime chatting apps</Card.Title>
                            <div>
                                Html • Tailwind-css • JavaScript • React.js • Firebase
                            </div>
                            <Card.Text>
                                <div className='live__link m-auto'>
                                    <p>live link</p>
                                    <p className='ms-2'><a href='https://monumental-yeot-a61ad5.netlify.app'><IoMdLink /></a></p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='project__card--item mb-2 m-auto' sm='10' lg="4">
                    <Card style={{ width: 'auto' }}>
                        <Card.Img variant="top" src="image/oreby.png" />
                        <Card.Body>
                            <Card.Title>Ecommerce Landing page</Card.Title>
                            <div>
                            React.js • Tailwind • Breadcumb • React-dom
                            </div>
                            <Card.Text>
                                <div className='live__link m-auto'>
                                    <p>live link</p>
                                    <p className='ms-2'><a href='https://65bb39fe1d51a93b8aa0b3d0--phenomenal-kelpie-1243a9.netlify.app'><IoMdLink /></a></p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='project__card--item mb-2 m-auto' sm='10' lg="4">
                    <Card style={{ width: 'auto' }}>
                        <Card.Img variant="top" src="image/inventory.png" />
                        <Card.Body>
                            <Card.Title>(MERN) Inventory Management </Card.Title>
                            <div>
                                React.js • Bootstrap • node.js • Express.js • Mongodb
                            </div>
                            <Card.Text>
                                <div className='live__link m-auto'>
                                    <div className='d-flex'>
                                        <p>Client</p>
                                        <p className='ms-2'><a href='https://github.com/HimuHimu112002/NEXT.JS-AND-PISMA-NEWS-APPLICATION'><IoMdLink /></a></p>
                                    </div>
                                    <div className='d-flex ms-4'>
                                        <p>Server</p>
                                        <p className='ms-2'><a href='https://github.com/HimuHimu112002/NEXT.JS-AND-PISMA-NEWS-APPLICATION'><IoMdLink /></a></p>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='project__card--item mb-2 m-auto' sm='10' lg="4">
                    <Card className='p-2' style={{ width: 'auto' }}>
                        <Card.Img variant="top" src="image/news.png" />
                        <Card.Body>
                            <Card.Title>Full stack news app (Next.js and prisma)</Card.Title>
                            <div>
                                Next.js • prisma • mySql • Tailwind • Hooks
                            </div>
                            <Card.Text>
                                <div className='live__link m-auto'>
                                    <p>Github link</p>
                                    <p className='ms-2'><a href='https://github.com/HimuHimu112002/NEXT.JS-AND-PISMA-NEWS-APPLICATION'><IoMdLink /></a></p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='project__card--item mb-2 m-auto' sm='10' lg="4">
                    <Card className='p-2' style={{ width: 'auto' }}>
                        <Card.Img variant="top" src="image/restaurant.png" />
                        <Card.Body>
                            <Card.Title>Full stack news app (Next.js and prisma)</Card.Title>
                            <div>
                                Html • Css • Bootstrap • Media-css • Jquery
                            </div>
                            <Card.Text>
                                <div className='live__link m-auto'>
                                    <p>live link</p>
                                    <p className='ms-2'><a href='https://himuhimu112002.github.io/Restaurant_Responsive/'><IoMdLink /></a></p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </BrowserRouter>
  )
}

export default Project