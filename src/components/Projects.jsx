import "../styles.css/Projects.css";

export const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="title-projects">Mis trabajos y proyectos personales.</h2>
      <div className="projects-container"></div>
      {/* <--Card Landing page--> */}
      <div className="card">
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
      <div className="card">
        <div className="image-box">
          <img src="images/autenticationfirebase.png" alt="autenticacion" />
        </div>
        <div className="profile-details">
          <p>
            App de tareas creada en React, tiene integracion con firebase
            firestore como base de datos y autenticacion de login, asi como la
            opcion de registrar nuevos usuarios.
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
      <div className="card">
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
      <div className="card">
        <div className="image-box">
          <img src="images/gastos.png" alt="clima" />
        </div>
        <div className="profile-details">
          <p>
            App para registrar y controlar presupuesto personal hecha con
            Javascript vanilla, usa localStorage para mantener la informacion, y
            estilizada en Tailwindcss.
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
      <div className="card">
        <div className="image-box">
          <img src="images/prestamos.png" alt="clima" />
        </div>
        <div className="profile-details">
          <p>
            App simulador de cotizador de prestamos hecha en React, y estilizada
            en Tailwindcss.
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
      <div className="card">
        <div className="image-box">
          <img src="images/cripto.png" alt="clima" />
        </div>
        <div className="profile-details">
          <p>
            App para cotizar el precio de las criptomonedas hecha en Javascript
            vanilla, usando una API publica para consultar la informacion y
            estilizada en Tailwindcss.
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
    </section>
  );
};
