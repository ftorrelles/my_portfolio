import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
// import { Link } from "react-router-dom";

import "animate.css/animate.min.css";
import { useInView } from "react-intersection-observer";

const ContentExperience = () => {
  //logica libreria react-intersection-observer
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <>
      <div>
        <h2
          className={`title_experience animate__animated ${
            inView ? "animate__fadeInDown" : ""
          } `}
          ref={ref}
        >
          Experience
        </h2>

        <Accordion style={{ paddingTop: "3rem" }} defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>CodeCraft (Present)</Accordion.Header>
            <Accordion.Body>
              <ListGroup variant="flush">
                <ListGroup.Item variant="dark">
                  Frontend Developer (July 2023 - Present) Freelance
                </ListGroup.Item>
                <ListGroup.Item>
                  As a freelance React Frontend Developer, I create responsive,
                  visually appealing, and optimized web templates tailored to
                  client needs. My expertise includes:
                </ListGroup.Item>
                <ListGroup.Item>
                  Developing React components with Redux, React Router DOM, and
                  Hooks.
                </ListGroup.Item>
                <ListGroup.Item>
                  Styling with CSS and Bootstrap for clean, modern designs.
                </ListGroup.Item>
                <ListGroup.Item>
                  Adding features like calendars, animations, and effects.
                </ListGroup.Item>
                <ListGroup.Item>Connecting websites to APIs.</ListGroup.Item>
                <ListGroup.Item>
                  Delivering user-friendly, responsive solutions for various
                  industries.
                </ListGroup.Item>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>CodeCraft (10 months)</Accordion.Header>
            <Accordion.Body>
              <ListGroup variant="flush">
                <ListGroup.Item variant="dark">
                  Full-stack Developer (May 2023 - February 2024) Freelance
                </ListGroup.Item>
                <ListGroup.Item>
                  I worked as a full-stack web developer.
                </ListGroup.Item>
                <ListGroup.Item>
                  On the front end, I specialized in building templates and
                  sections for business management software, utilizing the power
                  and versatility of React.js to deliver intuitive and
                  functional interfaces.
                </ListGroup.Item>
                <ListGroup.Item>
                  On the back end, I engaged in projects using technologies like
                  Node.js and Express.js, providing efficient and robust
                  solutions. My experience included implementing complete APIs
                  with controllers and services, and using PostgreSQL, MySQL,
                  and Sequelize databases for projects that required a solid
                  database architecture.
                </ListGroup.Item>
                <ListGroup.Item>
                  I also worked on deploying projects on servers, performing the
                  necessary configurations for emails, SSL certificates, among
                  others, ensuring their proper functioning.
                </ListGroup.Item>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Dichter & Neira (1 year 8 months)
            </Accordion.Header>
            <Accordion.Body>
              <ListGroup variant="flush">
                <ListGroup.Item variant="dark">
                  Well-being analyst (January 2022 - August 2022) Full time
                </ListGroup.Item>
                <ListGroup.Item>
                  I acquired leadership skills by managing a regional team of 7
                  people.
                </ListGroup.Item>
                <ListGroup.Item>
                  I led the field recruitment process at a regional level and
                  participated, alongside the HR manager, in the creation of
                  loyalty plans. This work was completed in two months for a
                  department that previously did not exist in the company. The
                  countries involved in the project were:: <br /> 1. Colombia{" "}
                  <br />
                  2. Costa Rica <br />
                  3. Panamá <br />
                  4. Guatemala <br />
                  5. Perú
                </ListGroup.Item>
                <ListGroup.Item>
                  I created regional databases in Excel and developed data
                  visualizations in Power BI, while simultaneously training the
                  regional team in its use.
                </ListGroup.Item>
                <ListGroup.Item>
                  I participated in the creation and execution of plans and
                  developed performance indicators for the team under my
                  supervision.
                </ListGroup.Item>
              </ListGroup>
              <ListGroup>
                <ListGroup.Item variant="dark">
                  HR assistant (Enero 2021 - Enero 2022) Full time
                </ListGroup.Item>
                <ListGroup.Item>
                  I led training plans at a regional level, achieving over 500
                  trainings in the year 2021.
                </ListGroup.Item>
                <ListGroup.Item>
                  I created databases in Excel and visualized them in Power BI.
                </ListGroup.Item>
                <ListGroup.Item>
                  I supported documentation issues to protect the company
                  against potential lawsuits.
                </ListGroup.Item>
                <ListGroup.Item>
                  I assisted with vacation matters across Colombia.
                </ListGroup.Item>
                <ListGroup.Item>
                  Due to the achieved results, I was recognized at the end of
                  the year with a T-shirt and a medal that embodied the value of
                  initiative. At the same time, I was promoted to the position
                  of Well-being-OP Analyst.
                </ListGroup.Item>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              The church of Jesus Christ of latter-day saints (3 years 10
              months)
            </Accordion.Header>
            <Accordion.Body>
              <ListGroup variant="flush">
                <ListGroup.Item variant="dark">
                  Course Facilitator (August 2017 - May 2021) Full time
                </ListGroup.Item>
                <ListGroup.Item>
                  I was in charge of facilitating groups of approximately 10 to
                  20 young people, aged 18 to 30, in classes on theology,
                  self-esteem, and personal development.
                </ListGroup.Item>
                <ListGroup.Item>
                  I also supervised other classes.
                </ListGroup.Item>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              The church of Jesus Christ of latter-day saints (2 years 1 month)
            </Accordion.Header>
            <Accordion.Body>
              <ListGroup variant="flush">
                <ListGroup.Item variant="dark">
                  Missionary Service Volunteer (October 2013 - October 2015)
                  Full time
                </ListGroup.Item>
                <ListGroup.Item>
                  I acquired soft skills such as communication and public
                  engagement while sharing lessons on theology, family, Jesus
                  Christ, among many other topics.
                </ListGroup.Item>
                <ListGroup.Item>
                  I led groups of up to 16 missionaries.
                </ListGroup.Item>
                <ListGroup.Item>
                  I participated in planning goals for the mission.
                </ListGroup.Item>
                <ListGroup.Item>
                  Due to my good performance, I was appointed as the Mission
                  President's Secretary for six months, taking charge of various
                  administrative matters such as: <br /> 1. Planning
                  accommodation and travel itineraries for new missionaries.{" "}
                  <br /> 2. Responsible for the purchase and delivery of
                  supplies (materials, books, badges, among others). <br /> 3.
                  Planning the Mission President's schedule.
                </ListGroup.Item>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Del Monte Andina (3 Years)</Accordion.Header>
            <Accordion.Body>
              <ListGroup variant="flush">
                <ListGroup.Item variant="dark">
                  Administrative Assistant Intern (October 2013 - October 2015)
                  Full time
                </ListGroup.Item>
                <ListGroup.Item>
                  I was in charge of managing both physical and digital files
                  for the entire operational area of the company.
                </ListGroup.Item>
                <ListGroup.Item>
                  I assisted in uploading data regarding the supplies used in
                  production to the regional information databases.
                </ListGroup.Item>
                <ListGroup.Item>
                  I was also responsible for supplying personal protective
                  equipment to the staff in the operational area.
                </ListGroup.Item>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default ContentExperience;
