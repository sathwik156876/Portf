import React from "react";
import logo from "../../assets/logo.png";
import "./Footer.css";
//import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>

      {/* copyright */}
      <div className="footer-cpyright">
        <p>© 2023 .SATHWIK REDDY All Right reserved</p>
      </div>
      {/* social */}

      <ul className="footer-social-media">
        <li>
          <a href="https://github.com/sathwik156876/">
            <i class="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/its_sai_26/">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/sathwik-reddy-220745213/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
