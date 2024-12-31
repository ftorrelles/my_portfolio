import "animate.css/animate.min.css";
import { useInView } from "react-intersection-observer";
const ContentPortfolio = () => {
  //logica libreria react-intersection-observer
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const projects = [
    {
      title: "Lazos de amor",
      description:
        "Desarrollo de landing Page y manejo de redes sociales de una fundación.",
      technologies: "React, Javascript y CSS",
      image: "/portfolio1.png",
      url: "https://fundacionlazosdeamor.com/",
    },
    {
      title: "Biupoll",
      description:
        "Desarrollo de una landing page para empresa de investigación de mercado.",
      technologies: "React, Javascript y CSS",
      image: "/portfolio2.png",
      url: "https://www.biupoll.com.co/",
    },
    {
      title: "Vivir Chevere",
      description:
        "Un software personalizado para la gestión y control de sedes, manejo de ventas y clientes en empresa de productos naturista.",
      technologies: "React, Node.js, Sequelize CLI y MySQL",
      image: "/portfolio6.png",
      url: "",
    },
    {
      title: "NetBar",
      description: "Desarrollo de una landing page para empresa de internet.",
      technologies: "React, Javascript y CSS",
      image: "/portfolio3.png",
      url: "https://netbar.netlify.app/",
    },
    {
      title: "Julio Cesar",
      description: "Desarrollo de una landing page para terapeuta.",
      technologies: "React, Javascript y CSS",
      image: "/portfolio4.png",
      url: "https://terapuetajuliocesar.netlify.app/",
    },
    {
      title: "Torrelles dev",
      description: "Desarrollo de una landing page para Desarrollador.",
      technologies: "React, Javascript y CSS",
      image: "/portfolio5.png",
      url: "https://my-portfolio-ft.netlify.app/",
    },
    {
      title: "Friend Shop app",
      description: "Desarrollo de una plantilla de tienda virtual eCommerce",
      technologies: "React, Node.js, Sequelize CLI y PostgreSQL",
      image: "/friend Shop.PNG",
      url: "https://friend-shop-app.netlify.app/",
    },
    {
      title: "Pokédex",
      description:
        "Creación de app para los fanáticos de Pokemon, en la cual pueden buscar información de sus pokémons favoritos.",
      technologies: "React, Javascript y CSS",
      image: "/Pokedex.PNG",
      url: "https://pokedex-ft.netlify.app/",
    },
    {
      title: "Carrito de compra",
      description: "Carrito de compra funcional",
      technologies: "Javascript, HTML y CSS",
      image: "/carrito.PNG",
      url: "https://clever-gumdrop-546402.netlify.app/",
    },
  ];
  return (
    <>
      <section className="portfolio">
        <h2
          className={`animate__animated ${
            inView ? "animate__fadeInDown" : ""
          } `}
          ref={ref}
        >
          Algunos de mis proyectos
        </h2>

        <div className="Portfolio_content">
          {projects.map((project, index) => (
            <div className="Portfolio__Project" key={index}>
              <h3 className="title_project">{project.title}</h3>
              <div className="Portfolio__Project-Image">
                <img
                  src={project.image}
                  className="active"
                  alt={project.title}
                />
              </div>
              <div className="Portfolio__Project-Description">
                {project.url ? (
                  <a
                    style={{
                      textDecoration: "none",
                      color: "#78a083",
                    }}
                    href={project.url}
                    target={"_blank"}
                  >
                    <p>{project.description}</p>
                    <p>{project.technologies}</p>
                    <p>haz click acá para verlo</p>
                  </a>
                ) : (
                  <>
                    <p>{project.description}</p>
                    <p>{project.technologies}</p>
                    <p>Vista no disponible por derechos privacidad</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ContentPortfolio;
