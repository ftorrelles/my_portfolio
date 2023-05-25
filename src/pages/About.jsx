import ContentAbout from "../components/ContentAbout";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContentExperience from "../components/ContentExperience";

const About = () => {
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
                    <ListGroup.Item className="bt_top" as={Link} to="/#">
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
            <ContentAbout />
            <ContentExperience />
        </>
    );
};

export default About;
