import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {BsLinkedin} from 'react-icons/bs';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID, form.current, process.env.YOUR_PUBLIC_KEY)
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
            <label for="inputName">Nom</label>
            <input type="text" id="inputName" name="user_name" required></input>
            <label for="inputEmail">Email</label>
            <input type="email" id="inputEmail" name="user_email" required></input>
          </div>
          <div className="row">
            <label for="textArea">Message</label>
            <textarea id="textArea" name="message" required rows="5"></textarea>
          </div>
        </div>
        <button type="submit" value="Send">Envoyer</button>
      </form>
    </div>
  )
}

export default Contact