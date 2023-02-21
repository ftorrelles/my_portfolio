import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";
import { Container } from "react-bootstrap";
import NavBar from "./components/Navbar";

function App() {
    return (
        <HashRouter>
            <div className="App">
                <NavBar />
                <Container className="my-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                    </Routes>
                </Container>
            </div>
        </HashRouter>
    );
}

export default App;
