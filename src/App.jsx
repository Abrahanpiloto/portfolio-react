import Header from "./components/Header";
import { Aboutme } from "./components/Aboutme";
import { Welcome } from "./components/Welcome";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <Aboutme />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
