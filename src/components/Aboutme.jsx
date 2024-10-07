import "../styles.css/Aboutme.css";

export const Aboutme = () => {
  return (
    <section className="aboutme" id="acerca-de-mi">
      <div className="container-card">
        <div className="container-photo">
          <img src="/images/blancoynegro.jpg" alt="Mi Foto" className="photo" />
        </div>
        <div className="container-testimonio">
          <div className="testimonio-profesion">
            <h3>Acerca de mí:</h3>
          </div>
          <br />
          <p>
            Me encanta la tecnología y el desarrollo de aplicaciones que
            ofrezcan soluciones. Estoy siempre en constante investigación y
            aprendizaje, afrontando retos y experiencias, y dispuesto a aprender
            e implementar nuevas herramientas tecnológicas. <br />
            <br /> Considero que algunas de mis <span>
              habilidades blandas
            </span>{" "}
            son: curiosidad, perseverancia, resolución de conflictos, empatía,
            honestidad, puntualidad, entre otras.
          </p>
          <div className="container-skills">
            <h4>Skills</h4>
            <div className="subcontainer">
              <p>
                Html, Css, JavaScript, React, Firebase, TailwindCss, Vite, Git
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
