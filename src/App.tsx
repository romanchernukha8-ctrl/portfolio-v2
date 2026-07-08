import Navbar from "./layout/Navbar";
import Hero from "./sections/Hero";
import FeaturedProject from "./sections/FeaturedProject";
import TechStack from "./sections/TechStack";
import About from "./sections/About";
import Contact from "./sections/Contact";

function App() {
  return (
    <main className="bg-slate-950 text-white">
      <Navbar />

      <Hero />

      <FeaturedProject />

      <TechStack />

      <About />

      <Contact />
    </main>
  );
}

export default App;
