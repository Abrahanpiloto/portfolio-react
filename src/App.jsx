import Header from "./components/Header";
import { Aboutme } from "./components/Aboutme";
import { Welcome } from "./components/Welcome";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <Aboutme />
      <Projects />
    </>
  );
}

export default App;
