import React, { useRef } from 'react'
import './index.css'
import { MdOutlineEmail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef()

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        'service_8s0hl98',
        'template_zbgdsou',
        form.current,
        'jeVc5uXyheImYxqb_'
      );

      e.target.reset();
      alert('Your message has been sent!');
    } catch (error) {
      alert('An error occurred, please try again later.');
      console.error(error);
    }
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option--icon' />
            <h4>Email</h4>
            <h5>ben7152000@gmail.com</h5>
            <a href="mailto:ben7152000@gmail.com" target='_blank' rel='noreferrer'>Send a message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option--icon' />
            <h4>Messenger</h4>
            <h5>ben7152000</h5>
            <a href="https://m.me/ben7152000" target='_blank' rel='noreferrer'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option--icon' />
            <h4>WhatsApp</h4>
            <h5>+886-915-768-987</h5>
            <a href="https://api.whatsapp.com/send?phone=+886915768987" target='_blank' rel='noreferrer'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
