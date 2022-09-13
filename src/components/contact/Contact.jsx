import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import DOODLE from '../../assets/doodles/person_using_comp.png'
import HEART_DOODLE from '../../assets/doodles/heart.png'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const form = useRef()
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
  
  
  const sendEmail = (e) =>{
    e.preventDefault();
    console.log(process.env);
    console.log(TEMPLATE_ID, SERVICE_ID, PUBLIC_KEY)
    emailjs.sendForm(`${SERVICE_ID}`,`${TEMPLATE_ID}`,form.current, `${PUBLIC_KEY}`)
      .then((result) => {
          toast.success('Message Sent!')
      }, (error) => {
          toast.error('Some error occured')
          console.log(error);
      });
      e.target.reset()
  }
  return (
    <div className="container contact__container" id='contact'>
      <p>Get in touch with me</p>
      <h2>Contact Us</h2>
      <ToastContainer />
      <div className="contact__data__container">
        <div className="doodle__container" data-aos='flip-left'>
          <img src={DOODLE} alt="" />
          <img src={HEART_DOODLE} alt="" className='doodle__heart'/>
        </div>
        <form ref={form} className="contact__form__container" data-aos='fade-right' onSubmit={sendEmail}>
          <h3>Let's Talk</h3>
          <p>Fill in the required fields.</p>
          <input type="text" placeholder='Name'  name='name' id="name" required/>
          <input type="text" placeholder='Email'  name='email' id="email" required/>
          <input type="text" placeholder='Phone'  name='phone' id='phone' required/>
          <input type="text" placeholder='Message'  name='message' id='message' required/>
          <input type="submit" value='SEND' className='btn btn__primary' required/>
        </form>
      </div>
    </div>
  )
}

export default Contact
