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
                Acerca de mi
              </h2>

              <hr />
              <p
                className={`animate__animated ${
                  inView ? "animate__fadeInUp" : ""
                } `}
                ref={ref}
              >
                <strong>Desarrollador web full stack</strong> con experiencia en
                proyectos utilizando en el front-end, React.js, Next.js, Redux,
                React Router DOM, React Hook Form, Axios y Bootstrap; he
                implementado diversas librerías para mejorar la experiencia del
                usuario, desde calendarios hasta efectos visuales. <br />
                <br /> En el back-end, he trabajado con Node.js, Express.js y
                Sequelize CLI, implementando tecnologías como Nodemailer, Bcrypt
                y Jsonwebtoken. Con capacidad de crear APIs completas,
                gestionando arquitecturas de controladores y servidores, así
                como la manipulación de bases de datos como PostgreSQL y MySQL.{" "}
                <br />
                <br />
                Además de mis habilidades técnicas, poseo una sólida capacidad
                de trabajo en equipo, demostrada al liderar equipos regionales
                de reclutamiento de hasta 7 personas. Mi historial incluye la
                gestión efectiva de KPIs, demostrando la capacidad de trabajar
                bajo presión y la habilidad para aprender rápidamente,
                contribuyendo al éxito tanto técnico como humano de los
                proyectos que lidero. <br />
                <br /> Estoy en constante capacitación para seguir creciendo y
                preparado para aportar valor a tu empresa. Una de mis mayores
                fortalezas es la capacidad de crear cosas nuevas y diferentes.
                me gustaria que me conocieras mientras demuestras tus
                capacidades jugando 3 en linea.
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
                <span style={{ color: "#78a083" }}>Nombre: </span>
                Francisco Torrelles
              </li>

              <li>
                <span style={{ color: "#78a083" }}>Email: </span>
                torrellesf93@gmail.com
              </li>
              <li>
                <span style={{ color: "#78a083" }}>telefono:</span>
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
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default ContentAbout;
