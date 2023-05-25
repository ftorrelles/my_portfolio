import ContentSkills from "../components/ContentSkills";

import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContentExperience from "../components/ContentExperience";

const Skills = () => {
    return (
        <>
            <div
                style={{
                    position: "absolute",
                    top: "6rem",
                    right: "1rem",
                }}
            >
                <ListGroup horizontal>
                    <ListGroup.Item className="bt_top" as={Link} to="/3">
                        Home
                    </ListGroup.Item>
                    <ListGroup.Item
                        className="bt_top"
                        as={Link}
                        to="/experience"
                    >
                        Experiencia
                    </ListGroup.Item>
                    <ListGroup.Item className="bt_top" as={Link} to="/contact">
                        Contactame
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <ContentSkills />
            <ContentExperience />
        </>
    );
};

export default Skills;
