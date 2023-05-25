import ContentContact from "../components/ContentContact";

import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContentSkills from "../components/ContentSkills";

const Contact = () => {
    return (
        <>
            <div style={{ paddingTop: "3rem" }}></div>
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
                        Portafolio
                    </ListGroup.Item>
                    <ListGroup.Item
                        className="bt_top"
                        as={Link}
                        to="/experience"
                    >
                        Experiencia
                    </ListGroup.Item>
                    <ListGroup.Item className="bt_top" as={Link} to="/#">
                        Home
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <ContentContact />
            <ContentSkills />
        </>
    );
};

export default Contact;
