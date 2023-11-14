import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav path="/" element={<Nav />} />
      <Home path="/" element={<Home />} />
      <AboutMe path="/" element={<AboutMe />} />
      <Projects path="/" element={<Projects />} />
      <Contact path="/" element={<Contact />} />
      <Footer path="/" element={<Footer />} />
    </div>
  );
}

export default App;
