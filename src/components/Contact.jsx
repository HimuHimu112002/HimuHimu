import { useState } from 'react'
import { Col, Container, Row,Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsPhone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { BrowserRouter } from 'react-router-dom';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    let [userName, setuserName] = useState("")
    let [userEmail, setuserEmail] = useState("")
    let [userSubject, setuserSubject] = useState("")
    let [userSms, setuserSms] = useState("")

    let [userNameerror, setuserNameerror] = useState("")
    let [userEmailerror, setuserEmailerror] = useState("")
    let [usersubjecterror, setusersubjecterror] = useState("")
    let [usersmserror, setusersmserror] = useState("")

    let handleName = (e)=>{
        setuserName(e.target.value)
        setuserNameerror("")
    }
    let handlEmal = (e)=>{
        setuserEmail(e.target.value)
        setuserEmailerror("")
    }
    let handlesubject = (e)=>{
        setuserSubject(e.target.value)
        setusersubjecterror("")
    }
    let handleSms= (e)=>{
        setuserSms(e.target.value)
        setusersmserror("")
    }

    let handleSend =()=>{
        if(!userName){
            setuserNameerror("Please Input Your Name Here !")
        }
        if(!userEmail){
            setuserEmailerror("Please Input Your Email Here !")
        }
        if(!userSubject){
            setusersubjecterror("Please Input Your Subject Here !")
        }
        if(!userSms){
            setusersmserror("Please Input Your Message Here !")
        }
        if(userName && userEmail && userSubject && userSms){
            setTimeout(()=>{
                toast.success("Successfully Submited.");
            },1000)                      
        }
    }

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_of9amvj', 'template_hw84oib', form.current, {
        publicKey: 'PxQ2u1BzgK3mvhEAL',
      })
      .then(
        () => {
            toast.success("Successfully Submited.");
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
return (
    <>
        <BrowserRouter>
            <ToastContainer position="bottom-center" theme="dark"/>
            <Container id='contact' className='rounded shadow-sm my-4'>
                <Row className='mt-5 px-5 contact_bg'>
                    <div className='skill__content--heading text-center'>
                        <h1>CONTACT WITH ME</h1> 
                    </div>

                    <div className='contact_info mt-5'>
                        <div>
                            <h4>Phone Number</h4>
                            <div className='contact_icon'>
                                <BsPhone></BsPhone>
                                <p>01637244543</p>
                            </div>
                            <div className='contact_icon'>
                                <BsPhone></BsPhone>
                                <p>01733571516</p>
                            </div>
                        </div>

                        <div className='m-auto'>
                            <h4>Email Address</h4>
                            <div className='contact_icon'>
                                <AiOutlineMail></AiOutlineMail>
                                <p className='email'>mdhmaktaruzzaman9101@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <Col className='m-auto mb-4' md="6">
                        <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label><br/>
                        <input type="text" name="user_name" required/><br/>
                        <label>Email</label><br/>
                        <input type="email" name="user_email"  required/><br/>
                        <label>Message</label>,<br/>
                        <textarea name="user_message" required/>
                        <input type="submit" value="Send" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </BrowserRouter>
    </>
  )
}

export default Contact