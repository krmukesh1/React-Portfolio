import React, { useState } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    msg: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ej1aaip",
        "template_5wpdkwy",
        e.target,
        "e8xvcI-_oe_aaIslJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Back to You");
          setData({
            name: "",
            phone: "",
            email: "",
            msg: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="container container-center">
        <h1 className="contact">Contact Us</h1>
        <form onSubmit={formSubmit}>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            onChange={InputEvent}
            value={data.name}
            id="name"
            name="name"
          />
          <br />
          <label htmlFor="phone">Phone:</label>
          <br />
          <input
            type="phone"
            onChange={InputEvent}
            value={data.phone}
            id="phone"
            name="phone"
          />
          <br />
          <label htmlFor="Email">Email:</label>
          <br />
          <input
            type="email"
            onChange={InputEvent}
            value={data.email}
            id="email"
            name="email"
          />
          <br />
          <label htmlFor="message">Message:</label>
          <br />
          <input
            type="textarea"
            onChange={InputEvent}
            value={data.msg}
            id="msg"
            name="msg"
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};
export default Contact;
