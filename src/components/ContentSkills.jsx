import "../styles/skills.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "animate.css/animate.min.css";
import { useInView } from "react-intersection-observer";

const ContentSkills = () => {
    //logica libreria react-intersection-observer
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <>
            <section className="skills">
                <h2
                    className={`skills-title animate__animated ${
                        inView ? "animate__fadeInDown" : ""
                    } `}
                    ref={ref}
                >
                    Mis habilidades
                </h2>

                <Slider {...settings}>
                    <div className="skills-slide">
                        <div className="skills_content-items">
                            <div className="skills_content-items-img">
                                <i className="bx bxl-javascript"></i>
                            </div>
                            <p>
                                <strong>JavaScript</strong>
                            </p>
                        </div>
                    </div>
                    <div className="skills-slide">
                        <div className="skills_content-items">
                            <div className="skills_content-items-img">
                                <i className="bx bxl-react"></i>
                            </div>
                            <p>
                                <strong>React</strong>
                            </p>
                        </div>
                    </div>
                    <div className="skills-slide">
                        <div className="skills_content-items">
                            <div className="skills_content-items-img">
                                <i className="bx bxs-file-css"></i>
                            </div>
                            <p>
                                <strong>CSS</strong>
                            </p>
                        </div>
                    </div>
                    <div className="skills-slide">
                        <div className="skills_content-items">
                            <div className="skills_content-items-img">
                                <i className="bx bxs-file-html"></i>
                            </div>
                            <p>
                                <strong>HTML</strong>
                            </p>
                        </div>
                    </div>
                    <div className="skills-slide">
                        <div className="skills_content-items">
                            <div className="skills_content-items-img">
                                <i className="bx bxl-bootstrap"></i>
                            </div>
                            <p>
                                <strong>bootstrap</strong>
                            </p>
                        </div>
                    </div>
                    <div className="skills-slide">
                        <div className="skills_content-items">
                            <div className="skills_content-items-img">
                                <i className="bx bxl-nodejs"></i>
                            </div>
                            <p>
                                <strong>Node.js</strong>
                            </p>
                        </div>
                    </div>
                    <div className="skills-slide">
                        <div className="skills_content-items">
                            <div className="skills_content-items-img">
                                <i className="bx bxl-postgresql"></i>
                            </div>
                            <p>
                                <strong>PostgreSQL</strong>
                            </p>
                        </div>
                    </div>
                    <div className="skills-slide">
                        <div className="skills_content-items">
                            <div className="skills_content-items-img">
                                <i className="bx bx-poll"></i>
                            </div>
                            <p>
                                <strong>Power Bi</strong>
                            </p>
                        </div>
                    </div>
                    <div className="skills-slide">
                        <div className="skills_content-items">
                            <div className="skills_content-items-img">
                                <i className="bx bxl-github"></i>
                            </div>
                            <p>
                                <strong>github</strong>
                            </p>
                        </div>
                    </div>
                </Slider>
            </section>
        </>
    );
};

export default ContentSkills;
