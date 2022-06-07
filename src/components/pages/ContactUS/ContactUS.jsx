import EmailJS from '@emailjs/browser';
import React from 'react'

export const ContactUS = () => {

  const sendEmail = (event) => {
    event.preventDefault();

    EmailJS.sendForm('service_eegfwbl','template_xvnl0na',event.target,'dbBa3qXw4hsy-JxNN')
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }


  

  return (
    <div className="div-form">
      <h1 className="title-form">Contact US</h1>
      <form className="form-mail" onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name='user_name' />
        <hr />

        <label>Email</label>
        <input type="email" name='user_email' />
        <hr />

        <label>Message</label>
        <textarea name="user_message" id="" cols="30" rows="10"></textarea>
        <hr />
        <button>Send</button>
      </form>
    </div>
  )
}
