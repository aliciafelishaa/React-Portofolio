import "./app.scss";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portofolio from "./components/portofolio/Portofolio";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Parallax">
        <Parallax type="services" />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="Parallax">
        <Parallax type="portofolio" />
      </section>
      {/* <section><Portofolio/></section> */}
      <Portofolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
