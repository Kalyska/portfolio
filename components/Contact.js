import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {BsLinkedin} from 'react-icons/bs';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_q9rvdbb', 'template_9vu2mlh', form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id='contact'>
      <h3>Contact</h3><hr />
      <p>Vous pouvez me contacter via LinkedIn <a href='https://linkedin.com/in/clemence-guelque'><BsLinkedin /></a> ou par email :</p>
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex">
          <div className="row">
            <label htmlFor="user_name">Nom</label>
            <input type="text" id="user_name" required></input>
            <label htmlFor="user_email" >Email</label>
            <input type="email" id="user_email" required></input>
          </div>
          <div className="row">
            <label htmlFor="message">Message</label>
            <textarea id="message" required rows="5"></textarea>
          </div>
        </div>
        <button type="submit" value="Send">Envoyer</button>
      </form>
    </div>
  )
}

export default Contact