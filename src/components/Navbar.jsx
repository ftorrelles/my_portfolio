import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <>
      <Navbar
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "0.8rem 2rem",
        }}
        bg="dark"
        variant="dark"
      >
        <Container>
          {/* <div style={{ display: "flex", gap: "1rem" }}>
            <Navbar.Brand as={Link} to="/">
             
              <img src="navLogo.svg" alt="" />
            </Navbar.Brand>
          </div> */}
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Discover"
                menuVariant="dark"
              >
                <NavDropdown.Item as={Link} to="/about">
                  About me
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/experience">
                  Experience
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/skills">
                  Skills
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/portfolio">
                  Portfolio
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/contact">
                  Contact form
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Container style={{ display: "flex", justifyContent: "end" }}>
          <Nav.Link
            href="https://drive.google.com/file/d/1eD7VPT9T83IBnCxNkN8iMAECp10xuIxO/view?usp=sharing"
            target="_blank"
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <h5>Resume</h5> <i className="bx bx-link-external"></i>
            </div>
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
