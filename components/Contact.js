import React from 'react'

const Contact=()=>{
  return (
    <div id='contact'>
        <h3>Contact</h3>
        Vous pouvez me contacter via LinkedIn ou email.
        {/* ajouter icon et lien linkedin */}
        <strong>Envoyer un email</strong>
        <form action="">
            <label for="inputName">Nom</label>
            <input type="text" id="inputName" required></input>
            <label for="inputEmail">Email</label>
            <input type="email" id="inputEmail" required></input>
            <label for="textArea">Message</label>
            <textarea id="textArea" required></textarea>
            <button type="submit">Envoyer</button>
        </form>
    </div>
  )
}

export default Contact