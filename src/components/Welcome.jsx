import "../styles.css/Welcome.css";
export const Welcome = () => {
  return (
    <section className="welcome">
      <div className="presentation">
        <div className="presentation-name">
          <h1 className="name">
            Hola, soy <span>Abrahan Piloto</span>.
          </h1>
        </div>
        <div className="presentation-profesion">
          <p>
            Frontend <br /> Developer<span>.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
