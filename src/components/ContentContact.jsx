import { useForm } from "react-hook-form";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "../utils/axios";
import Notification from "../components/Notofication";

import "animate.css/animate.min.css";
import { useInView } from "react-intersection-observer";

const ContentContact = () => {
    const { register, handleSubmit, reset } = useForm();
    // const [infoForm, setInfoForm] = useState("");
    const [notification, setNotification] = useState({
        show: false,
        variant: "",
        message: "",
    });

    //logica libreria react-intersection-observer
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const submit = (data) => {
        // setInfoForm(data);
        reset();
        axios
            .post("/emails/contact", data)
            .then(() => {
                setNotification({
                    show: true,
                    variant: "success",
                    message: "Message sent!",
                });
                window.scrollTo(0, 0); // Desplazar la página hacia arriba
            })
            .catch(() => {
                setNotification({
                    show: true,
                    variant: "danger",
                    message: "There was an error",
                });
                window.scrollTo(0, 0); // Desplazar la página hacia arriba
            });
    };
    return (
        <>
            <Row xs={1} md={2} lg={2}>
                <Col lg={7} style={{ padding: "1rem" }}>
                    <h2
                        className={`titles_contact animate__animated ${
                            inView ? "animate__fadeInDown" : ""
                        } `}
                        ref={ref}
                    >
                        Formulario de contacto
                    </h2>{" "}
                    <form onSubmit={handleSubmit(submit)}>
                        <div className="form_field">
                            <label htmlFor="name">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="nombre y apellido"
                                {...register("name", { required: true })}
                            />
                        </div>
                        <div className="form_field">
                            <label htmlFor="email-input">Email</label>
                            <input
                                type="email"
                                id="email-input"
                                placeholder="Email"
                                {...register("email", { required: true })}
                            />
                        </div>
                        <div className="form_field">
                            <label htmlFor="comment">Comentarios</label>
                            <textarea
                                rows="10"
                                cols="50"
                                name="comment"
                                id="comment"
                                placeholder="Dejame un comentario para tener una idea de como ayudarte"
                                {...register("comment", { required: true })}
                            ></textarea>
                        </div>

                        <button className="bt_contact">enviar</button>
                    </form>
                </Col>
                <Col
                    lg={4}
                    className={`col_contactInfo animate__animated ${
                        inView ? "animate__fadeInUp" : ""
                    } `}
                    ref={ref}
                >
                    <h2 className="titles_contact">
                        Mi informacion de contacto
                    </h2>
                    <h6>
                        Siempre disponible para trabajos independientes. No dude
                        en ponerse en contacto conmigo
                    </h6>
                    <ul style={{ padding: "0" }}>
                        <li>
                            <span style={{ color: "#ef8700" }}>Nombre: </span>
                            Francisco Torrelles
                        </li>
                        <li>
                            <span style={{ color: "#ef8700" }}>Email: </span>
                            torrellesf93@gmail.com
                        </li>
                        <li>
                            <span style={{ color: "#ef8700" }}>telefono:</span>
                            +57 320 3510452
                        </li>
                    </ul>
                    <div className="div_icons_contact">
                        <a
                            href="https://www.linkedin.com/in/francisco-torrelles-227771209/"
                            target="_blank"
                        >
                            <i className="bx bxl-linkedin"></i>
                        </a>

                        <a href="https://wa.me/573203510452" target="_blank">
                            <i className="bx bxl-whatsapp"></i>
                        </a>
                    </div>
                </Col>
            </Row>
            <Notification
                {...notification}
                handleClose={() =>
                    setNotification({ ...notification, show: false })
                }
            />
        </>
    );
};

export default ContentContact;
