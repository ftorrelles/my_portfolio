import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import ContentAbout from "../components/ContentAbout";
import ContentContact from "../components/ContentContact";
import ContentExperience from "../components/ContentExperience";
import ContentHome from "../components/ContentHome";
import ContentPortfolio from "../components/ContentPortfolio";
import ContentSkills from "../components/ContentSkills";
import ContentGame from "../components/ContentGame";

const Home = () => {
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
          <ListGroup.Item className="bt_top" as={Link} to="/portfolio">
            Portafolio
          </ListGroup.Item>
          <ListGroup.Item className="bt_top" as={Link} to="/experience">
            Experiencia
          </ListGroup.Item>
          <ListGroup.Item className="bt_top" as={Link} to="/contact">
            Contactame
          </ListGroup.Item>
        </ListGroup>
      </div>
      <ContentHome />
      <ContentAbout />
      <ContentSkills />
      <ContentExperience />
      <ContentPortfolio />
      <ContentContact />
    </>
  );
};

export default Home;
