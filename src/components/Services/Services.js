import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div className="services-container">
      <div classNmae="services-list-container">
        <div className="services-desc-container">
          <h1>
            About My <span> Skills</span>
          </h1>
          <p>
            Throughout my academic journey from 2019 to 2023, I have gained a
            solid foundation in various aspects of computer science, with a
            particular focus on JavaScript, HTML, CSS, ReactJS, and AngularJS. I
            have developed a strong proficiency in JavaScript, utilizing it to
            create dynamic and interactive web applications. With a solid
            understanding of HTML and CSS, I am adept at crafting visually
            appealing and responsive user interfaces.
          </p>

          <button>Hire Me</button>
        </div>
        <div className="service-item-container">
          <div className="services-item">
            <i className="fa-solid fa-code"></i>
            <div className="item-desc">
              <h3>FullStack Development</h3>
              <p>
                I have developed a strong proficiency in JavaScript, utilizing
                it to create dynamic and interactive web applications. With a
                solid understanding of HTML and CSS, I am adept at crafting
                visually appealing and responsive user interfaces.
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-cloud"></i>
            <div className="item-desc">
              <h3>AWS Cloud Platform</h3>
              <p>
                I have experience working with popular frameworks such as
                ReactJS and AngularJS, leveraging their capabilities to build
                robust and scalable web applications. In addition to my
                technical skills, I am proud to have achieved an AWS Global
                Certification, demonstrating my knowledge and expertise in cloud
                computing. This certification validates my understanding of AWS
                services, architectural best practices, and the ability to
                design and implement secure and scalable solutions on the AWS
                platform..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
