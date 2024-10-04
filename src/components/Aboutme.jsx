export const Aboutme = () => {
  return (
    <section className="aboutme" id="aboutme-description">
      <div className="container-card">
        <div className="container-photo">
          <img src="/images/blancoynegro.jpg" alt="Mi Foto" className="photo" />
        </div>
        <div className="container-testimonio">
          <h2>Abrahan Piloto</h2>
          <p className="testimonio-profesion">
            <span>Frontend Developer.</span>
          </p>
          <br />
          <p>
            Me encanta la tecnología y el desarrollo de aplicaciones que
            ofrezcan soluciones...
          </p>
          <div className="container-skills">
            <h3>Skills</h3>
            <div className="subcontainer">
              {/* Aquí puedes agregar tus íconos y habilidades */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
