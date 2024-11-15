import "animate.css/animate.min.css";
import { useInView } from "react-intersection-observer";
const ContentPortfolio = () => {
  //logica libreria react-intersection-observer
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
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
          <div className="Portfolio__Project">
            <h3 className="title_project">Vivir Chevere</h3>
            <div className="Portfolio__Project-Image">
              <img src="/vivirChevere.JPG" className="active" alt="" />
            </div>
            <div className="Portfolio__Project-Description">
              <p>
                software integral de control empresarial. <br />
                <br />
                construido en React.js y en Node.js <br />
                <br />
                Vista no disponible por derechos privacidad
              </p>
            </div>
          </div>

          <div className="Portfolio__Project">
            <h3 className="title_project">Lazos de amor</h3>
            <div className="Portfolio__Project-Image">
              <img src="/lazos.JPG" className="active" alt="" />
            </div>
            <div className="Portfolio__Project-Description">
              <a
                style={{
                  textDecoration: "none",
                  color: "#78a083",
                }}
                href="https://fundacionlazosdeamor.com/"
                target={"_blank"}
              >
                <p>
                  Pagina web estatica, Fundación Lazos de amor <br />
                  <br />
                  construido en React.js <br />
                  <br />
                  haz click acá para verlo
                </p>
              </a>
            </div>
          </div>

          <div className="Portfolio__Project">
            <h3 className="title_project">Biupoll</h3>
            <div className="Portfolio__Project-Image">
              <img src="/biupoll.JPG" className="active" alt="" />
            </div>
            <div className="Portfolio__Project-Description">
              <a
                style={{
                  textDecoration: "none",
                  color: "#78a083",
                }}
                href="https://www.biupoll.com.co/"
                target={"_blank"}
              >
                <p>
                  Pagina web estatica, empresa investigación de mercado. <br />
                  <br />
                  construido en React.js <br />
                  <br />
                  haz click acá para verlo
                </p>
              </a>
            </div>
          </div>

          <div className="Portfolio__Project">
            <h3 className="title_project">Friend Shop app </h3>
            <div className="Portfolio__Project-Image">
              <img src="/friend Shop.PNG" className="active" alt="" />
            </div>
            <div className="Portfolio__Project-Description">
              <a
                style={{
                  textDecoration: "none",
                  color: "#78a083",
                }}
                href="https://friend-shop-app.netlify.app/"
                target={"_blank"}
              >
                <p>
                  Construcción del frontend de una tienda virtual (eCommerce) de
                  artículos de tecnología y del hogar. <br />
                  <br />
                  construido en React.js y en node.js <br />
                  <br />
                  haz click acá para verlo
                </p>
              </a>
            </div>
          </div>
          <div className="Portfolio__Project">
            <h3 className="title_project">Pokédex</h3>
            <div className="Portfolio__Project-Image">
              <img src="/Pokedex.PNG" className="active" alt="" />
            </div>
            <div className="Portfolio__Project-Description">
              <a
                style={{
                  textDecoration: "none",
                  color: "#78a083",
                }}
                href="https://pokedex-ft.netlify.app/"
                target={"_blank"}
              >
                <p>
                  Creación de app para los fanáticos de Pokemon, en la cual
                  pueden buscar información de sus pokémons favoritos. <br />
                  <br />
                  construido en React.js <br />
                  <br />
                  haz click acá para verlo
                </p>
              </a>
            </div>
          </div>

          <div className="Portfolio__Project">
            <h3 className="title_project">Betho's</h3>
            <div className="Portfolio__Project-Image">
              <img src="/Betho's.PNG" className="active" alt="" />
            </div>
            <div className="Portfolio__Project-Description">
              <a
                style={{
                  textDecoration: "none",
                  color: "#78a083",
                }}
                href="https://cocktails-ft.netlify.app/"
                target={"_blank"}
              >
                <p>
                  app para mostrar diferentes tipos de cócteles. <br />
                  <br />
                  construido en React.js <br />
                  <br />
                  haz click acá para verlo
                </p>
              </a>
            </div>
          </div>
          <div className="Portfolio__Project">
            <h3 className="title_project">Carrito de compra</h3>
            <div className="Portfolio__Project-Image">
              <img src="/carrito.PNG" className="active" alt="" />
            </div>
            <div className="Portfolio__Project-Description">
              <a
                style={{
                  textDecoration: "none",
                  color: "#78a083",
                }}
                href="https://clever-gumdrop-546402.netlify.app/"
                target={"_blank"}
              >
                <p>
                  Carrito de compra funcional <br />
                  <br />
                  Fue un proyecto vanilla usando html, css, y javaScript <br />
                  <br />
                  haz click acá para verlo
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentPortfolio;
