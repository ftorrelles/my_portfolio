import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "animate.css/animate.min.css";
import { useInView } from "react-intersection-observer";

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
                    <Col lg={9}>
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
                                <strong>Desarrollador web full stack</strong>{" "}
                                con experiencia en proyectos utilizando en el
                                front-end, React.js, Redux, React Router DOM,
                                React Hook Form, Axios y Bootstrap; he
                                implementado diversas librerías para mejorar la
                                experiencia del usuario, desde calendarios hasta
                                efectos visuales. <br />
                                <br /> En el back-end, he trabajado con Node.js,
                                Express.js y Sequelize CLI, implementando
                                tecnologías como Nodemailer, Bcrypt y
                                Jsonwebtoken. Con capacidad de crear APIs
                                completas, gestionando arquitecturas de
                                controladores y servidores, así como la
                                manipulación de bases de datos como PostgreSQL y
                                MySQL. <br />
                                <br />
                                Además de mis habilidades técnicas, poseo una
                                sólida capacidad de trabajo en equipo,
                                demostrada al liderar equipos regionales de
                                reclutamiento de hasta 7 personas. Mi historial
                                incluye la gestión efectiva de KPIs, demostrando
                                la capacidad de trabajar bajo presión y la
                                habilidad para aprender rápidamente,
                                contribuyendo al éxito tanto técnico como humano
                                de los proyectos que lidero. <br />
                                <br /> Estoy en constante capacitación para
                                seguir creciendo y preparado para aportar valor
                                a tu empresa.
                            </p>
                        </div>
                    </Col>
                    <Col
                        className={`animate__animated ${
                            inView ? "animate__fadeInUp" : ""
                        } `}
                        ref={ref}
                        lg={3}
                    >
                        <div className="div_img_about">
                            <img src="/myPhoto3.png" alt="" />
                        </div>
                        <ul style={{ padding: "0", textAlign: "center" }}>
                            <li>
                                <span style={{ color: "#ef8700" }}>
                                    Nombre:{" "}
                                </span>
                                Francisco Torrelles
                            </li>

                            <li>
                                <span style={{ color: "#ef8700" }}>
                                    Email:{" "}
                                </span>
                                torrellesf93@gmail.com
                            </li>
                            <li>
                                <span style={{ color: "#ef8700" }}>
                                    telefono:
                                </span>
                                +57 320 3510452
                            </li>
                        </ul>

                        <div className="div_icons_about">
                            <a
                                href="https://www.linkedin.com/in/francisco-torrelles-227771209/"
                                target="_blank"
                            >
                                <i className="bx bxl-linkedin"></i>
                            </a>

                            <a
                                href="https://wa.me/573203510452"
                                target="_blank"
                            >
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
