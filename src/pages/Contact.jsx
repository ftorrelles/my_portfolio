import { useForm } from "react-hook-form";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
const Contact = () => {
    const { register, handleSubmit, reset } = useForm();
    const [infoForm, setInfoForm] = useState("");

    const submit = (data) => {
        setInfoForm(data);
        reset();
    };
    return (
        <Row xs={1} md={2} lg={2}>
            <Col lg={7} style={{ padding: "1rem" }}>
                <h2 className="titles_contact">Formulario de contacto</h2>{" "}
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
            <Col lg={4} className="col_contactInfo">
                <h2 className="titles_contact">Mi informacion de contacto</h2>
                <h6>
                    Siempre disponible para trabajos independientes. No dude en
                    ponerse en contacto conmigo
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
                        +58 4125974805
                    </li>
                </ul>
                <div className=".div_icons_contact">
                    <a
                        href="https://www.linkedin.com/in/francisco-torrelles-227771209/"
                        target="_blank"
                    >
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a
                        href="https://www.facebook.com/francisco.alejandro.524"
                        target="_blank"
                    >
                        <i className="bx bxl-facebook-circle"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/francisco-torrelles-227771209/"
                        target="_blank"
                    >
                        <i className="bx bxl-twitter"></i>
                    </a>
                </div>
            </Col>
        </Row>
    );
};

export default Contact;
