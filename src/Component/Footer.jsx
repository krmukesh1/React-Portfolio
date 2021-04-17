import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      {/* footer */}
      <footer class="footer ">
        <div class="footer-header">Social media presence</div>
        <ul class="social-links list-non-bullet">
          <li class="list-item-inline">
            {" "}
            <a class="link" href="https://github.com/krmukesh1">
              github
            </a>
          </li>
          <li class="list-item-inline">
            <a class="link" href="https://twitter.com/Mukku_51">
              twitter
            </a>
          </li>
          <li class="list-item-inline">
            <a
              class="link"
              href="https://www.linkedin.com/in/mukesh-kumar-286162141/"
            >
              linkedin
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};
export default Footer;
