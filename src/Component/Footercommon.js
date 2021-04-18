import React from "react";

export const Footercommon = (props) => {
  return (
    <>
      {/* footer */}
      <footer className="footer ">
        <div className="footer-header">Social media presence</div>
        <ul className="social-links list-non-bullet">
          <li className="list-item-inline">
            {" "}
            <a className="link" href={props.link1}>
              github
            </a>
          </li>
          <li className="list-item-inline">
            <a className="link" href={props.link2}>
              twitter
            </a>
          </li>
          <li className="list-item-inline">
            <a className="link" href={props.link3}>
              linkedin
            </a>
          </li>
        </ul>
        <div className="footer-header">Contact Us</div>
        <ul className="social-links list-non-bullet contact">
          <li className="list-item-inline">
            <a>{props.phone}</a>
          </li>
          <li className="list-item-inline">
            <a>{props.email}</a>
          </li>
          <li className="list-item-inline">
            <a>{props.address}</a>
          </li>
        </ul>
      </footer>
    </>
  );
};
export default Footercommon;
