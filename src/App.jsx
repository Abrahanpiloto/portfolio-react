import Header from "./components/Header";
import { Aboutme } from "./components/Aboutme";
import { Welcome } from "./components/Welcome";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <Aboutme />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
