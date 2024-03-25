import { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap'
import { IoMdLink } from "react-icons/io";
import { BrowserRouter } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
const Project = () => {
    let [bikroy, setBikroy] = useState(false)
    let [bootstrap, setBootstrap] = useState(false)
    let [next, setNext] = useState(false)
    let [inventory, setInventory] = useState(false)
    let [tailwind, setTailwind] = useState(false)
    let [chat, setChat] = useState(false)
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
                                <p onClick={()=>setChat(!chat)} className='discription'>see more <BsArrowRight/></p>
                                {chat && 
                                    <h5 className='card__discription'><strong>Features:</strong>
                                    This is Realtime chatting app for users.
                                    <ul>
                                        <li>Registration</li>
                                        <li>Login</li>
                                        <li>Logout</li>
                                        <li>Profile image upload</li>
                                        <li>Friend request send and accept</li>
                                        <li>Friend block and unblock</li>
                                        <li>User search</li>
                                        <li>Chatting with Friend</li>
                                        <li>Send voice, imoji, picture</li>
                                        <li>Open camera and send picture</li>
                                        <li>Setting and notification</li>
                                    </ul>
                                    </h5>
                                }
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
                                <p onClick={()=>setTailwind(!tailwind)} className='discription'>see more <BsArrowRight/></p>
                                {tailwind && 
                                    <h5 className='card__discription'><strong>Features: More page manage using react-dom and outlate, Page Breadcumb, React-pagination, Json-data, Product Filter</strong> </h5>
                                }
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
                                        <p className='ms-2'><a href='https://github.com/HimuHimu112002/Inventory_Frontend'><IoMdLink /></a></p>
                                    </div>
                                    <div className='d-flex ms-4'>
                                        <p>Server</p>
                                        <p className='ms-2'><a href='https://github.com/HimuHimu112002/Inventory_Server'><IoMdLink /></a></p>
                                    </div>
                                </div>
                                <p onClick={()=>setInventory(!inventory)} className='discription'>see more <BsArrowRight/></p>
                                {inventory && 
                                    <h5 className='card__discription'><strong>Discription:</strong> Multi-users can create an account and manage profile and dashboard. If you don't login to this site you can't access the dashboard Logging user planning and manage your business role and calculate. You can manage your employe. User only can delete and edit business and employe management. User only see her monthly total expense, total sole, total purchase and total return product chart and at last you can logout</h5>
                                }
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='project__card--item mb-2 m-auto' sm='10' lg="4">
                    <Card className='p-2' style={{ width: 'auto' }}>
                        <Card.Img variant="top" src="image/news.png" />
                        <Card.Body>
                            <Card.Title>(NEXT.JS, PRISMA) Full stack news app</Card.Title>
                            <div>
                                Next.js • prisma • mySql • Tailwind • Hooks
                            </div>
                            <Card.Text>
                                <div className='live__link m-auto'>
                                    <p>Github link</p>
                                    <p className='ms-2'><a href='https://github.com/HimuHimu112002/NEXT.JS-AND-PISMA-NEWS-APPLICATION'><IoMdLink /></a></p>
                                </div>
                                <p onClick={()=>setNext(!next)} className='discription'>see more <BsArrowRight/></p>
                                {next && 
                                    <h5 className='card__discription'><strong>Features:</strong>
                                        Authentication, Product search, Product Category, Product details, NewsLetters and subscription, User Comment, Otp verificaton with email, Logout.
                                    </h5>
                                    
                                }
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='project__card--item mb-2 m-auto' sm='10' lg="4">
                    <Card className='p-2' style={{ width: 'auto' }}>
                        <Card.Img variant="top" src="image/restaurant.png" />
                        <Card.Body>
                            <Card.Title>Bootstrap Landing Page design</Card.Title>
                            <div>
                                Html • Css • Bootstrap • Media-css • Jquery
                            </div>
                            <Card.Text>
                                <div className='live__link m-auto'>
                                    <p>live link</p>
                                    <p className='ms-2'><a href='https://himuhimu112002.github.io/Restaurant_Responsive/'><IoMdLink /></a></p>
                                </div>
                            <p onClick={()=>setBootstrap(!bootstrap)} className='discription'>see more <BsArrowRight/></p>
                            {bootstrap && 
                                <h5 className='card__discription'><strong>Discription:</strong>This Restaurant project is a static more section website. 
                                <ul>
                                    <li>All devices responsive</li>
                                    <li>Jquery animation plugin</li>
                                    <li>Jquery AOS animation</li>
                                </ul>
                                </h5>
                            }
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='project__card--item mb-2 m-auto' sm='10' lg="4">
                    <Card className='p-2' style={{ width: 'auto' }}>
                        <Card.Img variant="top" src="image/restaurant.png" />
                        <Card.Body>
                            <Card.Title>(MERN) Bikroy.com Online Product Sell</Card.Title>
                            <div>
                                React • Node • Express • Mongodb • Sslcommerce
                            </div>
                            <Card.Text>
                                <div className='live__link m-auto'>
                                    <div className='d-flex'>
                                        <p>Client</p>
                                        <p className='ms-2'><a href='https://github.com/HimuHimu112002/Online_Food_Delivery_Client'><IoMdLink /></a></p>
                                    </div>
                                    <div className='d-flex ms-4'>
                                        <p>Server</p>
                                        <p className='ms-2'><a href='https://github.com/HimuHimu112002/Online_Food_Delivery_Server'><IoMdLink /></a></p>
                                    </div>
                                </div>
                                <p onClick={()=>setBikroy(!bikroy)} className='discription'>see more <BsArrowRight/></p>
                                {bikroy && 
                                    <h5 className='card__discription'><strong>Discription:</strong> Multi-users can create an account and manage her profile and dashboard. If you don't log in to this site you can't access the product-order page Logging user creates a product and this product access her dashboard. User only can delete and edit personal created product but can't delete and edit other's user created product. User only AddToCart and wishlist othre's user created product but her personal create product can't AddToCart and wishlist then check out your product with <strong>(PAYMENT WITH SSL COMMERCE)</strong> then you can visit invoice page and invoice product page and at last you can logout</h5>
                                }
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