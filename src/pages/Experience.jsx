import ContentExperience from "../components/ContentExperience";

import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContentSkills from "../components/ContentSkills";
import ContentPortfolio from "../components/ContentPortfolio";
import ContentContact from "../components/ContentContact";

const Experience = () => {
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
                        to="/portfolio"
                    >
                        Portafolio
                    </ListGroup.Item>
                    <ListGroup.Item className="bt_top" as={Link} to="/contact">
                        Contactame
                    </ListGroup.Item>
                </ListGroup>
            </div>
            <ContentExperience />
            <ContentSkills />
            <ContentPortfolio />
            <ContentContact />
        </>
    );
};

export default Experience;
