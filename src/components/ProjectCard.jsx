import React from 'react'
import { Card } from 'react-bootstrap'
import { IoMdLink } from 'react-icons/io'

const ProjectCard = (props) => {
  return (
    <Card className='p-2' style={{ width: 'auto' }}>
      <Card.Img variant="top" src="image/restaurant.png" />
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <div>
            <ul className='project__item'>
                <li>Html</li>
                <li>Css</li>
                <li>Bootstrap</li>
                <li>Media-css</li>
                <li>Jquery</li>
            </ul>
        </div>
        <Card.Text>
            <div className='live__link m-auto'>
                <p>live link</p>
                <p className='ms-2'><a href='https://himuhimu112002.github.io/Restaurant_Responsive/'><IoMdLink /></a></p>
            </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProjectCard