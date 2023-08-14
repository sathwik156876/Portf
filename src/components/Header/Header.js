import React from "react";
import Typical from "react-typical";
import "./Header.css";
import profileImg from "../../assets/profile.jpg";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <h1>Hii..Am</h1>
        <h2 className="fullname">SATHWIK REDDY </h2>
        <h2>
          I'm a{" "}
          <Typical
            steps={[
              "Full Stack Developer ✍️ ",
              1000,
              "Backend  Developer ✍️ ",
              1000,
              "Frontend Developer ✍️ ",
              1000,
              "React Developer ✍️ ",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p>
          I am adept at crafting visually appealing and responsive user
          interfaces.
        </p>
        <div className="header-payment-container">
          <button>Hire Me</button>
          {/*<i className="fa-brands fa-paypal"></i>*/}
        </div>
      </div>
      <div className="profile-img-container">
        <img src={profileImg} alt="profile" />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};

export default Header;
