import { useState } from "react";
import Hero from "./Sections/Hero";
import Navbar from "./Sections/Navbar";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Clients from "./Sections/Clients";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import Experience from "./Sections/Experience";

const App = () => {
  const [language, setLanguage] = useState("en");
  const toggleLanguage = () => {
    setLanguage((prevLang) => {
      if (prevLang === "en") return "ar";
      if (prevLang === "ar") return "in";
      return "en";
    });
  };

  return (
    <main className="max-w-7xl mx-auto">
      <Navbar language={language} setLanguage={toggleLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Projects language={language} />
      <Clients language={language} />
      <Experience language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </main>
  );
};

export default App;
