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
      title: "Biupoll",
      description:
        "Development of a landing page for a market research company.",
      technologies: "React, Javascript y CSS",
      image: "/portfolio2.png",
      url: "https://www.biupoll.com.co/",
    },
    {
      title: "Liliana Pardo",
      description: "Development of a landing page for a psychologist.",
      technologies: "React, Javascript y CSS",
      image: "/portfolio7.jpg",
      url: "https://liliana-pardo.netlify.app/",
    },
    {
      title: "Lazos de amor",
      description:
        "Development of a landing page and social media management for a foundation.",
      technologies: "React, Javascript y CSS",
      image: "/portfolio1.png",
      url: "https://lazos-de-amor.netlify.app/",
    },
    {
      title: "Julio Cesar",
      description: "Development of a landing page for a therapist.",
      technologies: "React, Javascript y CSS",
      image: "/portfolio4.png",
      url: "https://terapuetajuliocesar.netlify.app/",
    },

    {
      title: "Vivir Chevere",
      description:
        "A custom software for managing and controlling locations, handling sales and clients in a natural products company.",
      technologies: "React, Node.js, Sequelize CLI y MySQL",
      image: "/portfolio6.png",
      url: "https://www.youtube.com/watch?v=KKoggMgaJDw",
    },
    {
      title: "NetBar",
      description: "Development of a landing page for an internet company.",
      technologies: "React, Javascript y CSS",
      image: "/portfolio3.png",
      url: "https://netbartelecom.com/",
    },
    {
      title: "Torrelles dev",
      description: "Development of a landing page for a developer.",
      technologies: "React, Javascript y CSS",
      image: "/portfolio5.png",
      url: "https://my-portfolio-ft.netlify.app/",
    },
    {
      title: "Friend Shop app",
      description: "Development of an eCommerce virtual store template.",
      technologies: "React, Node.js, Sequelize CLI y PostgreSQL",
      image: "/friend Shop.PNG",
      url: "https://friend-shop-app.netlify.app/",
    },
    {
      title: "Pokédex",
      description:
        "Creation of an app for Pokémon fans, where they can search for information about their favorite Pokémon.",
      technologies: "React, Javascript y CSS",
      image: "/Pokedex.PNG",
      url: "https://pokedex-ft.netlify.app/",
    },
    {
      title: "Carrito de compra",
      description: "Functional shopping cart.",
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
          Some of my projects
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
                    <p>Click here to watch it</p>
                  </a>
                ) : (
                  <>
                    <p>{project.description}</p>
                    <p>{project.technologies}</p>
                    <p>View not available by privacy rights</p>
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
