import "../styles.css/Contact.css";

export const Contact = () => {
  return (
    <section className="contact-section" id="contactame">
      <div className="contact-title">
        <h1>¿Te gustaría trabajar conmigo?</h1>
        <p>
          Por aquí puedes <span>contactarme</span> o revisar mi{" "}
          <span>&lt;/código&gt; </span>
        </p>
      </div>
      <div className="contact-icons">
        <button className="redes">
          <a href="mailto:abrahanpiloto@gmail.com">
            <img src="images/icon-mail.svg" alt="email" />
          </a>
          <p>Email</p>
        </button>
        <button className="redes" id="github-icon">
          <a href="https://github.com/Abrahanpiloto" target="_blank">
            <img src="images/icon-github.png" alt="github" />
          </a>
          <p>GitHub</p>
        </button>
        <button className="redes" id="linkedin-icon">
          <a
            href="https://www.linkedin.com/in/abrahan-piloto-a683a0129"
            target="_blank"
          >
            <img src="images/icon-linkedin.png" alt="linkedin" />
          </a>
          <p>Linkedin</p>
        </button>
        <button className="redes">
          <a href="miCv.pdf" download="Abrahan_Piloto_CV.pdf" target="_blank">
            <img src="images/icon-cv.png" alt="cv" />
          </a>
          <p>Descargar CV</p>
        </button>
      </div>
    </section>
  );
};
