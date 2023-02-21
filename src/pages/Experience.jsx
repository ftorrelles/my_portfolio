import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
const Experience = () => {
    return (
        <div>
            <h2 className="title_experience">experience</h2>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        Dichter & Neira (1 año 8 meses)
                    </Accordion.Header>
                    <Accordion.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item variant="dark">
                                Analista de Bienestar-operaciones (Enero 2022 -
                                Agosto 2022)
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Adquirí habilidades de liderazgo al gestionar
                                equipo regional de 7 personas
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Lidere el proceso de reclutamiento de campo a
                                nivel regional y participe junto a la gerente de
                                RRHH en la creación de los planes de
                                fidelización, trabajo realizado en 2 meses,
                                teniendo en cuenta que era un departamento que
                                no existía en la compañía, los países que
                                estaban en el proyecto eran: <br /> 1. Colombia{" "}
                                <br />
                                2. Costa Rica <br />
                                3. Panamá <br />
                                4. Guatemala <br />
                                5. Perú
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Realice la creación de bases de datos en excel a
                                nivel regional y la creación de visualizaciones
                                de los datos en power BI, al mismo tiempo
                                capacite al equipo regional en el uso de la
                                misma;
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Participé en la creación de Planes y ejecución
                                de los mismos, creación de indicadores de
                                medición del equipo a mi cargo.
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup>
                            <ListGroup.Item variant="dark">
                                Asistente de RRHH (Enero 2021 - Enero 2022)
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Lidere planes de Capacitaciones a nivel regional
                                logrando más de 500 capacitaciones en el año
                                2021.
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Realice la creación de bases de datos en excel y
                                visualización de los mismos en power BI
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Apoye en temas de documentación para blindar a
                                la compañía en cuanto a posibles demandas.
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Apoye en temas de vacaciones a nivel Colombia.
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Por los resultados logrados fue reconocido al
                                pasar el año con una camiseta y una medalla con
                                el valor de la iniciativa, al mismo tiempo fue
                                promovido como analista de Bienestar-OP.
                            </ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        La iglesia de Jesucristo de los santos de los ultimos
                        días (3 año 10 meses)
                    </Accordion.Header>
                    <Accordion.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item variant="dark">
                                Facilitador (Agosto 2017 - Mayo 2021)
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Estuve encargado de facilitar grupos de
                                aproximadamente 10 a 20 Jóvenes en el rango de
                                18 a 30 años en clases de teología, autoestima y
                                superación.
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Supervise otras clases.
                            </ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        La iglesia de Jesucristo de los santos de los ultimos
                        días (2 año 1 mes)
                    </Accordion.Header>
                    <Accordion.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item variant="dark">
                                Misionero (Octubre 2013 - Octubre 2015)
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Adquirí habilidades blandas como comunicación,
                                atención al público al compartir lecciones de
                                teología, la familia, Jesucristo entre muchos
                                otros temas.
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Lidere grupos de hasta 16 misioneros.
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Participe en la planificación de metas para la
                                misión.
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Por el buen desempeño me llamaron como
                                secretario del Presidente de misión por 6 meses,
                                encargandome de varios temas administrativos
                                como: <br /> 1. Planificar itinerarios de
                                hospedaje, viaje para nuevos misioneros. <br />{" "}
                                2. Encargado de la compra y entrega de
                                suministro (materiales, libros, placas entre
                                otras). <br /> 3. Planificar agenda del
                                Presidente de misión.
                            </ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        Del Monte Andina (3 años)
                    </Accordion.Header>
                    <Accordion.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item variant="dark">
                                practicante administrativo (Octubre 2013 -
                                Octubre 2015)
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Estuve encargado de todo lo referente a los
                                archivos tanto físicos como digitales de toda el
                                área operativa de la compañía.
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Apoye en la carga de datos de los insumos
                                utilizados en producción a las bases de
                                información regional.
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Estuve encargado del abastecimiento de
                                materiales de protección del personal del área
                                operativa.
                            </ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div
                style={{
                    position: "absolute",
                    top: "6rem",
                    right: "1rem",
                }}
            >
                <ListGroup horizontal>
                    <ListGroup.Item
                        className="bt_top"
                        as={Link}
                        to="/portfolio"
                    >
                        Portafolio
                    </ListGroup.Item>
                    <ListGroup.Item className="bt_top" as={Link} to="/contact">
                        Contacto
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default Experience;
