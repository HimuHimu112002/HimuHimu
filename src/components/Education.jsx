import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ExperienceCardRecevedProps from './ExperienceCardRecevedProps'

const Education = () => {
  return (
    <Container className='my-4'>
        <Row>
            <div className='skill__content--heading m-auto text-center py-4'>
                <h1>Education</h1>
                <p>My education has been a journey of self-discovery and growth. My educational details are as follows.</p>
            </div>
            <Col sm='10' className='experience__content--section m-auto text-center py-4'>
                <ExperienceCardRecevedProps title="Bangladesh University of Business and Information Technology" company="Bachelor of Computer Science and Engineering" skillOption="I am currently in the last year of study for a Bachelor's in Computer Science and Engineering at Bangladesh University of Business and Information Technology.I have completed 9 semesters and achieved a CGPA of 3.43 out of 4.00. During my time at Bangladesh University of Business and Information Technology, I have successfully completed courses in subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others."/>
            </Col>
        </Row>
    </Container>
  )
}

export default Education