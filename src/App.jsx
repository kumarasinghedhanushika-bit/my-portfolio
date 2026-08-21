import Navbar from "./component/Navbar.jsx";
import Hero from "./component/Hero.jsx";
import About from "./component/About.jsx";
import Skills from "./component/Skills.jsx";
import Education from "./component/Education.jsx";
import Projects from "./component/Projects.jsx";
import Contact from "./component/Contact.jsx";
import Footer from "./component/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen bg-bg text-text overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
