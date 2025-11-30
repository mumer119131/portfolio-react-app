'use client';

import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import DOODLE from '@/assets/doodles/person_using_comp.png';
import HEART_DOODLE from '@/assets/doodles/heart.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.current || !SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error('Configuration error');
      return;
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          toast.success('Message Sent!');
        },
        (error) => {
          toast.error('Some error occured');
          console.log(error);
        }
      );
    e.currentTarget.reset();
  };

  return (
    <div className="container contact__container" id="contact">
      <p>Get in touch with me</p>
      <h2>Contact Us</h2>
      <ToastContainer />
      <div className="contact__data__container">
        <div className="doodle__container" data-aos="flip-left">
          <Image src={DOODLE} alt="Contact" />
          <Image src={HEART_DOODLE} alt="Heart" className="doodle__heart" />
        </div>
        <form
          ref={form}
          className="contact__form__container"
          data-aos="fade-right"
          onSubmit={sendEmail}
        >
          <h3>Let&apos;s Talk</h3>
          <p>Fill in the required fields.</p>
          <input type="text" placeholder="Name" name="name" id="name" required />
          <input type="text" placeholder="Email" name="email" id="email" required />
          <input type="text" placeholder="Phone" name="phone" id="phone" required />
          <input type="text" placeholder="Message" name="message" id="message" required />
          <input type="submit" value="SEND" className="btn btn__primary" required />
        </form>
      </div>
    </div>
  );
};

export default Contact;
