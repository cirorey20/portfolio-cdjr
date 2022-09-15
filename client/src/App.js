import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";
import Proyects from "./components/Proyects/Proyects";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <About />
      <Skills />
      <Proyects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
