import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ExperienceCardRecevedProps from './ExperienceCardRecevedProps'
import { BrowserRouter } from 'react-router-dom'

const Experience = () => {
  return (
    <BrowserRouter>
      <Container id='experience' className='my-4'>
          <Row>
              <div className='skill__content--heading m-auto text-center py-4'>
                  <h1>Experience</h1>
                  <p>My work experience as a frontend developer (React.js) and working on different more projects and Api integration.</p>
              </div>
              <Col sm='10' className='experience__content--section m-auto text-center py-4'>
                  <ExperienceCardRecevedProps title="Front-end Developer" company="Wb Softwars Ltd:" dateJob="March 3/1/2024" skillOption="Skills: • Html • Css • JavaScript • React.js • Bootstrap • Rest-Api • Firebase"/>
              </Col>
          </Row>
      </Container>
    </BrowserRouter>
  )
}

export default Experience