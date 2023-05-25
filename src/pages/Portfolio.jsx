import ContentPortfolio from "../components/ContentPortfolio";

import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContentSkills from "../components/ContentSkills";
import ContentContact from "../components/ContentContact";

const Portfolio = () => {
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
            <ContentPortfolio />
            <ContentSkills />
            <ContentContact />
        </>
    );
};

export default Portfolio;
