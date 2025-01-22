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
            Contact Form
          </h2>{" "}
          <form onSubmit={handleSubmit(submit)}>
            <div className="form_field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="First and second name"
                {...register("name", { required: true })}
              />
            </div>
            <div className="form_field">
              <label htmlFor="email-input">Mail</label>
              <input
                type="email"
                id="email-input"
                placeholder="Mail"
                {...register("email", { required: true })}
              />
            </div>
            <div className="form_field">
              <label htmlFor="comment">Comments</label>
              <textarea
                rows="10"
                cols="50"
                name="comment"
                id="comment"
                placeholder="Leave me a comment to give me an idea of how I can help you."
                {...register("comment", { required: true })}
              ></textarea>
            </div>

            <button className="bt_contact">Send</button>
          </form>
        </Col>
        <Col
          lg={4}
          className={`col_contactInfo animate__animated ${
            inView ? "animate__fadeInUp" : ""
          } `}
          ref={ref}
        >
          <h2 className="titles_contact">My contact information</h2>
          <h6>Always available for freelance work. Feel free to contact me.</h6>
          <ul style={{ padding: "0" }}>
            <li>
              <span style={{ color: "#78a083" }}>Name: </span>
              Francisco Torrelles
            </li>
            <li>
              <span style={{ color: "#78a083" }}>Mail: </span>
              torrellesf93@gmail.com
            </li>
            <li>
              <span style={{ color: "#78a083" }}>Phone: </span>
              +57 304 3333955
            </li>
          </ul>
          <div className="div_icons_contact">
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
      <Notification
        {...notification}
        handleClose={() => setNotification({ ...notification, show: false })}
      />
    </>
  );
};

export default ContentContact;
