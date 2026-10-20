
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-copy">
          <h1 className="hero-name">CHANDRA.</h1>

          <p className="hero-description">
            I create films, edit visuals and bring ideas to life
            through the language of cinema.
          </p>

          <div className="hero-actions">
            <a href="#work" className="hero-button">
              EXPLORE MY WORK
              <span aria-hidden="true">⟶</span>
            </a>
          </div>
        </div>
      </div>

      <div className="hero-bottomline">
        <span className="hero-index">01</span>
        <span className="hero-bottom-rule" />
        <span className="hero-bottom-label">VISUAL STORYTELLING</span>
        <span className="hero-bottom-signature">FRAME BY FRAME.</span>
      </div>
    </section>
  );
}

export default Hero;
