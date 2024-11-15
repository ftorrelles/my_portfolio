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
          <div style={{ display: "flex", gap: "1rem" }}>
            <Navbar.Brand as={Link} to="/">
              {/* <i className="bx bxs-home"></i> */}
              <img src="navLogo.svg" alt="" />
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Descubre"
                menuVariant="dark"
              >
                <NavDropdown.Item as={Link} to="/about">
                  Acerca de mi
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/experience">
                  Experiencia
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/skills">
                  Habilidades
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/portfolio">
                  Portafolio
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/contact">
                  Formulario de contacto
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Container style={{ display: "flex", justifyContent: "end" }}>
          <Nav.Link
            href="https://drive.google.com/file/d/1X_VhiUqOy86MaoIfkMs-P5oL5sUKIsLN/view?usp=sharing"
            target="_blank"
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <h3>CV</h3> <i className="bx bx-link-external"></i>
            </div>
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
