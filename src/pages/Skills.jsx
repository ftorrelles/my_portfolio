import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
const Skills = () => {
    return (
        <>
            <div>
                <h2 className="title_skills">Mis habilidades</h2>
                <div
                    style={{
                        position: "absolute",
                        top: "6rem",
                        right: "1rem",
                    }}
                >
                    <ListGroup horizontal>
                        <ListGroup.Item
                            className="bt_top"
                            as={Link}
                            to="/portfolio"
                        >
                            portafolio
                        </ListGroup.Item>
                        <ListGroup.Item
                            className="bt_top"
                            as={Link}
                            to="/experience"
                        >
                            Experiencia
                        </ListGroup.Item>
                        <ListGroup.Item
                            className="bt_top"
                            as={Link}
                            to="/contact"
                        >
                            Contacto
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>

            <div className="skills_content">
                <div className="skills_content-items">
                    <div className="skills_content-items-img">
                        <i className="bx bxl-javascript"></i>
                    </div>
                    <p>
                        <strong>JavaScript</strong>
                    </p>
                </div>

                <div className="skills_content-items">
                    <div className="skills_content-items-img">
                        <i className="bx bxl-react"></i>
                    </div>
                    <p>
                        <strong>React</strong>
                    </p>
                </div>

                <div className="skills_content-items">
                    <div className="skills_content-items-img">
                        <i className="bx bxs-file-css"></i>
                    </div>
                    <p>
                        <strong>CSS</strong>
                    </p>
                </div>

                <div className="skills_content-items">
                    <div className="skills_content-items-img">
                        <i className="bx bxs-file-html"></i>
                    </div>
                    <p>
                        <strong>HTML</strong>
                    </p>
                </div>
                <div className="skills_content-items">
                    <div className="skills_content-items-img">
                        <i className="bx bxl-bootstrap"></i>
                    </div>
                    <p>
                        <strong>bootstrap</strong>
                    </p>
                </div>
                <div className="skills_content-items">
                    <div className="skills_content-items-img">
                        <i className="bx bxl-nodejs"></i>
                    </div>
                    <p>
                        <strong>Node.js</strong>
                    </p>
                </div>
                <div className="skills_content-items">
                    <div className="skills_content-items-img">
                        <i className="bx bxl-postgresql"></i>
                    </div>
                    <p>
                        <strong>PostgreSQL</strong>
                    </p>
                </div>

                <div className="skills_content-items">
                    <div className="skills_content-items-img">
                        <i className="bx bx-poll"></i>
                    </div>
                    <p>
                        <strong>Power Bi</strong>
                    </p>
                </div>
                <div className="skills_content-items">
                    <div className="skills_content-items-img">
                        <i className="bx bxl-github"></i>
                    </div>
                    <p>
                        <strong>github</strong>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Skills;
