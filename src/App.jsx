import "./app.scss";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Parallax from "./components/parallax/Parallax";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Parallax"><Parallax type="services"/></section>
      <section id="Services">Services</section>
      <section id="Parallax"><Parallax type="portofolio"/></section>
      <section>Portofolio1</section>
      <section>Portofolio2</section>
      <section>Portofolio3</section>
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
