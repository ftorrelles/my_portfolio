import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "animate.css/animate.min.css";
import { useInView } from "react-intersection-observer";
import ContentGame from "./ContentGame";

const ContentAbout = () => {
  //logica libreria react-intersection-observer
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <>
      <section className="about">
        <Row xs={1} md={2} lg={2}>
          <Col lg={8}>
            <div className="div_infoDetail_about">
              <h2
                className={`animate__animated ${
                  inView ? "animate__fadeInDown" : ""
                } `}
                ref={ref}
              >
                About me
              </h2>

              <hr />
              <p
                className={`animate__animated ${
                  inView ? "animate__fadeInUp" : ""
                } `}
                ref={ref}
              >
                Full stack web developer with experience in projects using
                Angular, React.js, Redux, React Router DOM, React Hook Form,
                WordPress, Elementor, Axios, Bootstrap, Figma, and other
                front-end technologies. I have developed responsive, visually
                appealing interfaces and worked with design tools like Figma to
                translate mockups into functional user experiences. <br />
                <br /> In the back-end, I have worked with Node.js, Express.js
                and Sequelize CLI, implementing technologies such as Nodemailer,
                BCRYPT and Jsonwebtoken. With experience in creating complete
                APIs, managing controller and server architectures, as well as
                manipulating databases such as PostgreSQL and MySQL. <br />
                <br />
                In addition to my technical skills, I possess a strong ability
                to work in a team, demonstrated by leading regional recruitment
                teams of up to 7 people. My track record includes the effective
                management of KPIs, demonstrating the ability to work under
                pressure and the skill to learn quickly, contributing to both
                the technical and human success of the projects I lead.
              </p>
            </div>
          </Col>
          <Col
            className={`animate__animated ${
              inView ? "animate__fadeInUp" : ""
            } `}
            ref={ref}
            lg={4}
          >
            {/* <div className="div_img_about">
              <img src="/myPhoto3.png" alt="" />
            </div> */}
            <ContentGame />
            <br />

            <ul style={{ padding: "0", textAlign: "center" }}>
              <li>
                <span style={{ color: "#78a083" }}>Name: </span>
                Francisco Torrelles
              </li>

              <li>
                <span style={{ color: "#78a083" }}>Mail: </span>
                torrellesf93@gmail.com
              </li>
              <li>
                <span style={{ color: "#78a083" }}>Phone:</span>
                +57 304 3333955
              </li>
            </ul>

            <div className="div_icons_about">
              <a
                href="https://www.linkedin.com/in/francisco-torrelles-227771209/"
                target="_blank"
              >
                <i className="bx bxl-linkedin"></i>
              </a>

              <a href="https://wa.me/573043333955" target="_blank">
                <i className="bx bxl-whatsapp"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61568366147058"
                target="_blank"
              >
                <i className="bx bxl-facebook-circle"></i>
              </a>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default ContentAbout;
