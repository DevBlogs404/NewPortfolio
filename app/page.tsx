import Image from "next/image";
import Header from "./components/Header";
import colors from "./themes/colors";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main
      className="min-h-screen  lg:mx-auto"
      style={{ backgroundColor: colors.white }}
    >
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
