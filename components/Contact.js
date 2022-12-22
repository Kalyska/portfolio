import React from 'react'
import {BsLinkedin} from 'react-icons/bs'

const Contact = () => {
  return (
    <div id='contact'>
      <h3>Contact</h3><hr />
      <p>Vous pouvez me contacter via LinkedIn <a href='https://linkedin.com/in/clemence-guelque'><BsLinkedin /></a> ou par email :</p>
      <form action="">
        <div className="flex">
          <div className="row">
            <label for="inputName">Nom</label>
            <input type="text" id="inputName" required></input>
            <label for="inputEmail">Email</label>
            <input type="email" id="inputEmail" required></input>
          </div>
          <div className="row">
            <label for="textArea">Message</label>
            <textarea id="textArea" required rows="5"></textarea>
          </div>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  )
}

export default Contact