import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      {/* footer */}
      <footer className="footer ">
        <div className="footer-header">Social media presence</div>
        <ul className="social-links list-non-bullet">
          <li className="list-item-inline">
            {" "}
            <a className="link" href="https://github.com/krmukesh1">
              github
            </a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="https://twitter.com/Mukku_51">
              twitter
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              href="https://www.linkedin.com/in/mukesh-kumar-286162141/"
            >
              linkedin
            </a>
          </li>
        </ul>
        <div className="footer-header">Contact Us</div>
        <ul className="social-links list-non-bullet contact">
          <li className="list-item-inline">
            <a>7500419443</a>
          </li>
          <li className="list-item-inline">
            <a>krmukeshsingh51@gmail.com</a>
          </li>
          <li className="list-item-inline">
            <a>Vijay Nagar Indore, 452010</a>
          </li>
        </ul>
      </footer>
    </>
  );
};
export default Footer;
