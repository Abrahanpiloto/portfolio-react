import "../styles.css/Projects.css";
import { useEffect, useRef } from "react";

export const Projects = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.5 } // El porcentaje del card que debe estar visible para activar la animación
    );

    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    // Cleanup cuando el componente se desmonta
    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <section className="projects-section" id="mis-proyectos">
      <h2 className="title-projects">Mis trabajos y proyectos personales.</h2>
      <div className="projects-container">
        {/* <--Card Landing page--> */}
        <div className="card" ref={(el) => (cardsRef.current[0] = el)}>
          <div className="image-box">
            <img src="images/landingpage.png" alt="clima" />
          </div>
          <div className="profile-details">
            <p>
              Landingpage creada desde un diseño en figma proporcionado por el
              cliente y estilizada en Tailwindcss.
            </p>
            <div className="ir">
              <a
                href="https://flowinggo.com/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir al sitio web
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Card  Autenticacion-Firebase--> */}
        <div className="card" ref={(el) => (cardsRef.current[1] = el)}>
          <div className="image-box">
            <img src="images/autenticationfirebase.png" alt="autenticacion" />
          </div>
          <div className="profile-details">
            <p>
              App de tareas en React, integracion con firebase para base de
              datos y autenticacion,y registros de nuevos usuarios.
            </p>
            <div className="ir">
              <a
                href="https://autenticationfirebase.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir al sitio web
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Card Weather --> */}
        <div className="card" ref={(el) => (cardsRef.current[2] = el)}>
          <div className="image-box">
            <img src="images/clima.png" alt="clima" />
          </div>
          <div className="profile-details">
            <p>
              App del clima hecha con Javascript vanilla, usando una API publica
              para consultar la informacion y estilizada en Tailwindcss.
            </p>
            <div className="ir">
              <a
                href="https://app-of-clima.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir al sitio web
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Card Bills --> */}
        <div className="card" ref={(el) => (cardsRef.current[3] = el)}>
          <div className="image-box">
            <img src="images/gastos.png" alt="clima" />
          </div>
          <div className="profile-details">
            <p>
              App para registrar y controlar presupuesto personal hecha con
              Javascript, usa localStorage, y Tailwindcss.
            </p>
            <div className="ir">
              <a
                href="https://admingastoreact.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir al sitio web
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Card Loan --> */}
        <div className="card" ref={(el) => (cardsRef.current[4] = el)}>
          <div className="image-box">
            <img src="images/prestamos.png" alt="clima" />
          </div>
          <div className="profile-details">
            <p>
              App simulador de cotizador de prestamos hecha en React, y
              estilizada en Tailwindcss.
            </p>
            <div className="ir">
              <a
                href="https://cotizadorofprestamos.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir al sitio web
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Card Criptocurrencies --> */}
        <div className="card" ref={(el) => (cardsRef.current[5] = el)}>
          <div className="image-box">
            <img src="images/cripto.png" alt="clima" />
          </div>
          <div className="profile-details">
            <p>
              App para cotizar criptomonedas hecha en Javascript, API publica
              para consultar la informacion, estilizada en Tailwindcss.
            </p>
            <div className="ir">
              <a
                href="https://criptoprice.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir al sitio web
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
