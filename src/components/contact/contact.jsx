
import styles from "./contact.module.css"

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';


const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const email = form.current.user_email.value;
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return; // Exit function if email is not valid
    }

    emailjs
      .sendForm(
        "service_0t6erx4",
        "template_1m1v62w",
        form.current,
        "4xPy-pvgh1atvGi3c"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent successfully");
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Get in Touch</h1>
      <form ref={form} onSubmit={sendEmail} id="contact" className={styles.contact}>
        <div className={styles.batch}>
          <label className={styles.name}>Name</label>
          <input type="text" name="user_name" className={styles.inputname} required />
        </div>
        <div className={styles.batch}>
          <label className={styles.name}>Email Address</label>
          <input type="email" name="user_email" className={styles.inputname} required />
        </div>
        <div className={styles.batch}>
          <label className={styles.name}>Message</label>
          <textarea name="message" className={styles.inputmessage} />
        </div>
        <button className={styles.submit} type="submit" value="Send" onClick={sendEmail}>
          Send
        </button>
      </form>
      <div className={styles.contactDetails}>
        <h2>Contact Details</h2>
        <ul>
          <li>Email: kpraneethaacharya@gmail.com</li>
          <li>Phone: 9353877528</li>
          <li>Address: Hoskote, Bengaluru, Karnataka, India</li>
        </ul>
      </div>
    </section>
  );
};

export default contact;

// Styles
